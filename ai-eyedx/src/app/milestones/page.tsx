export default function MilestonesPage() {
  const milestones = [
    {
      id: 1,
      title: "Project Initiation",
      status: "completed",
      date: "2024 — Semester 1",
      marks: "—",
      items: [
        "Group registration",
        "Topic selection and feasibility study",
        "Research gap identification",
        "Requirement gathering",
        "Initial supervisor discussion",
      ],
      desc: "Formation of the research group, topic assessment, and initial feasibility analysis for multi-disease diabetic eye disorder diagnosis.",
    },
    {
      id: 2,
      title: "Proposal Stage",
      status: "completed",
      date: "2024 — Semester 1",
      marks: "Allocated",
      items: [
        "Initial supervisor discussion",
        "Topic assessment",
        "Proposal development",
        "Project Charter",
        "Proposal report submission",
        "Proposal presentation",
      ],
      desc: "Development and submission of the formal research proposal, including literature review, methodology plan, and project charter.",
    },
    {
      id: 3,
      title: "Implementation Stage",
      status: "completed",
      date: "2024 — Semester 2",
      marks: "—",
      items: [
        "Dataset collection and preprocessing",
        "Disease-specific model development",
        "Component implementation",
        "Backend API development",
        "Frontend development",
        "System integration planning",
      ],
      desc: "Dataset preparation, initial model training, and construction of the backend and frontend components of the AI EyeDx platform.",
    },
    {
      id: 4,
      title: "Progress Presentation 1 (PP1)",
      status: "completed",
      date: "Date to be announced",
      marks: "Not published",
      items: [
        "Initial implementation demonstration",
        "Baseline model results",
        "Early system demonstration",
        "Feedback from panel",
      ],
      desc: "First formal progress assessment demonstrating initial model implementations, baseline results, and early system architecture.",
    },
    {
      id: 5,
      title: "Model Development",
      status: "completed",
      date: "2025 — Semester 1",
      marks: "—",
      items: [
        "Model training and hyperparameter tuning",
        "Explainability integration (Grad-CAM)",
        "Risk and severity assessment",
        "OOD detection analysis",
        "API integration for each module",
      ],
      desc: "Advanced model development, achieving 92.13% (DR), 96.05% (Glaucoma), 88.19% (Cataract) and 92.67% (DME) experimental validation accuracies.",
    },
    {
      id: 6,
      title: "Progress Presentation 2 (PP2)",
      status: "completed",
      date: "Date to be announced",
      marks: "Not published",
      items: [
        "Integrated system demonstration",
        "Experimental model results",
        "Validation metrics",
        "Explainability demonstrations",
      ],
      desc: "Second formal progress assessment with complete system integration, all four modules operational, and final validation results.",
    },
    {
      id: 7,
      title: "Final Stage",
      status: "upcoming",
      date: "Date to be announced",
      marks: "Not published",
      items: [
        "System testing and optimization",
        "Final validation",
        "Final report submission",
        "Research paper submission",
        "Final presentation",
        "Viva voce",
      ],
      desc: "Final system testing, optimization, report writing, research paper preparation, and final presentation and viva assessment.",
    },
    {
      id: 8,
      title: "Publication",
      status: "upcoming",
      date: "Date to be announced",
      marks: "—",
      items: [
        "Research paper submission",
        "Peer review process",
        "Publication",
      ],
      desc: "Submission and publication of the research findings in an appropriate academic conference or journal.",
    },
  ];

  const statusConfig: Record<string, { label: string; bg: string; text: string; dot: string }> = {
    completed: { label: "Completed", bg: "rgba(34,197,94,0.14)", text: "#15803d", dot: "#22c55e" },
    "in-progress": { label: "In Progress", bg: "rgba(59,130,246,0.12)", text: "#1d4ed8", dot: "#3b82f6" },
    upcoming: { label: "Upcoming", bg: "rgba(148,163,184,0.16)", text: "#475569", dot: "#94a3b8" },
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.25),_transparent_28%),linear-gradient(135deg,#020817_0%,#0f172a_17%,#172554_40%,#1d4ed8_72%,#2563eb_100%)] py-24 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-16 top-8 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-blue-100 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.95)]" />
            Roadmap
          </span>
          <h1 className="mt-7 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Project Milestones
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100/90">
            Key stages in the development of the AI EyeDx research project — from initial proposal to final validation and publication.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white/80 py-6 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-4 sm:px-6 lg:px-8">
          {Object.entries(statusConfig).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: cfg.dot }} />
              <span className="font-medium text-slate-700">{cfg.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-[25px] top-3 bottom-3 w-[2px] rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-200" />

            <div className="space-y-8">
              {milestones.map((m) => {
                const cfg = statusConfig[m.status];
                return (
                  <div key={m.id} className="relative flex gap-6">
                    <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-white shadow-[0_12px_30px_rgba(59,130,246,0.15)] text-base font-black text-white"
                      style={{
                        background:
                          m.status === "completed"
                            ? "linear-gradient(135deg, #22c55e, #16a34a)"
                            : m.status === "in-progress"
                            ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                            : "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                        color: m.status === "upcoming" ? "#334155" : "white",
                      }}
                    >
                      {m.status === "completed" ? "✓" : m.id}
                    </div>

                    <div
                      className="flex-1 rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(59,130,246,0.12)]"
                      style={{
                        borderColor:
                          m.status === "completed"
                            ? "rgba(34,197,94,0.24)"
                            : m.status === "in-progress"
                            ? "rgba(59,130,246,0.2)"
                            : "rgba(148,163,184,0.28)",
                        background:
                          m.status === "completed"
                            ? "linear-gradient(135deg, rgba(240,253,244,0.95), rgba(255,255,255,1))"
                            : m.status === "in-progress"
                            ? "linear-gradient(135deg, rgba(239,246,255,0.98), rgba(255,255,255,1))"
                            : "linear-gradient(135deg, rgba(255,255,255,1), rgba(248,250,252,1))",
                      }}
                    >
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-black tracking-[-0.04em] text-slate-900">{m.title}</h3>
                          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{m.date}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span
                            className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]"
                            style={{ background: cfg.bg, color: cfg.text }}
                          >
                            {cfg.label}
                          </span>
                          {m.marks !== "—" && (
                            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
                              Marks: {m.marks}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-slate-600">{m.desc}</p>

                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {m.items.map((item) => (
                          <li key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-600">
                            <span className="h-2 w-2 rounded-full" style={{ background: cfg.dot }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="rounded-full bg-blue-50 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-blue-700">Assessment Summary</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">Progress and evaluation timeline</h2>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 text-white">
                  <th className="px-6 py-4 font-semibold">Assessment Stage</th>
                  <th className="px-6 py-4 text-center font-semibold">Status</th>
                  <th className="px-6 py-4 text-center font-semibold">Date</th>
                  <th className="px-6 py-4 text-center font-semibold">Marks</th>
                </tr>
              </thead>
              <tbody>
                {milestones.filter((m) => m.marks !== "—").map((m, i) => (
                  <tr key={m.id} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                    <td className="px-6 py-4 font-semibold text-slate-800">{m.title}</td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ background: statusConfig[m.status].bg, color: statusConfig[m.status].text }}
                      >
                        {statusConfig[m.status].label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600">{m.date}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{m.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
