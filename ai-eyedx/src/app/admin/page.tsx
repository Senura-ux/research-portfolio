"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  documentDefinitions,
  mergeDocumentDefinitions,
  type DocumentGroup,
} from "@/data/document-definitions";

interface LinkItem {
  id: string;
  title: string;
  description: string;
  status: "available" | "pending";
  url: string;
  category: "document" | "presentation";
  group?: DocumentGroup;
}

interface SaveMessage {
  id: string;
  ok: boolean;
  text: string;
}

function mergeSavedLinks(savedLinks: LinkItem[]): LinkItem[] {
  return [
    ...mergeDocumentDefinitions(savedLinks),
    ...savedLinks
      .filter((item) => item.category === "presentation")
      .map((item) => item.id === "viva" ? { ...item, title: "PP2 Demo presentation" } : item),
  ];
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState("");
  const [saving, setSaving] = useState<string | null>(null);
  const [saveMsg, setSaveMsg] = useState<SaveMessage | null>(null);

  useEffect(() => {
    if (!authenticated) return;

    let cancelled = false;

    fetch("/api/links")
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not load saved link data.");
        return (await response.json()) as { documents?: LinkItem[] };
      })
      .then((data) => {
        if (!cancelled) setLinks(mergeSavedLinks(data.documents ?? []));
      })
      .catch((loadError: unknown) => {
        if (!cancelled) {
          setLoadingError(loadError instanceof Error ? loadError.message : "Could not load saved link data.");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [authenticated]);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthenticating(true);
    setError("");

    try {
      const response = await fetch("/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "authenticate", password }),
      });

      if (!response.ok) {
        const result = (await response.json()) as { error?: string };
        setError(result.error || "Invalid password");
        return;
      }

      setLoading(true);
      setLoadingError("");
      setAuthenticated(true);
    } catch {
      setError("Unable to reach the server. Please try again.");
    } finally {
      setAuthenticating(false);
    }
  };

  const updateLink = async (item: LinkItem) => {
    setSaving(item.id);
    setSaveMsg(null);

    try {
      const response = await fetch("/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, item }),
      });
      const result = (await response.json()) as { error?: string; documents?: LinkItem[] };

      if (!response.ok) {
        setSaveMsg({ id: item.id, ok: false, text: result.error || "Unable to save this link." });
        return;
      }

      if (!result.documents) {
        setSaveMsg({ id: item.id, ok: false, text: "The server returned an incomplete save response." });
        return;
      }

      setLinks(mergeSavedLinks(result.documents));
      setSaveMsg({ id: item.id, ok: true, text: "Saved" });
    } catch {
      setSaveMsg({ id: item.id, ok: false, text: "Unable to reach the server. Please try again." });
    } finally {
      setSaving(null);
      window.setTimeout(() => setSaveMsg(null), 4000);
    }
  };

  const handleChange = (id: string, field: "url" | "status", value: string) => {
    setLinks((current) =>
      current.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  if (!authenticated) {
    return (
      <main className="documents-page admin-page">
        <section className="documents-hero relative isolate overflow-hidden text-white">
          <div className="documents-hero-grid" />
          <div className="documents-hero-orbit documents-hero-orbit-one" />
          <div className="documents-hero-orbit documents-hero-orbit-two" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <span className="documents-kicker"><span /> Research archive · Administration</span>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.07em] sm:text-6xl">Admin access<span className="text-teal-300">.</span></h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100/85 sm:text-lg">
              Manage document and presentation links shown in the AI EyeDx research archive.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <form onSubmit={handleLogin} className="admin-login-panel mx-auto">
            <div className="admin-login-icon" aria-hidden="true">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7 10V7a5 5 0 0110 0v3m-11 0h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2zm5 4v3" />
              </svg>
            </div>
            <span className="documents-section-kicker">Secure administration</span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-100">Sign in to manage links</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Enter the admin password configured for this project.
            </p>
            {error && <p className="admin-error-message mt-5" role="alert">{error}</p>}
            <label htmlFor="admin-password" className="admin-field-label mt-6">Admin password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter admin password"
              className="admin-input mt-2"
              autoComplete="current-password"
              required
            />
            <button type="submit" disabled={authenticating} className="admin-primary-button mt-5 w-full">
              {authenticating ? "Checking access…" : "Continue to admin"}
            </button>
            <p className="mt-5 text-center text-xs leading-relaxed text-slate-400">
              Configure access with the <code className="admin-code">ADMIN_PASSWORD</code> environment variable.
            </p>
          </form>
        </section>
      </main>
    );
  }

  const documents = mergeDocumentDefinitions(links);
  const presentations = links.filter((item) => item.category === "presentation");
  const availableCount = links.filter((item) => item.status === "available" && item.url).length;
  const groups = (["Checklist", "Proposal", "Final"] as const).map((group) => ({
    name: group,
    items: documentDefinitions.filter((item) => item.group === group).map(
      (definition) => documents.find((item) => item.id === definition.id) ?? definition
    ),
  }));

  return (
    <main className="documents-page admin-page">
      <section className="documents-hero relative isolate overflow-hidden text-white">
        <div className="documents-hero-grid" />
        <div className="documents-hero-orbit documents-hero-orbit-one" />
        <div className="documents-hero-orbit documents-hero-orbit-two" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8 lg:py-16">
          <div>
            <span className="documents-kicker"><span /> Research archive · Administration</span>
            <h1 className="mt-5 text-4xl font-black tracking-[-0.07em] sm:text-5xl lg:text-6xl">Manage resources<span className="text-teal-300">.</span></h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-blue-100/85 sm:text-base">
              Update the same checklist, proposal, and final documents visitors see on the Documents page.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="documents-hero-tag">{documents.length} documents</span>
              <span className="documents-hero-tag">{presentations.length} presentations</span>
              <span className="documents-hero-tag">{availableCount} links available</span>
            </div>
          </div>
          <div className="admin-hero-actions">
            <Link href="/documents" className="admin-secondary-button">View Documents</Link>
            <button
              type="button"
              onClick={() => { setPassword(""); setAuthenticated(false); }}
              className="admin-secondary-button"
            >
              Log out
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <section className="admin-guidance-panel mt-8" aria-labelledby="admin-guidance-title">
          <div className="admin-guidance-icon" aria-hidden="true">i</div>
          <div>
            <h2 id="admin-guidance-title" className="font-bold text-slate-100">Managing your research resources</h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">
              Add a valid HTTP or HTTPS link, set its status to Available, then save. Keep the status Pending until a resource is ready for visitors.
            </p>
          </div>
        </section>

        {loading && (
          <div className="documents-loading py-20" role="status">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-teal-300 border-t-transparent" />
            <p className="mt-3 text-sm">Loading saved resource links…</p>
          </div>
        )}

        {!loading && loadingError && (
          <p className="admin-error-message mt-6" role="alert">{loadingError}</p>
        )}

        {!loading && !loadingError && (
          <div className="mt-10 space-y-12">
            {groups.map(({ name, items }) => (
              <section key={name} aria-labelledby={`admin-${name.toLowerCase()}`}>
                <div className="documents-group-heading mb-5 flex items-center gap-3">
                  <h2 id={`admin-${name.toLowerCase()}`} className="text-xl font-bold">{name}</h2>
                  <span className="documents-group-rule h-px flex-1" />
                  <span className="documents-group-count">{String(items.length).padStart(2, "0")} documents</span>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((item, index) => (
                    <ResourceCard
                      key={item.id}
                      item={item}
                      index={index}
                      saving={saving}
                      saveMsg={saveMsg}
                      onChange={handleChange}
                      onSave={updateLink}
                    />
                  ))}
                </div>
              </section>
            ))}

            <section aria-labelledby="admin-presentations">
              <div className="documents-group-heading mb-5 flex items-center gap-3">
                <h2 id="admin-presentations" className="text-xl font-bold">Presentations</h2>
                <span className="documents-group-rule h-px flex-1" />
                <span className="documents-group-count">{String(presentations.length).padStart(2, "0")} presentations</span>
              </div>
              {presentations.length ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {presentations.map((item, index) => (
                    <ResourceCard
                      key={item.id}
                      item={item}
                      index={index}
                      saving={saving}
                      saveMsg={saveMsg}
                      onChange={handleChange}
                      onSave={updateLink}
                    />
                  ))}
                </div>
              ) : (
                <p className="admin-empty-state">No presentations have been added yet.</p>
              )}
            </section>
          </div>
        )}
      </div>
    </main>
  );
}

