"use client";

const gaps = [
  { num: "01", title: "Single-Disease Focus", desc: "Many existing systems are designed for one disease only, limiting their clinical utility for diabetic patients who may have multiple concurrent conditions." },
  { num: "02", title: "Fragmented Diagnostic Workflow", desc: "Separate models may be required for DR, glaucoma, cataract and DME, creating a fragmented and inefficient screening experience." },
  { num: "03", title: "Limited Multi-Modal Analysis", desc: "Fundus and OCT analysis are often developed independently, preventing integrated multi-modal diagnostic support." },
  { num: "04", title: "Limited Explainability", desc: "Many deep learning systems provide predictions without meaningful visual explanations, reducing clinical trust." },
  { num: "05", title: "Limited Risk and Severity Information", desc: "Many systems return only a binary label rather than severity or risk level, limiting actionable clinical insight." },
  { num: "06", title: "Lack of Visibility-Aware Cataract Assessment", desc: "Cataract studies commonly focus on classification but do not explicitly quantify how lens opacity affects retinal visibility." },
  { num: "07", title: "Lack of Structural Glaucoma Biomarkers", desc: "Many glaucoma models do not explicitly expose clinically meaningful features such as Cup-to-Disc Ratio (CDR)." },
];

const objectives = [
  "Develop deep learning models for diabetes-related eye disease detection.",
  "Develop disease-specific severity/risk assessment mechanisms.",
  "Integrate fundus and OCT image analysis into one platform.",
  "Incorporate Explainable AI techniques such as Grad-CAM and segmentation visualization.",
  "Develop a web-based interface for image upload and result visualization.",
  "Evaluate model performance using appropriate quantitative metrics.",
  "Provide interpretable outputs that can assist healthcare professionals.",
  "Design a modular architecture that can support future disease modules.",
];

const litThemes = [
  { title: "Diabetic Retinopathy", desc: "Deep learning and CNN models can identify retinal lesions and classify DR severity from fundus images.", icon: "🔴" },
  { title: "Glaucoma", desc: "Glaucoma detection benefits from optic disc/cup analysis, segmentation and biomarkers such as CDR.", icon: "🟡" },
  { title: "Cataract", desc: "Deep learning can classify cataract severity from fundus images, but visibility degradation and explainability remain important research challenges.", icon: "🟠" },
  { title: "DME", desc: "Deep learning models can analyze retinal images/OCT to identify macular edema and related retinal abnormalities.", icon: "🟢" },
  { title: "Multi-Disease AI", desc: "Multi-disease frameworks can improve screening efficiency but must address disease-specific reasoning and modality differences.", icon: "🔵" },
  { title: "Explainable AI", desc: "Grad-CAM and segmentation visualization can provide visual evidence supporting AI predictions.", icon: "💡" },
  { title: "Clinical Trust", desc: "AI systems should provide interpretable outputs rather than only black-box predictions to earn clinical trust.", icon: "🏥" },
];

const methodology = [
  { phase: "1", title: "Problem Identification", desc: "Identify challenges in diabetes-related eye disease screening." },
  { phase: "2", title: "Literature Review", desc: "Study AI, CNNs, transfer learning, XAI, fundus/OCT analysis and existing systems." },
  { phase: "3", title: "Research Gap", desc: "Identify limitations in single-disease systems, explainability, risk assessment and visibility-aware analysis." },
  { phase: "4", title: "Dataset Preparation", desc: "Collect, clean, preprocess and split disease-specific datasets." },
  { phase: "5", title: "Model Development", desc: "Train disease-specific AI models (EfficientNet variants, U-Net)." },
  { phase: "6", title: "Assessment", desc: "Generate severity, risk, biomarkers and VDS where applicable." },
  { phase: "7", title: "Explainability", desc: "Generate Grad-CAM and segmentation visualizations." },
  { phase: "8", title: "OOD / Reliability", desc: "Investigate unfamiliar input detection using Mahalanobis distance." },
  { phase: "9", title: "Web Integration", desc: "Connect models through APIs and integrate into the React frontend." },
  { phase: "10", title: "Evaluation", desc: "Measure accuracy, precision, recall, F1, confusion matrix and other relevant metrics." },
  { phase: "11", title: "System Testing", desc: "Test functional, usability, performance and integration requirements." },
  { phase: "12", title: "Final Validation", desc: "Finalize the system, documentation and research paper." },
];

