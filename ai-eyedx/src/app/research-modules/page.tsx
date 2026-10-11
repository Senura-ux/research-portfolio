const modules = [
  {
    id: "dr",
    name: "Diabetic Retinopathy",
    icon: "🔴",
    model: "EfficientNetV2-S",
    modality: "Retinal Fundus Images",
    accuracy: "92.13%",
    accNum: 92.13,
    color: "#3b82f6",
    framework: "PyTorch",
    dataset: "Project retinal fundus image dataset",
    classes: ["No DR", "Mild DR", "Moderate DR", "Severe DR", "Proliferative DR"],
    tasks: [
      "DR classification",
      "Severity assessment",
      "Confidence/probability estimation",
      "Explainable Grad-CAM visualization",
    ],
    signs: [
      "Microaneurysms",
      "Hemorrhages",
      "Exudates",
      "Cotton-wool spots",
      "Abnormal retinal vessels",
      "Other DR-related lesions",
    ],
    explainability: [
      "Grad-CAM heatmap overlay on original fundus image",
      "Highlighted high-influence retinal regions",
      "Prediction confidence scores",
      "Risk indication where available",
    ],
    metrics: ["Accuracy", "Precision", "Recall", "F1-score", "Confusion Matrix"],
  },
  {
    id: "glaucoma",
    name: "Glaucoma",
    icon: "🟡",
    model: "U-Net + Classification Pipeline",
    modality: "Retinal Fundus Images",
    accuracy: "96.05%",
    accNum: 96.05,
    color: "#1d4ed8",
    framework: "PyTorch",
    dataset: "Public glaucoma fundus datasets, including REFUGE, RIM-ONE, and ODIR",
    classes: ["Normal", "Early Glaucoma", "Advanced Glaucoma"],
    tasks: [
      "Optic disc segmentation (U-Net)",
      "Optic cup segmentation (U-Net)",
      "CDR calculation",
      "Glaucoma severity classification",
      "Risk/confidence estimation",
      "Explainable segmentation visualization",
    ],
    signs: [
      "Optic disc enlargement",
      "Optic cup enlargement",
      "Elevated Cup-to-Disc Ratio (CDR)",
      "Neuroretinal rim thinning",
      "ISNT rule violation",
    ],
    explainability: [
      "Optic disc segmentation mask",
      "Optic cup segmentation mask",
      "CDR value display",
      "Segmentation overlay on fundus image",
      "Risk score visualization",
    ],
    metrics: ["Accuracy", "Precision", "Recall", "F1-score", "CDR correlation", "Segmentation accuracy"],
    formula: { label: "CDR Formula", eq: "CDR = Diameter of Optic Cup / Diameter of Optic Disc" },
  },
  {
    id: "cataract",
    name: "Cataract",
    icon: "🟠",
    model: "EfficientNet-B3",
    modality: "Retinal Fundus Images",
    accuracy: "88.19%",
    accNum: 88.19,
    color: "#2563eb",
    framework: "PyTorch",
    dataset: "Cataract Grading Dataset — Kaggle",
    classes: ["No Cataract", "Mild Cataract", "Moderate Cataract", "Severe Cataract"],
    tasks: [
      "Cataract severity classification",
      "Visibility Degradation Score (VDS) calculation",
      "Grad-CAM explainability",
      "Risk/interpretation support",
    ],
    signs: [
      "Lens opacity patterns",
      "Reduced image sharpness",
      "Degraded contrast",
      "Vessel visibility reduction",
      "Lower image entropy",
    ],
    explainability: [
      "Grad-CAM heatmap showing attention regions",
      "Visibility indicator display",
      "VDS score and breakdown",
      "Severity prediction with confidence",
    ],
    metrics: ["Accuracy", "Precision", "Recall", "F1-score", "VDS correlation"],
    formula: {
      label: "Visibility Degradation Score (VDS)",
      eq: "VDS = 0.4426 × Entropy + 0.2955 × Contrast + 0.2287 × Vessel Visibility + 0.0332 × Sharpness",
      weights: [
        { feature: "Entropy", weight: "0.4426", color: "#3b82f6" },
        { feature: "Contrast", weight: "0.2955", color: "#1d4ed8" },
        { feature: "Vessel Visibility", weight: "0.2287", color: "#1e40af" },
        { feature: "Sharpness", weight: "0.0332", color: "#1e3a8a" },
      ],
    },
  },
  {
    id: "dme",
    name: "Diabetic Macular Edema",
    icon: "🟢",
    model: "EfficientNet-B0",
    modality: "Optical Coherence Tomography (OCT)",
    accuracy: "92.67%",
    accNum: 92.67,
    color: "#1e40af",
    framework: "PyTorch",
    dataset: "Retinal OCT Images dataset (CNV / DME / DRUSEN / NORMAL)",
    classes: ["CNV", "DME", "DRUSEN", "NORMAL"],
    tasks: [
      "Disease classification from OCT",
      "DME detection",
      "Severity classification (Low/Medium/High)",
      "Risk-level prediction",
      "Grad-CAM explainability",
    ],
    signs: [
      "Macular fluid accumulation",
      "Retinal layer thickening",
      "Sub-retinal fluid",
      "Intra-retinal cysts",
      "Disrupted outer retinal layers",
    ],
    explainability: [
      "Grad-CAM heatmap on OCT image",
      "Highlighted macular regions",
      "Severity level output",
      "Risk classification with confidence",
    ],
    metrics: ["Accuracy", "Precision", "Recall", "F1-score", "ROC-AUC", "Confusion Matrix"],
  },
];

