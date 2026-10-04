import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import bundledLinks from "@/data/links.json";

interface LinkItem {
  id: string;
  title: string;
  description: string;
  status: "available" | "pending";
  url: string;
  category: "document" | "presentation";
  date?: string;
}

interface LinksData {
  documents: LinkItem[];
}

const LINKS_KEY = "ai-eyedx:links";
let inMemoryCache: LinksData | null = null;

function getFilePath() {
  return path.join(process.cwd(), "src", "data", "links.json");
}

function isLinkItem(value: unknown): value is LinkItem {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "string" &&
    typeof item.title === "string" &&
    typeof item.description === "string" &&
    typeof item.url === "string" &&
    (item.status === "available" || item.status === "pending") &&
    (item.category === "document" || item.category === "presentation") &&
    (item.date === undefined || typeof item.date === "string")
  );
}

function parseLinksData(value: unknown): LinksData | null {
  if (!value || typeof value !== "object") return null;
  const documents = (value as { documents?: unknown }).documents;
  if (!Array.isArray(documents)) return null;
  return { documents: documents.filter(isLinkItem) };
}

function getRedisConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

async function redisCommand(command: Array<string>): Promise<unknown> {
  const config = getRedisConfig();
  if (!config) throw new Error("Redis is not configured");

  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  const payload = (await response.json()) as { result?: unknown; error?: string };

  if (!response.ok || payload.error) {
    throw new Error(payload.error || `Redis request failed with status ${response.status}`);
  }

  return payload.result;
}

function readBundledLinks(): LinksData {
  if (inMemoryCache) return inMemoryCache;

  const parsed = parseLinksData(bundledLinks);
  if (parsed) {
    inMemoryCache = parsed;
    return parsed;
  }

  return { documents: [] };
}

async function readLinksData(): Promise<LinksData> {
  if (getRedisConfig()) {
    try {
      const result = await redisCommand(["GET", LINKS_KEY]);
      if (typeof result === "string") {
        const parsed = parseLinksData(JSON.parse(result));
        if (parsed) return parsed;
      }
    } catch (error) {
      console.error("Error reading links from Redis:", error);
    }
  }

  return readBundledLinks();
}

async function writeLinksData(data: LinksData): Promise<boolean> {
  if (getRedisConfig()) {
    try {
      await redisCommand(["SET", LINKS_KEY, JSON.stringify(data)]);
      return true;
    } catch (error) {
      console.error("Could not persist links to Redis:", error);
      return false;
    }
  }

  try {
    fs.writeFileSync(getFilePath(), JSON.stringify(data, null, 2), "utf8");
    inMemoryCache = data;
    return true;
  } catch (error) {
    console.error("Could not persist links data:", error);
    return false;
  }
}

export async function GET() {
  try {
    return NextResponse.json(await readLinksData());
  } catch {
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const { password, item, updatedLink, action } = body;
    const target = item || updatedLink;

    const validPassword = process.env.ADMIN_PASSWORD;
    if (!validPassword) {
      return NextResponse.json(
        { error: "Admin access is not configured." },
        { status: 503 }
      );
    }

    if (typeof password !== "string" || password !== validPassword) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (action === "authenticate") {
      return NextResponse.json({ success: true });
    }

    if (!isLinkItem(target)) {
      return NextResponse.json({ error: "Invalid link item" }, { status: 400 });
    }

    if (target.url) {
      try {
        const url = new URL(target.url);
        if (url.protocol !== "https:" && url.protocol !== "http:") {
          throw new Error("Unsupported URL protocol");
        }
      } catch {
        return NextResponse.json(
          { error: "URL must be a valid HTTP or HTTPS address" },
          { status: 400 }
        );
      }
    }

    const data = await readLinksData();
    const index = data.documents.findIndex((document) => document.id === target.id);
    if (index === -1) data.documents.push(target);
    else data.documents[index] = { ...data.documents[index], ...target };

    if (!(await writeLinksData(data))) {
      return NextResponse.json(
        { error: "Persistent link storage is not configured on this deployment." },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true, documents: data.documents });
  } catch (error) {
    console.error("API error updating link:", error);
    return NextResponse.json({ error: "Failed to update link" }, { status: 500 });
  }
}