const technologies = [
  {
    category: "AI / ML",
    color: "#3b82f6",
    bg: "#eff6ff",
    items: ["Python", "PyTorch", "CNN", "Transfer Learning", "EfficientNet", "EfficientNetV2", "ResNet", "U-Net"],
  },
  {
    category: "Explainable AI",
    color: "#1d4ed8",
    bg: "#dbeafe",
    items: ["Grad-CAM", "Segmentation Visualization", "Attention Heatmaps", "Overlay Generation"],
  },
  {
    category: "Image Processing",
    color: "#2563eb",
    bg: "#e0f2fe",
    items: ["OpenCV", "Normalization", "Contrast Enhancement", "Noise Reduction", "Image Quality Analysis"],
  },
  {
    category: "Web Development",
    color: "#1e40af",
    bg: "#dbeafe",
    items: ["React.js", "Flask", "REST APIs", "HTML/CSS/JavaScript", "MongoDB"],
  },
  {
    category: "Training & Experimentation",
    color: "#1e3a8a",
    bg: "#eff6ff",
    items: ["Google Colab", "Kaggle", "Jupyter Notebook", "Visual Studio Code"],
  },
];

const literature = [
  "Diagnosis of Diseases in Color Fundus Images Using Deep Learning Algorithms with Explainable Visualization",
  "Automatic Cataract Grading with Visual-semantic Interpretability",
  "A Hybrid Global-Local Representation CNN Model for Automatic Cataract Grading",
  "Automatic Cataract Classification Using Deep Neural Network With Discrete State Transition",
  "Automated Eye Disease Detection of Diabetic Retinopathy Using Artificial Intelligence on Fundus Images",
  "A Comprehensive Analysis of Diabetic Retinopathy using Deep Learning Techniques",
  "Diabetic Macular Edema Detection and Classification Using Advanced Convolutional Neural Networks",
  "Identification of Diabetic Related Eye Diseases Using Deep Learning",
  "Early Detection of Glaucoma from Cropped Fundus Images Using Transfer-Learned CNN",
  "A Survey on AI-Powered Ophthalmology: A Revolution in Eye Care and Disease Management",
];

export default function DomainPage() {
  return (
    <div>
      {/* Header */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-200 bg-white/10 px-3 py-1 rounded-full mb-4">Research Domain</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Domain Overview</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Artificial Intelligence, Deep Learning, Medical Image Analysis, Explainable AI, Ophthalmology & Software Systems
          </p>
        </div>
      </section>

      {/* Research Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Problem Statement</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Research Problem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔍",
                title: "Fragmented Systems",
                desc: "Existing AI-based ophthalmic diagnostic systems often focus on individual diseases. A diabetic patient may experience multiple eye disorders simultaneously, making separate systems inefficient.",
              },
              {
                icon: "🕳️",
                title: "Black-Box AI",
                desc: "Many deep learning models behave as black boxes and provide a disease label without showing which retinal structures influenced the prediction, reducing clinical trust.",
              },
              {
                icon: "📉",
                title: "Insufficient Assessment",
                desc: "Conventional systems often provide only disease presence/absence without sufficient severity, risk, or image-quality information for effective clinical decision support.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Literature Themes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-white px-3 py-1 rounded-full border border-blue-100">Literature</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Literature Survey Themes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {litThemes.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{t.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Gaps */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Identified Gaps</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Research Gaps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gaps.map((g) => (
              <div key={g.num} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm text-white"
                  style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                >
                  {g.num}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{g.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #f0f7ff, #e8f4fd)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-white px-3 py-1 rounded-full border border-blue-100">Goals</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Research Objectives</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm mb-6">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Main Objective</h3>
            <p className="text-gray-700 leading-relaxed">
              To design and develop an explainable AI-driven multi-disease diagnostic framework capable of detecting
              diabetes-related eye disorders while providing disease-specific severity, risk, structural and
              visual-explanation information to support early screening and clinical decision-making.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {objectives.map((obj, i) => (
              <div key={i} className="flex gap-3 bg-white rounded-xl p-4 border border-gray-200">
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "#3b82f6" }}
                >
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Approach</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Research Methodology</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(to bottom, #3b82f6, #1e3a8a)" }} />
            <div className="space-y-4">
              {methodology.map((m) => (
                <div key={m.phase} className="flex gap-5 relative">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm z-10"
                    style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                  >
                    {m.phase}
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-200 mt-1">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Phase {m.phase} — {m.title}</h4>
                    <p className="text-xs text-gray-600">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-white px-3 py-1 rounded-full border border-blue-100">Stack</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Research Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((tech) => (
              <div key={tech.category} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{ background: tech.bg, color: tech.color }}
                >
                  {tech.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full border"
                      style={{ background: tech.bg, color: tech.color, borderColor: tech.color + "33" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Literature */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">References</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Selected Literature</h2>
            <p className="mt-2 text-sm text-gray-500">Key papers informing this research (summaries only; full texts available via academic databases).</p>
          </div>
          <div className="space-y-3">
            {literature.map((paper, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "#3b82f6" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700">{paper}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