const comparisonData = [
  { module: "Diabetic Retinopathy", input: "Fundus", model: "EfficientNetV2-S", function: "Detection / Severity", accuracy: "92.13%" },
  { module: "Glaucoma", input: "Fundus", model: "U-Net + Assessment", function: "Segmentation / Biomarker / Risk", accuracy: "96.05%" },
  { module: "Cataract", input: "Fundus", model: "EfficientNet-B3", function: "Severity + VDS", accuracy: "88.19%" },
  { module: "DME", input: "OCT", model: "EfficientNet-B0", function: "Detection / Severity / Risk", accuracy: "92.67%" },
];

export default function ResearchModulesPage() {
  return (
    <main className="modules-page">
      {/* Header */}
      <section className="modules-hero relative overflow-hidden text-white">
        <div className="modules-hero-grid" />
        <div className="modules-hero-orb modules-hero-orb-one" />
        <div className="modules-hero-orb modules-hero-orb-two" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-teal-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_16px_rgba(94,234,212,0.9)]" />
                Disease-specific intelligence
              </span>
              <h1 className="mt-7 max-w-3xl text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                Four focused models.
                <span className="mt-2 block bg-gradient-to-r from-teal-200 via-cyan-100 to-violet-200 bg-clip-text text-transparent">
                  One research platform.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 sm:text-lg">
                Explore the AI EyeDx modules for diabetic retinopathy, glaucoma, cataract, and diabetic macular edema—each designed around the imaging modality and assessment needs of its research task.
              </p>
              <p className="mt-5 max-w-2xl text-xs leading-relaxed text-blue-100/70">
                Accuracy figures are project-reported experimental validation results, not clinically validated performance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "04", label: "Disease modules" },
                { value: "02", label: "Imaging modalities" },
                { value: "XAI", label: "Visual explanations" },
                { value: "OOD", label: "Reliability research" },
              ].map((item) => (
                <div key={item.label} className="modules-stat">
                  <span>{item.value}</span>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Research modules" className="modules-jumpbar">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 py-4 sm:px-6 lg:justify-start lg:px-8">
          <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Jump to module</span>
          {modules.map((mod) => (
            <a key={mod.id} href={`#${mod.id}`} className="modules-jump-link">
              <span style={{ backgroundColor: mod.color }} />
              {mod.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Comparison Table */}
      <section className="modules-comparison py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-teal-800">At a glance</span>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">Module comparison</h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-slate-500">A concise comparison of input modality, model family, purpose, and reported validation results.</p>
          </div>
          <div className="modules-table-wrap overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="modules-table-head">
                  <th className="text-left px-5 py-4 text-white font-semibold">Module</th>
                  <th className="text-center px-5 py-4 text-white font-semibold">Input</th>
                  <th className="text-left px-5 py-4 text-white font-semibold">Main Model</th>
                  <th className="text-left px-5 py-4 text-white font-semibold">Function</th>
                  <th className="text-center px-5 py-4 text-white font-semibold">Validation Accuracy*</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.module} className={i % 2 === 0 ? "modules-table-row" : "modules-table-row modules-table-row-alt"}>
                    <td className="px-5 py-4 font-medium text-gray-900">{row.module}</td>
                    <td className="px-5 py-4 text-center">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{row.input}</span>
                    </td>
                    <td className="px-5 py-4 text-gray-600 text-xs">{row.model}</td>
                    <td className="px-5 py-4 text-gray-600 text-xs">{row.function}</td>
                    <td className="px-5 py-4 text-center font-extrabold text-teal-800">{row.accuracy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">* Project-reported experimental validation results only</p>
        </div>
      </section>

      {/* Module Details */}
      <section className="modules-details py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {modules.map((mod, idx) => (
            <div key={mod.id} id={mod.id} className="scroll-mt-20">
              <div className="module-detail-card overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_75px_rgba(20,35,61,0.08)] transition-shadow hover:shadow-[0_30px_90px_rgba(15,88,106,0.13)]">
                {/* Header stripe */}
                <div
                  className="module-detail-header relative overflow-hidden p-6 text-white sm:p-8"
                  style={{ background: `radial-gradient(circle at 92% 12%, ${mod.color}88, transparent 36%), linear-gradient(125deg, #0b172b, #12324d 58%, #282d60)` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{mod.icon}</span>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-teal-200">Module {String(idx + 1).padStart(2, "0")}</div>
                          <h2 className="mt-1 text-2xl font-black tracking-[-0.04em] sm:text-3xl">{mod.name}</h2>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Model: {mod.model}</span>
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Input: {mod.modality}</span>
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{mod.framework}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100/70">Experimental validation*</div>
                      <div className="mt-1 text-4xl font-black tracking-[-0.05em]">{mod.accuracy}</div>
                      <div className="w-full h-2 bg-white/20 rounded-full mt-2" style={{ minWidth: 120 }}>
                        <div
                          className="h-full rounded-full bg-white/70"
                          style={{ width: `${mod.accNum}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Dataset */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Dataset</h3>
                    <p className="module-dataset text-sm text-slate-700">{mod.dataset}</p>
                  </div>

                  {/* Classes */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Classification Classes</h3>
                    <div className="flex flex-wrap gap-2">
                      {mod.classes.map((c) => (
                        <span key={c} className="module-class-pill">{c}</span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Main Tasks */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Main Tasks</h3>
                      <ul className="space-y-1.5">
                        {mod.tasks.map((t) => (
                          <li key={t} className="flex items-start gap-2 text-xs text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Signs */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Indicators</h3>
                      <ul className="space-y-1.5">
                        {mod.signs.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-xs text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Explainability */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Explainability</h3>
                      <ul className="space-y-1.5">
                        {mod.explainability.map((e) => (
                          <li key={e} className="flex items-start gap-2 text-xs text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Lesion-Aware Analysis — DR module only */}
                  {mod.id === "dr" && (
                    <div className="lesion-section mb-8 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
                      {/* Section header */}
                      <div className="border-b border-blue-100 bg-gradient-to-r from-[#0b172b] to-[#12324d] px-5 py-4 sm:px-7">
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-lg">🔬</span>
                          <div>
                            <h3 className="text-sm font-bold text-white tracking-wide">Lesion-Aware Analysis</h3>
                            <p className="text-[10px] text-blue-200/80 mt-0.5 font-medium uppercase tracking-widest">Individual Research Contribution</p>
                          </div>
                        </div>
                      </div>

                      <div className="px-5 py-6 sm:px-7 space-y-7">
                        {/* Description */}
                        <p className="text-sm leading-relaxed text-slate-600">
                          My lesion-aware analysis component enhances diabetic retinopathy severity classification by combining explainable AI with retinal-region analysis. Grad-CAM highlights the retinal regions that influence the model&apos;s prediction. These regions can then be processed into candidate regions and examined using visual characteristics and filtering techniques to support the interpretation of potential diabetic retinopathy lesions. The system presents lesion-related information alongside the predicted severity and visual explanations, helping users better understand the retinal evidence associated with the prediction.
                        </p>

                        {/* Workflow Stepper */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Lesion Analysis Workflow</h4>
                          <div className="lesion-stepper">
                            {[
                              {
                                step: 1,
                                icon: "📷",
                                title: "Retinal Image Input",
                                desc: "The user uploads a retinal fundus image, which is prepared for processing using the model\u0027s required input dimensions.",
                              },
                              {
                                step: 2,
                                icon: "🧠",
                                title: "Severity Classification",
                                desc: "EfficientNetV2-S predicts one of the five diabetic retinopathy severity classes and provides class probabilities and prediction confidence.",
                              },
                              {
                                step: 3,
                                icon: "🔥",
                                title: "Grad-CAM Visualization",
                                desc: "Grad-CAM generates a heatmap highlighting the retinal regions that contributed to the model\u0027s predicted severity.",
                              },
                              {
                                step: 4,
                                icon: "🎯",
                                title: "Candidate-Region Analysis",
                                desc: "Highlighted regions are processed to identify candidate areas for further examination. Visual feature analysis and candidate filtering support the interpretation of relevant retinal abnormalities.",
                              },
                              {
                                step: 5,
                                icon: "📋",
                                title: "Lesion-Aware Results",
                                desc: "The system presents the severity prediction, visual explanation, and available lesion-related information, including potential lesion categories and counts where supported by the implementation.",
                              },
                            ].map((item, i) => (
                              <div key={item.step} className="lesion-step-item">
                                <div className="lesion-step-card">
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white flex-shrink-0">{item.step}</span>
                                    <span className="text-base">{item.icon}</span>
                                  </div>
                                  <h5 className="text-xs font-bold text-slate-800 mb-1">{item.title}</h5>
                                  <p className="text-[11px] leading-relaxed text-slate-500">{item.desc}</p>
                                </div>
                                {i < 4 && (
                                  <div className="lesion-step-connector">
                                    <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Potential Lesion Indicators */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Potential Lesion Indicators</h4>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {[
                              { label: "Microaneurysms", icon: "🔴" },
                              { label: "Retinal haemorrhages", icon: "🩸" },
                              { label: "Hard exudates", icon: "🟡" },
                              { label: "Cotton-wool spots", icon: "⚪" },
                              { label: "Other DR-related abnormalities", icon: "🔍" },
                            ].map((lesion) => (
                              <span key={lesion.label} className="lesion-indicator-badge">
                                <span>{lesion.icon}</span> {lesion.label}
                              </span>
                            ))}
                          </div>
                          <p className="text-[11px] leading-relaxed text-slate-400 italic">
                            Lesion indicators represent potential retinal abnormalities considered during lesion-aware analysis. The availability and reliability of individual lesion interpretations depend on the implemented analysis pipeline and input image quality.
                          </p>
                        </div>

                        {/* What the Analysis Provides + Reliability — side by side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {/* What the Analysis Provides */}
                          <div className="rounded-xl border border-slate-200 bg-white p-5">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                              <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-100 text-[10px]">📊</span>
                              What the Analysis Provides
                            </h4>
                            <ul className="space-y-1.5">
                              {[
                                "Predicted diabetic retinopathy severity",
                                "Class probabilities and prediction confidence",
                                "Grad-CAM heatmap and overlay on the original fundus image",
                                "Highlighted retinal regions that influenced the prediction",
                                "Candidate-region evidence and visual feature analysis, where implemented",
                                "Available lesion-related interpretations and counts",
                                "Reliability information and warnings when applicable",
                              ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs text-gray-700">
                                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
                              Combining classification and visual explanations provides more interpretable information than displaying only a disease label.
                            </p>
                          </div>

                          {/* Reliability Assessment */}
                          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                              <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-100 text-[10px]">🛡️</span>
                              Reliability Assessment
                            </h4>
                            <p className="text-xs leading-relaxed text-slate-600">
                              The system assesses prediction confidence and checks whether the input&apos;s learned feature representation differs from the training distribution. Where applicable, reliability warnings indicate that the prediction or associated lesion information may require further verification.
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200 font-medium">Confidence scoring</span>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200 font-medium">OOD detection</span>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200 font-medium">Reliability warnings</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Formula for Glaucoma and Cataract */}
                  {"formula" in mod && mod.formula && (
                    <div className="module-formula mb-8 overflow-hidden rounded-2xl border border-teal-100">
                      <div className="border-b border-teal-100 bg-teal-50 px-5 py-3">
                        <h3 className="text-xs font-bold text-blue-800">{mod.formula.label}</h3>
                      </div>
                      <div className="px-5 py-4 bg-white">
                        <p
                          className="text-sm font-mono font-semibold text-gray-800 break-words"
                          style={{ fontFamily: "JetBrains Mono, monospace" }}
                        >
                          {mod.formula.eq}
                        </p>
                        {"weights" in mod.formula && mod.formula.weights && (
                          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {mod.formula.weights.map((w) => (
                              <div
                                key={w.feature}
                                className="rounded-lg p-3 text-white text-center"
                                style={{ background: w.color }}
                              >
                                <div className="text-lg font-bold">{w.weight}</div>
                                <div className="text-xs opacity-80 mt-0.5">{w.feature}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Evaluation Metrics */}
                  <div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Evaluation Metrics</h3>
                      <div className="flex flex-wrap gap-2">
                        {mod.metrics.map((m) => (
                          <span key={m} className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OOD Detection */}
      <section className="modules-reliability py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-white px-3 py-1 rounded-full border border-blue-100">Reliability</span>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">&ldquo;When the Model Should Say: I&apos;m Not Sure&rdquo;</h2>
            <p className="text-sm text-gray-600 mt-2 max-w-xl mx-auto">Out-of-Distribution (OOD) Detection</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Mahalanobis Distance-based OOD Detection</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  The overall research framework considers the problem of images that may not belong to the expected data distribution. 
                  When a model receives an unusual or unfamiliar input image, it may still produce a confident but unreliable prediction.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  OOD detection aims to identify such cases, reducing the chance of confidently processing unsuitable images and improving the overall reliability of model inference.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "🔍", title: "Purpose", desc: "Detect unusual/unfamiliar input images." },
                  { icon: "⚠️", title: "Benefit", desc: "Reduce confident predictions on unsuitable images." },
                  { icon: "📐", title: "Method", desc: "Mahalanobis distance from in-distribution feature space." },
                  { icon: "🛡️", title: "Note", desc: "A reliability research component — not a clinical safety guarantee." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preprocessing Pipeline */}
      <section className="modules-pipeline py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Data Pipeline</span>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">Preprocessing Pipeline</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {[
              "Raw Image", "Resize", "Normalize", "Contrast Enhancement",
              "Noise Reduction", "Quality Check", "Augmentation (Training)", "Model Input"
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-white text-center shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, #${["1e3a8a", "1d4ed8", "2563eb", "1e40af", "1e40af", "2563eb", "1d4ed8", "3b82f6"][i]}, #3b82f6)`
                  }}
                >
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <svg className="w-4 h-4 text-blue-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
