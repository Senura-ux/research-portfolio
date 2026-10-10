"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface LinkItem {
  id: string;
  title: string;
  description: string;
  status: "available" | "pending";
  url: string;
  category: string;
}

const documentDefs: LinkItem[] = [
  { id: "charter", title: "Project Charter", description: "Initial project charter document outlining scope, objectives, and team roles.", status: "pending", url: "", category: "document" },
  { id: "proposal-main", title: "Proposal Document — Main", description: "Main group research proposal including literature review and methodology.", status: "pending", url: "", category: "document" },
  { id: "proposal-cataract", title: "Individual Proposal — Cataract", description: "Binuri Perera's individual research proposal for the cataract severity module.", status: "pending", url: "", category: "document" },
  { id: "proposal-dme", title: "Individual Proposal — DME", description: "S.D Kahawevithana's individual proposal for DME detection and risk assessment.", status: "pending", url: "", category: "document" },
  { id: "proposal-glaucoma", title: "Individual Proposal — Glaucoma", description: "Chavindee M.A.P.'s individual proposal for glaucoma detection and risk assessment.", status: "pending", url: "", category: "document" },
  { id: "proposal-dr", title: "Individual Proposal — DR", description: "Oshan Wijekoon's individual proposal for diabetic retinopathy detection.", status: "pending", url: "", category: "document" },
  { id: "final-report", title: "Final Report — Main", description: "Main group final research report with complete results and analysis.", status: "pending", url: "", category: "document" },
  { id: "research-paper", title: "Research Paper", description: "Published or submitted academic research paper.", status: "pending", url: "", category: "document" },
  { id: "user-guide", title: "System User Guide", description: "User guide for the AI EyeDx diagnostic support system.", status: "pending", url: "", category: "document" },
  { id: "checklists", title: "Checklists & Supporting Docs", description: "Supporting checklists, forms, and supplementary documentation.", status: "pending", url: "", category: "document" },
  { id: "dataset-docs", title: "Dataset & Experiment Documentation", description: "Documentation of datasets used, preprocessing steps, and experiment logs.", status: "pending", url: "", category: "document" },
  { id: "final-individual", title: "Final Reports — Individual Components", description: "Individual final reports for each research component (Cataract, DME, Glaucoma, DR).", status: "pending", url: "", category: "document" },
];

export default function DocumentsPage() {
  const [links, setLinks] = useState<LinkItem[]>(documentDefs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/links")
      .then((r) => r.json())
      .then((data: { documents?: LinkItem[] }) => {
        const merged = documentDefs.map((def) => {
          const found = data.documents?.find((d: LinkItem) => d.id === def.id);
          return found ? { ...def, ...found } : def;
        });
        setLinks(merged);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const docs = links.filter((l) => l.category === "document");
  const availableCount = docs.filter((doc) => doc.status === "available" && doc.url).length;

  return (
    <main className="documents-page">
      {/* Header */}
      <section className="documents-hero relative isolate overflow-hidden text-white">
        <div className="documents-hero-grid" />
        <div className="documents-hero-orbit documents-hero-orbit-one" />
        <div className="documents-hero-orbit documents-hero-orbit-two" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="documents-kicker"><span /> Research archive · Group R26-IT-043</span>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.07em] sm:text-6xl lg:text-7xl">Project documents<span className="text-teal-300">.</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/85 sm:text-lg">
              Browse the research project&apos;s proposals, reports, user guides, and supporting materials in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="documents-hero-tag">Research proposals</span>
              <span className="documents-hero-tag">Reports &amp; papers</span>
              <span className="documents-hero-tag">System resources</span>
            </div>
          </div>
          <div className="documents-library-panel">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-200">Document library</span>
            <div className="mt-3 flex items-end gap-2">
              <strong>{String(availableCount).padStart(2, "0")}</strong>
              <span>of {String(docs.length).padStart(2, "0")} available</span>
            </div>
            <div className="documents-progress-track"><span style={{ width: `${docs.length ? (availableCount / docs.length) * 100 : 0}%` }} /></div>
            <div className="documents-status-legend">
              <span><i className="documents-status-dot documents-status-dot-ready" />Available</span>
              <span><i className="documents-status-dot documents-status-dot-pending" />Pending</span>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Link */}
      <div className="documents-toolbar mx-auto flex max-w-7xl justify-between px-4 py-6 sm:px-6 lg:px-8">
        <div>
          <span className="documents-section-kicker">Project resources</span>
          <h2 className="mt-1 text-xl font-extrabold tracking-tight text-slate-100">Research document collection</h2>
        </div>
        <Link
          href="/admin"
          className="documents-admin-link"
        >
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Admin — Manage Links
        </Link>
      </div>

      {/* Documents Grid */}
      <section className="documents-list-section pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="documents-loading py-20">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-teal-300 border-t-transparent" />
              <p className="mt-3 text-sm">Loading documents...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {docs.map((doc, i) => (
                <div
                  key={doc.id}
                  className={`document-card document-card-${(i % 4) + 1} flex flex-col`}
                >
                  <div className="document-card-top">
                    <span className="document-card-index">DOCUMENT · {String(i + 1).padStart(2, "0")}</span>
                    <div className="document-card-icon" aria-hidden="true">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7 3.75h6.5L19 9.25v10A1.75 1.75 0 0117.25 21h-10A1.75 1.75 0 015.5 19.25v-13.75A1.75 1.75 0 017.25 3.75z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 4v5.5h5.5M8.5 13h7M8.5 16.5h7" />
                      </svg>
                    </div>
                    <span className={`document-status ${doc.status === "available" ? "document-status-available" : "document-status-pending"}`}>
                      <span />{doc.status === "available" ? "Available" : "Coming soon"}
                    </span>
                  </div>

                  <div className="document-card-content flex flex-1 flex-col">
                    <h3 className="text-base font-extrabold leading-snug text-slate-100">{doc.title}</h3>
                    <span className="document-type-label">AI EyeDx · Research resource</span>
                    <p className="document-description mb-5 flex-1">{doc.description}</p>

                    {doc.url && doc.status === "available" ? (
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="document-action"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Open document
                      </a>
                    ) : (
                      <button disabled className="document-action document-action-disabled">Not yet available</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