function ResourceCard({
  item,
  index,
  saving,
  saveMsg,
  onChange,
  onSave,
}: {
  item: LinkItem;
  index: number;
  saving: string | null;
  saveMsg: SaveMessage | null;
  onChange: (id: string, field: "url" | "status", value: string) => void;
  onSave: (item: LinkItem) => void;
}) {
  const message = saveMsg?.id === item.id ? saveMsg : null;

  return (
    <article className={`document-card document-card-${(index % 4) + 1} admin-resource-card flex flex-col`}>
      <div className="document-card-top admin-resource-card-top">
        <span className="document-card-index">{item.group?.toUpperCase() ?? "PRESENTATION"} · {String(index + 1).padStart(2, "0")}</span>
        <div className="document-card-icon" aria-hidden="true">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7 3.75h6.5L19 9.25v10A1.75 1.75 0 0117.25 21h-10A1.75 1.75 0 015.5 19.25v-13.75A1.75 1.75 0 017.25 3.75z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 4v5.5h5.5M8.5 13h7M8.5 16.5h7" />
          </svg>
        </div>
        <span className={`document-status ${item.status === "available" ? "document-status-available" : "document-status-pending"}`}>
          <span />{item.status === "available" ? "Available" : "Coming soon"}
        </span>
      </div>

      <div className="document-card-content flex flex-1 flex-col">
        <h3 className="text-base font-extrabold leading-snug">{item.title}</h3>
        <span className="document-type-label">AI EyeDx · {item.category === "document" ? "Research document" : "Presentation"}</span>
        <p className="document-description mb-5">{item.description}</p>

        <label htmlFor={`${item.id}-url`} className="admin-field-label">Document URL</label>
        <input
          id={`${item.id}-url`}
          type="url"
          value={item.url}
          onChange={(event) => onChange(item.id, "url", event.target.value)}
          placeholder="https://drive.google.com/…"
          className="admin-input mt-1.5"
        />

        <label htmlFor={`${item.id}-status`} className="admin-field-label mt-4">Visibility status</label>
        <select
          id={`${item.id}-status`}
          value={item.status}
          onChange={(event) => onChange(item.id, "status", event.target.value)}
          className="admin-input admin-select mt-1.5"
        >
          <option value="pending">Pending — hidden from visitors</option>
          <option value="available">Available — visible to visitors</option>
        </select>

        <button
          type="button"
          onClick={() => onSave(item)}
          disabled={saving === item.id}
          className="document-action mt-5 disabled:cursor-wait disabled:opacity-70"
        >
          {saving === item.id ? (
            <>
              <span className="admin-button-spinner" aria-hidden="true" />
              Saving changes…
            </>
          ) : "Save document"}
        </button>
        {message && (
          <p className={`admin-save-message ${message.ok ? "admin-save-success" : "admin-save-error"}`} role="status">
            {message.ok ? "✓ " : "!"}{message.text}
          </p>
        )}
      </div>
    </article>
  );
}
