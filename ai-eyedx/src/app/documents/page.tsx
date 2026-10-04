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
  { id: "proposal-dme", title: "Individual Proposal — DME", description: "Sanduni Kahawevithana's individual proposal for DME detection and risk assessment.", status: "pending", url: "", category: "document" },
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

  return (
    <div>
      {/* Header */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-200 bg-white/10 px-3 py-1 rounded-full mb-4">Research Documents</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Project Documents</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Access all research documents including proposals, reports, and supporting materials.
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <span className="flex items-center gap-1.5 text-xs text-blue-200 bg-white/10 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400" /> Available
            </span>
            <span className="flex items-center gap-1.5 text-xs text-blue-200 bg-white/10 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-yellow-400" /> Pending
            </span>
          </div>
        </div>
      </section>

      {/* Admin Link */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-end">
        <Link
          href="/admin"
          className="flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 border border-gray-200 px-3 py-1.5 rounded-lg hover:border-blue-200 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Admin — Manage Links
        </Link>
      </div>

      {/* Documents Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-gray-500 mt-3 text-sm">Loading documents...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {docs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:shadow-lg hover:border-blue-200 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: "#eff6ff" }}
                    >
                      📄
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={
                        doc.status === "available"
                          ? { background: "#dcfce7", color: "#16a34a" }
                          : { background: "#fef9c3", color: "#854d0e" }
                      }
                    >
                      {doc.status === "available" ? "✓ Available" : "⏳ Pending"}
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-snug">{doc.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-5">{doc.description}</p>

                  {doc.url && doc.status === "available" ? (
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                      style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Document
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-2.5 rounded-xl text-sm font-semibold text-gray-400 bg-gray-100 cursor-not-allowed"
                    >
                      Not Yet Available
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
