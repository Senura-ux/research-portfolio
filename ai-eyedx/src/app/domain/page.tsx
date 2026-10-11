"use client";

const reasons = [
  {
    num: "01",
    title: "Multi-condition burden",
    desc: "Diabetes is linked with several ocular complications—DR, DME, glaucoma, and cataract—often requiring coordinated screening rather than isolated disease detection.",
    icon: "🧠",
  },
  {
    num: "02",
    title: "Access and scalability",
    desc: "Conventional ophthalmic evaluation depends heavily on specialist interpretation and imaging expertise, which limits the reach of large-scale screening programs.",
    icon: "📡",
  },
  {
    num: "03",
    title: "Clinical complexity",
    desc: "Each disease requires a different diagnostic lens: retinal lesions for DR, structural features for glaucoma, visibility changes for cataract, and retinal layer analysis for DME.",
    icon: "🔬",
  },
  {
    num: "04",
    title: "Interpretability gap",
    desc: "Many black-box systems produce a class label without explaining which regions influenced the result, reducing trust for medical decision support.",
    icon: "🛡️",
  },
];

const datasets = [
  {
    name: "Diabetic Retinopathy",
    modality: "Fundus imaging",
    focus: "Severity classification from lesion presence and retinal abnormalities",
    detail: "No DR, Mild, Moderate, Severe, Proliferative DR",
    color: "from-rose-500 to-orange-400",
  },
  {
    name: "Diabetic Macular Edema",
    modality: "OCT imaging",
    focus: "Retinal fluid and structural disorder assessment",
    detail: "NORMAL, DRUSEN, DME, CNV",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Glaucoma",
    modality: "Fundus imaging",
    focus: "Optic disc/cup analysis and risk-oriented glaucoma staging",
    detail: "Normal, Early Glaucoma, Advanced Glaucoma",
    color: "from-indigo-500 to-blue-400",
  },
  {
    name: "Cataract",
    modality: "Fundus imaging",
    focus: "Severity grading and visibility degradation assessment",
    detail: "No, Mild, Moderate, Severe cataract",
    color: "from-violet-500 to-fuchsia-400",
  },
];

const objectives = [
  "Develop disease-specific deep learning models for DR, DME, glaucoma, and cataract detection.",
  "Integrate multimodal retinal imaging inputs, combining fundus photography and OCT analysis within a unified framework.",
  "Deliver severity classification, risk level estimation, and clinically relevant biomarkers to support screening decisions.",
  "Incorporate explainable AI techniques such as Grad-CAM and segmentation overlays to make model outputs more interpretable.",
  "Design and implement a user-friendly web platform that allows image upload, processing, and result display.",
  "Evaluate model performance using validation metrics and clinically meaningful outputs beyond simple labels.",
];

const litThemes = [
  {
    title: "Diabetic Retinopathy",
    desc: "CNN-based and transfer-learning approaches classify retina lesions and severity using fundus images.",
    icon: "🩺",
  },
  {
    title: "Cataract Assessment",
    desc: "Research has investigated cataract grading and visibility degradation, with vessel and optic-disc visibility declining as severity increases.",
    icon: "👁️",
  },
  {
    title: "DME Analysis",
    desc: "OCT image analysis has been used to detect fluid accumulation and retinal abnormalities related to diabetic macular edema.",
    icon: "📈",
  },
  {
    title: "Glaucoma Detection",
    desc: "Optic disc and cup segmentation, along with Cup-to-Disc Ratio, are essential biomarkers in glaucoma assessment.",
    icon: "🎯",
  },
  {
    title: "Explainability",
    desc: "Grad-CAM and segmentation overlays provide visual evidence of the anatomy and features driving model predictions.",
    icon: "✨",
  },
  {
    title: "Clinical Trust",
    desc: "AI systems are more valuable when they communicate severity, risk, and confidence in ways clinicians can interpret consistently.",
    icon: "🤝",
  },
];

const methodology = [
  { phase: "01", title: "Problem and literature analysis", desc: "Reviewed diabetes-related eye disease challenges, current ophthalmic AI trends, and unresolved gaps in multimodal screening." },
  { phase: "02", title: "Dataset preparation", desc: "Collected disease-specific datasets, resized images, normalized inputs, and applied augmentation to improve generalizability." },
  { phase: "03", title: "Disease-specific model design", desc: "Developed specialized backbones such as EfficientNet variants and U-Net-based segmentation-driven glaucoma analysis." },
  { phase: "04", title: "OOD detection and reliability analysis", desc: "Use Mahalanobis-distance scoring to flag unfamiliar inputs outside expected feature distributions and surface reliability warnings." },
  { phase: "05", title: "Assessment outputs", desc: "Produced disease-level severity, risk, confidence, structural biomarkers, and cataract visibility metrics." },
  { phase: "06", title: "Explainability", desc: "Integrated Grad-CAM and segmentation-based overlays to visualize the retinal regions influencing classifications." },
  { phase: "07", title: "System deployment", desc: "Connected independently optimized modules through Flask services and a React-based interface into a unified web platform." },
];

