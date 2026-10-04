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
    limitations: [
      "Performance depends on fundus image quality",
      "Requires adequate image resolution",
      "Results are experimental — not clinically validated",
    ],
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
    limitations: [
      "Requires clear fundus image of optic nerve region",
      "CDR is an indicator, not a standalone diagnostic criterion",
      "Results are experimental — not clinically validated",
    ],
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
    limitations: [
      "VDS coefficients are experimentally derived",
      "Requires fundus images — not slit-lamp images",
      "Results are experimental — not clinically validated",
    ],
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
    limitations: [
      "Designed for OCT images — not fundus images",
      "Performance depends on OCT scan quality",
      "Results are experimental — not clinically validated",
    ],
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
    <div>
      {/* Header */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-200 bg-white/10 px-3 py-1 rounded-full mb-4">AI Modules</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Research Modules</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Four disease-specific deep learning modules, each designed for targeted diagnosis and assessment of diabetes-related eye disorders.
          </p>
          <p className="text-xs text-blue-300 mt-4">
            ⚠️ All accuracy values are project-reported experimental validation results, not clinically validated performance.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Module Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}>
                  <th className="text-left px-5 py-4 text-white font-semibold">Module</th>
                  <th className="text-center px-5 py-4 text-white font-semibold">Input</th>
                  <th className="text-left px-5 py-4 text-white font-semibold">Main Model</th>
                  <th className="text-left px-5 py-4 text-white font-semibold">Function</th>
                  <th className="text-center px-5 py-4 text-white font-semibold">Validation Accuracy*</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.module} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 font-medium text-gray-900">{row.module}</td>
                    <td className="px-5 py-4 text-center">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{row.input}</span>
                    </td>
                    <td className="px-5 py-4 text-gray-600 text-xs">{row.model}</td>
                    <td className="px-5 py-4 text-gray-600 text-xs">{row.function}</td>
                    <td className="px-5 py-4 text-center font-bold" style={{ color: "#1e3a8a" }}>{row.accuracy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">* Project-reported experimental validation results only</p>
        </div>
      </section>

      {/* Module Details */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {modules.map((mod, idx) => (
            <div key={mod.id} id={mod.id} className="scroll-mt-20">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                {/* Header stripe */}
                <div
                  className="p-8 text-white"
                  style={{ background: `linear-gradient(135deg, #0f172a, ${mod.color})` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{mod.icon}</span>
                        <div>
                          <div className="text-xs text-blue-200 font-medium mb-1">Module {idx + 1}</div>
                          <h2 className="text-2xl font-extrabold">{mod.name}</h2>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Model: {mod.model}</span>
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Input: {mod.modality}</span>
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{mod.framework}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-blue-200 mb-1">Experimental Validation Accuracy*</div>
                      <div className="text-4xl font-black">{mod.accuracy}</div>
                      <div className="w-full h-2 bg-white/20 rounded-full mt-2" style={{ minWidth: 120 }}>
                        <div
                          className="h-full rounded-full bg-white/70"
                          style={{ width: `${mod.accNum}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Dataset */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Dataset</h3>
                    <p className="text-sm text-gray-700 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">{mod.dataset}</p>
                  </div>

                  {/* Classes */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Classification Classes</h3>
                    <div className="flex flex-wrap gap-2">
                      {mod.classes.map((c) => (
                        <span key={c} className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-700">{c}</span>
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

                  {/* Formula for Glaucoma and Cataract */}
                  {"formula" in mod && mod.formula && (
                    <div className="mb-8 rounded-xl overflow-hidden border border-blue-100">
                      <div className="px-5 py-3 bg-blue-50 border-b border-blue-100">
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

                  {/* Metrics + Limitations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Evaluation Metrics</h3>
                      <div className="flex flex-wrap gap-2">
                        {mod.metrics.map((m) => (
                          <span key={m} className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{m}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Current Limitations</h3>
                      <ul className="space-y-1.5">
                        {mod.limitations.map((l) => (
                          <li key={l} className="flex items-start gap-2 text-xs text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OOD Detection */}
      <section className="py-16 bg-gray-50">
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
      <section className="py-16 bg-white">
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
    </div>
  );
}
