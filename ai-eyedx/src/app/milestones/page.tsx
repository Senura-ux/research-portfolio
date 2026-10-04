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
      status: "in-progress",
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
      status: "upcoming",
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
    completed: { label: "Completed", bg: "#dcfce7", text: "#16a34a", dot: "#16a34a" },
    "in-progress": { label: "In Progress", bg: "#fef9c3", text: "#854d0e", dot: "#eab308" },
    upcoming: { label: "Upcoming", bg: "#f3f4f6", text: "#6b7280", dot: "#9ca3af" },
  };

  return (
    <div>
      {/* Header */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-200 bg-white/10 px-3 py-1 rounded-full mb-4">Project Milestones</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Project Milestones</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Key stages in the development of the AI EyeDx research project — from initial proposal to final validation and publication.
          </p>
        </div>
      </section>

      {/* Status Legend */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          {Object.entries(statusConfig).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 rounded-full" style={{ background: cfg.dot }} />
              <span className="text-gray-600">{cfg.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-6 bottom-0 w-0.5"
              style={{ background: "linear-gradient(to bottom, #3b82f6, #1e3a8a)" }}
            />

            <div className="space-y-6">
              {milestones.map((m) => {
                const cfg = statusConfig[m.status];
                return (
                  <div key={m.id} className="flex gap-6">
                    {/* Circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-md"
                        style={{
                          background:
                            m.status === "completed"
                              ? "linear-gradient(135deg, #16a34a, #15803d)"
                              : m.status === "in-progress"
                              ? "linear-gradient(135deg, #1e3a8a, #3b82f6)"
                              : "#e5e7eb",
                          color: m.status === "upcoming" ? "#6b7280" : "white",
                        }}
                      >
                        {m.status === "completed" ? "✓" : m.id}
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="flex-1 rounded-2xl border p-6 mb-1 hover:shadow-md transition-shadow"
                      style={{
                        borderColor:
                          m.status === "completed"
                            ? "#bbf7d0"
                            : m.status === "in-progress"
                            ? "#bfdbfe"
                            : "#e5e7eb",
                        backgroundColor:
                          m.status === "completed"
                            ? "#f0fdf4"
                            : m.status === "in-progress"
                            ? "#eff6ff"
                            : "white",
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{m.title}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">📅 {m.date}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className="text-xs font-semibold px-3 py-1 rounded-full"
                            style={{ background: cfg.bg, color: cfg.text }}
                          >
                            {cfg.label}
                          </span>
                          {m.marks !== "—" && (
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                              Marks: {m.marks}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{m.desc}</p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {m.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: cfg.dot }}
                            />
                            {item}
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

      {/* Assessment Marks Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Assessment Summary</h2>
            <p className="text-sm text-gray-500 mt-2">Formal assessment stages as per SLIIT research project guidelines.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}>
                  <th className="text-left px-6 py-4 text-white font-semibold">Assessment Stage</th>
                  <th className="text-center px-6 py-4 text-white font-semibold">Status</th>
                  <th className="text-center px-6 py-4 text-white font-semibold">Date</th>
                  <th className="text-center px-6 py-4 text-white font-semibold">Marks</th>
                </tr>
              </thead>
              <tbody>
                {milestones.filter(m => m.marks !== "—").map((m, i) => (
                  <tr key={m.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-gray-900">{m.title}</td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ background: statusConfig[m.status].bg, color: statusConfig[m.status].text }}
                      >
                        {statusConfig[m.status].label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">{m.date}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{m.marks}</td>
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
