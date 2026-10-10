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
  const availableCount = presentations.filter((presentation) => presentation.status === "available" && presentation.url).length;

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
    <main className="presentations-page">
      {/* Header */}
      <section className="presentations-hero relative isolate overflow-hidden text-white">
        <div className="presentations-hero-grid" />
        <div className="presentations-hero-orbit presentations-hero-orbit-one" />
        <div className="presentations-hero-orbit presentations-hero-orbit-two" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="presentations-kicker"><span /> Research archive · Group R26-IT-043</span>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.07em] sm:text-6xl lg:text-7xl">Presentations<span className="text-teal-300">.</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/85 sm:text-lg">
              Explore the key research milestones, from the initial proposal to the final AI EyeDx system evaluation.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="presentations-hero-tag">Proposal &amp; progress reviews</span>
              <span className="presentations-hero-tag">Final defense materials</span>
              <span className="presentations-hero-tag">Research paper</span>
            </div>
          </div>
          <div className="presentations-progress-panel">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-200">Presentation library</span>
            <div className="mt-3 flex items-end gap-2">
              <strong>{String(availableCount).padStart(2, "0")}</strong>
              <span>of {String(presentations.length).padStart(2, "0")} available</span>
            </div>
            <div className="presentations-progress-track"><span style={{ width: `${presentations.length ? (availableCount / presentations.length) * 100 : 0}%` }} /></div>
            <p>Materials are published here as they become available.</p>
          </div>
        </div>
      </section>

      {/* Admin Link */}
      <div className="presentations-toolbar mx-auto flex max-w-7xl justify-between px-4 py-6 sm:px-6 lg:px-8">
        <div>
          <span className="presentations-section-kicker">Project resources</span>
          <h2 className="mt-1 text-xl font-extrabold tracking-tight text-slate-100">Research presentation timeline</h2>
        </div>
        <Link
          href="/admin"
          className="presentations-admin-link"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Admin — Manage Links
        </Link>
      </div>

      {/* Presentations Grid */}
      <section className="presentations-list-section pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="presentations-loading py-20">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-teal-300 border-t-transparent" />
              <p className="mt-3 text-sm">Loading presentations...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {presentations.map((pres, i) => (
                <div
                  key={pres.id}
                  className={`presentation-card presentation-card-${i + 1} flex flex-col`}
                >
                  {/* Thumbnail area */}
                  <div className="presentation-card-art">
                    <span className="presentation-index">0{i + 1}</span>
                    <div className="presentation-symbol">{presentationIcons[i % presentationIcons.length]}</div>
                    <span className="presentation-art-label">AI EYEDX · RESEARCH SERIES</span>
                  </div>

                  <div className="presentation-card-content flex flex-1 flex-col">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="text-base font-extrabold leading-snug text-slate-100">{pres.title}</h3>
                      <span
                        className={`presentation-status ${pres.status === "available" ? "presentation-status-available" : "presentation-status-pending"}`}
                      >
                        <span />{pres.status === "available" ? "Available" : "Coming soon"}
                      </span>
                    </div>

                    <p className="presentation-date mb-3 flex items-center gap-2">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {pres.date}
                    </p>

                    <p className="presentation-description mb-5 flex-1">{pres.description}</p>

                    {pres.url && pres.status === "available" ? (
                      <a
                        href={pres.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="presentation-action"
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
                        className="presentation-action presentation-action-disabled"
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
    </main>
  );
}
