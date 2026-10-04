"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface PresentationItem {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "available" | "pending";
  url: string;
  category: string;
}

const presentationDefs: PresentationItem[] = [
  { id: "proposal-presentation", title: "Proposal Presentation", description: "Slides presented during the formal research proposal stage, covering research problem, gap, objectives and methodology.", date: "Date to be announced", status: "pending", url: "", category: "presentation" },
  { id: "pp1", title: "Progress Presentation 1", description: "First formal progress presentation demonstrating initial model implementations and baseline results.", date: "Date to be announced", status: "pending", url: "", category: "presentation" },
  { id: "pp2", title: "Progress Presentation 2", description: "Second progress presentation with complete integrated system and experimental validation results.", date: "Date to be announced", status: "pending", url: "", category: "presentation" },
  { id: "final-presentation", title: "Final Presentation", description: "Final project presentation covering full system, all four modules, results, explainability and future work.", date: "Date to be announced", status: "pending", url: "", category: "presentation" },
  { id: "viva", title: "Viva Voce Materials", description: "Materials and supplementary slides prepared for the viva voce examination.", date: "Date to be announced", status: "pending", url: "", category: "presentation" },
  { id: "research-paper-slides", title: "Research Paper Presentation", description: "Slides prepared for presenting the research paper findings at an academic conference.", date: "Date to be announced", status: "pending", url: "", category: "presentation" },
];

const presentationIcons = ["📊", "📈", "🎯", "🏆", "🎓", "📝"];

export default function PresentationsPage() {
  const [presentations, setPresentations] = useState<PresentationItem[]>(presentationDefs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/links")
      .then((r) => r.json())
      .then((data: { documents?: PresentationItem[] }) => {
        const merged = presentationDefs.map((def) => {
          const found = data.documents?.find((d: PresentationItem) => d.id === def.id);
          return found ? { ...def, ...found } : def;
        });
        setPresentations(merged);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* Header */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-200 bg-white/10 px-3 py-1 rounded-full mb-4">Research Presentations</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Presentations</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Presentation slides and materials from each formal research assessment stage.
          </p>
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

      {/* Presentations Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-gray-500 mt-3 text-sm">Loading presentations...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {presentations.map((pres, i) => (
                <div
                  key={pres.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-200 flex flex-col"
                >
                  {/* Thumbnail area */}
                  <div
                    className="h-36 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, #${["1e3a8a", "1d4ed8", "2563eb", "1e40af", "1e3a8a", "3b82f6"][i % 6]}, #3b82f6)` }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">{presentationIcons[i % presentationIcons.length]}</div>
                      <div className="text-xs text-blue-100 font-medium px-4 text-center">{pres.title}</div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 text-sm leading-snug">{pres.title}</h3>
                      <span
                        className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={
                          pres.status === "available"
                            ? { background: "#dcfce7", color: "#16a34a" }
                            : { background: "#fef9c3", color: "#854d0e" }
                        }
                      >
                        {pres.status === "available" ? "✓" : "⏳"}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {pres.date}
                    </p>

                    <p className="text-xs text-gray-600 leading-relaxed flex-1 mb-5">{pres.description}</p>

                    {pres.url && pres.status === "available" ? (
                      <a
                        href={pres.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                        style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Slides
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
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
