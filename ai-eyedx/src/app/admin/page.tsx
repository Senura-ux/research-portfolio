"use client";
import { useState, useEffect } from "react";

interface LinkItem {
  id: string;
  title: string;
  description: string;
  status: "available" | "pending";
  url: string;
  category: string;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState<string | null>(null);
  const [saveMsg, setSaveMsg] = useState<{ id: string; ok: boolean } | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
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
      setAuthenticated(true);
    } catch {
      setError("Unable to reach the server. Please try again.");
    } finally {
      setAuthenticating(false);
    }
  };

  useEffect(() => {
    if (!authenticated) return;
    fetch("/api/links")
      .then((r) => r.json())
      .then((data: { documents?: LinkItem[] }) => setLinks(data.documents || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [authenticated]);

  const updateLink = async (item: LinkItem) => {
    setSaving(item.id);
    try {
      const res = await fetch("/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, item }),
      });
      setSaveMsg({ id: item.id, ok: res.ok });
      if (res.ok) {
        const data: { documents?: LinkItem[] } = await res.json();
        setLinks(data.documents || []);
      }
    } catch {
      setSaveMsg({ id: item.id, ok: false });
    }
    setSaving(null);
    setTimeout(() => setSaveMsg(null), 3000);
  };

  const handleChange = (id: string, field: keyof LinkItem, value: string) => {
    setLinks((prev) => prev.map((l) => (l.id === id ? { ...l, [field]: value } : l)));
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 w-full max-w-md">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-6"
            style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
          >
            🔐
          </div>
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">Admin Access</h1>
          <p className="text-sm text-gray-500 text-center mb-6">Enter your admin password to manage document and presentation links.</p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">{error}</div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              disabled={authenticating}
              className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
            >
              {authenticating ? "Checking..." : "Login"}
            </button>
          </form>
          <p className="text-xs text-gray-400 text-center mt-4">
            Set your password via the <code className="bg-gray-100 px-1 py-0.5 rounded">ADMIN_PASSWORD</code> environment variable.
          </p>
        </div>
      </div>
    );
  }

  const documents = links.filter((l) => l.category === "document");
  const presentations = links.filter((l) => l.category === "presentation");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }} className="py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white text-sm">⚙️</div>
            <div>
              <div className="font-bold text-white text-sm">AI EyeDx Admin Panel</div>
              <div className="text-xs text-blue-200">Manage document & presentation links</div>
            </div>
          </div>
          <button
            onClick={() => { setPassword(""); setAuthenticated(false); }}
            className="text-xs text-blue-200 hover:text-white border border-white/20 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-500 mt-3 text-sm">Loading...</p>
          </div>
        ) : (
          <>
            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
              <h3 className="font-semibold text-blue-900 text-sm mb-2 flex items-center gap-2">
                💡 How to use
              </h3>
              <ul className="space-y-1.5 text-xs text-blue-800">
                <li>• Paste a Google Drive, OneDrive, or any direct URL into the URL field for each document.</li>
                <li>• Set Status to <strong>Available</strong> once the link is ready for the public to see.</li>
                <li>• Click <strong>Save</strong> after updating each row.</li>
                <li>• Leave URL empty and Status as Pending for documents not yet uploaded.</li>
              </ul>
            </div>

            {/* Documents Table */}
            <LinkTable
              title="📄 Project Documents"
              items={documents}
              saving={saving}
              saveMsg={saveMsg}
              onChange={handleChange}
              onSave={updateLink}
            />

            <div className="mt-8">
              <LinkTable
                title="📽️ Presentations"
                items={presentations}
                saving={saving}
                saveMsg={saveMsg}
                onChange={handleChange}
                onSave={updateLink}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function LinkTable({
  title,
  items,
  saving,
  saveMsg,
  onChange,
  onSave,
}: {
  title: string;
  items: LinkItem[];
  saving: string | null;
  saveMsg: { id: string; ok: boolean } | null;
  onChange: (id: string, field: keyof LinkItem, value: string) => void;
  onSave: (item: LinkItem) => void;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="font-bold text-gray-900">{title}</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.id} className="px-6 py-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="lg:w-56 flex-shrink-0">
                <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs text-gray-500 mb-1">URL / Link</label>
                  <input
                    type="url"
                    value={item.url}
                    onChange={(e) => onChange(item.id, "url", e.target.value)}
                    placeholder="https://drive.google.com/..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Status</label>
                  <select
                    value={item.status}
                    onChange={(e) => onChange(item.id, "status", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-blue-400 transition-all bg-white"
                  >
                    <option value="pending">⏳ Pending</option>
                    <option value="available">✓ Available</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => onSave(item)}
                  disabled={saving === item.id}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60 flex items-center gap-1.5"
                  style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                >
                  {saving === item.id ? (
                    <>
                      <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Saving
                    </>
                  ) : (
                    "Save"
                  )}
                </button>
                {saveMsg?.id === item.id && (
                  <span className={`text-xs font-medium ${saveMsg.ok ? "text-green-600" : "text-red-500"}`}>
                    {saveMsg.ok ? "✓ Saved" : "✗ Error"}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