const technologies = [
  { category: "AI / DL", items: ["Python", "PyTorch", "CNN", "Transfer Learning", "EfficientNet", "EfficientNetV2", "U-Net"] },
  { category: "Imaging", items: ["Fundus Photography", "OCT", "Image Normalization", "Contrast Enhancement", "Noise Reduction"] },
  { category: "Explainability", items: ["Grad-CAM", "Segmentation Maps", "Heatmap Overlays", "Clinical Visualization"] },
  { category: "Platform", items: ["React.js", "Flask", "REST APIs", "Web Interface", "Model Integration"] },
  { category: "Analysis", items: ["Confusion Matrix", "Precision", "Recall", "F1-score", "OOD Detection", "Mahalanobis Score"] },
];

export default function DomainPage() {
  return (
    <main className="domain-page bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.25),_transparent_30%),linear-gradient(135deg,#020817_0%,#0f172a_18%,#172554_42%,#1d4ed8_72%,#2563eb_100%)] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        <div className="absolute -top-32 right-[-5rem] h-[30rem] w-[30rem] rounded-full border border-white/10 bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-5rem] h-[24rem] w-[24rem] rounded-full border border-white/10 bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.95)]" />
              Research Domain
            </span>
            <h1 className="mt-8 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              Explainable Multi-Disease
              <span className="mt-2 block bg-gradient-to-r from-blue-200 via-sky-100 to-blue-400 bg-clip-text text-transparent">
                Ophthalmic AI
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/90">
              An AI-driven research framework for diabetes-related eye disorders, combining multimodal imaging, disease-specific models, and explainability for clinically meaningful screening support.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Cataract", value: "88.19%", note: "EfficientNet-B3 validation accuracy" },
              { label: "DR", value: "92.13%", note: "EfficientNetV2-S validation accuracy" },
              { label: "DME", value: "92.67%", note: "EfficientNet-B0 validation accuracy" },
              { label: "Glaucoma", value: "95.48%", note: "EfficientNet-B0 validation accuracy" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg shadow-[0_25px_60px_rgba(15,23,42,0.25)]">
                <div className="text-sm uppercase tracking-[0.18em] text-blue-100/80">{metric.label}</div>
                <div className="mt-3 text-3xl font-black text-white">{metric.value}</div>
                <div className="mt-1 text-xs text-blue-100/70">{metric.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research-gap" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">Problem Statement</span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Why this research domain matters
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((item) => (
              <div key={item.num} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_60px_rgba(37,99,235,0.12)]">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl shadow-[0_12px_30px_rgba(59,130,246,0.25)]">
                  {item.icon}
                </div>
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600">{item.num}</div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research-problem-solution" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">Abstract Summary</span>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
                A unified platform for diabetic eye disease screening
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Diabetes mellitus is associated with multiple ocular complications, including diabetic retinopathy, diabetic macular edema, cataract, and glaucoma. This research proposes an explainable AI framework that integrates four disease-specific deep learning modules into a shared web-based diagnosis platform.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Retinal fundus images are used for cataract, DR, and glaucoma assessment, while OCT images support DME analysis. Each module provides clinically useful outputs such as disease severity, confidence, risk classification, structural biomarkers, and visual explanations. The system aims to improve screening accessibility, scalability, and interpretability in real-world ophthalmic workflows.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800 p-7 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">Framework focus</div>
              <div className="space-y-4">
                {[
                  "Disease-specific neural models",
                  "Multimodal retinal image analysis",
                  "Explainable AI-driven outputs",
                  "Clinically meaningful decision support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span className="text-sm font-medium text-blue-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm ring-1 ring-slate-200">Disease Modules</span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">Coverage of the multi-disease system</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {datasets.map((disease) => (
              <div key={disease.name} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(59,130,246,0.10)]">
                <div className={`inline-flex rounded-full bg-gradient-to-r ${disease.color} px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white`}>
                  {disease.modality}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{disease.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{disease.focus}</p>
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium text-slate-700">
                  {disease.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research-objectives" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">Goals</span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">Research objectives</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-sm font-black text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-relaxed text-slate-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="literature-survey" className="scroll-mt-24 bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm ring-1 ring-slate-200">Literature Review</span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">Major research themes</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {litThemes.map((theme) => (
              <div key={theme.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_35px_rgba(15,23,42,0.04)]">
                <div className="mb-4 text-3xl">{theme.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{theme.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{theme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="methodology" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">Methodology</span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">Research pipeline</h2>
          </div>

          <div className="space-y-5">
            {methodology.map((step) => (
              <div key={step.phase} className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm md:flex-row md:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 text-lg font-black text-white shadow-[0_12px_25px_rgba(59,130,246,0.22)]">
                  {step.phase}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="scroll-mt-24 bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">Technology Stack</span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Core research and engineering tools</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {technologies.map((group) => (
              <div key={group.category} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-200">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm ring-1 ring-slate-200">Results</span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">Validation outcomes</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Cataract", value: "88.19%", detail: "Severity classification performance" },
              { label: "DR", value: "92.13%", detail: "Retinal severity classification" },
              { label: "DME", value: "92.67%", detail: "OCT-based disease classification" },
              { label: "Glaucoma", value: "95.48%", detail: "Classification and risk support" },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_35px_rgba(15,23,42,0.03)]">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</div>
                <div className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900">{item.value}</div>
                <div className="mt-2 text-sm text-slate-600">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">Clinical significance</p>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
            A more interpretable and scalable approach to diabetic eye disease screening
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-blue-50/90">
            By combining multimodal imaging, disease-specific modeling, risk-oriented assessment, and explainability, this research contributes toward more accessible and clinically useful AI-assisted ophthalmic screening.
          </p>
        </div>
      </section>
    </main>
  );
}
