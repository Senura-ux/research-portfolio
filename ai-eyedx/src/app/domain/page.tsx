"use client";

const diseaseNav = [
  { id: "dr", label: "Diabetic Retinopathy", caption: "Lesion-aware grading and visual explanations" },
  { id: "dme", label: "DME", caption: "OCT-based structural assessment" },
  { id: "cataract", label: "Cataract", caption: "Severity and visibility degradation" },
  { id: "glaucoma", label: "Glaucoma", caption: "Optic disc/cup and risk assessment" },
];

const overviewPoints = [
  "Deep learning for ophthalmic image analysis",
  "Disease severity and risk-oriented assessment",
  "Explainable AI for clinician-facing evidence",
  "Multimodal fundus and OCT screening workflow",
];

const comparisonRows = [
  {
    study: "Identification of Diabetic Related Eye Diseases Using Deep Learning",
    year: "2023",
    disease: "Diabetic eye diseases",
    modality: "Fundus imaging",
    model: "Deep learning-based classification approaches",
    dataset: "Not reported in the reviewed source",
    performance: "Not reported in the reviewed source",
    contribution: "Explores deep learning for multi-disease diabetic eye diagnosis using fundus images.",
    limitations: "Broad disease coverage without a clearly unified workflow or disease-specific explanation layer.",
  },
  {
    study: "Systematic Development of AI-Enabled Diagnostic Systems for Glaucoma and Diabetic Retinopathy",
    year: "2023",
    disease: "Glaucoma and diabetic retinopathy",
    modality: "Fundus imaging",
    model: "Systematic AI diagnostic pipeline with disease-specific models",
    dataset: "Not reported in the reviewed source",
    performance: "Not reported in the reviewed source",
    contribution: "Highlights the need for systematic AI design in ophthalmic diagnosis and disease-specific assessment.",
    limitations: "Not primarily structured around combined disease modules, multimodal outputs, and explainability.",
  },
  {
    study: "An Automated Detection and Multi-stage Classification of Diabetic Retinopathy Using Convolutional Neural Networks",
    year: "2023",
    disease: "Diabetic retinopathy",
    modality: "Fundus imaging",
    model: "Convolutional neural networks",
    dataset: "Not reported in the reviewed source",
    performance: "Not reported in the reviewed source",
    contribution: "Demonstrates CNN-based DR detection and multi-stage classification approaches.",
    limitations: "Severity grading and interpretability remain constrained by limited lesion-level explanation and workflow integration.",
  },
  {
    study: "A Comprehensive Analysis of Diabetic Retinopathy Using Deep Learning Techniques",
    year: "2024",
    disease: "Diabetic retinopathy",
    modality: "Fundus imaging",
    model: "Deep learning review and CNN-based techniques",
    dataset: "Not reported in the reviewed source",
    performance: "Not reported in the reviewed source",
    contribution: "Summarizes deep learning methods for retina lesion analysis and disease severity assessment.",
    limitations: "Review-oriented rather than a unified, disease-specific medical decision-support workflow.",
  },
  {
    study: "Prediction of Diabetic Eye Disease in Type 2 Diabetes Using Hybridization of Deep Neural Network-Based Approaches",
    year: "2024",
    disease: "Diabetic eye disease",
    modality: "Fundus imaging",
    model: "Hybrid deep neural network approaches",
    dataset: "Not reported in the reviewed source",
    performance: "Not reported in the reviewed source",
    contribution: "Investigates hybrid models for diabetic eye disease prediction in Type 2 diabetes cohorts.",
    limitations: "The focus is primarily predictive rather than a modular, explainable, multi-disease platform.",
  },
  {
    study: "A Survey on AI-Powered Ophthalmology: A Revolution in Eye Care and Disease Management",
    year: "2025",
    disease: "Ophthalmic disease screening",
    modality: "Multimodal ophthalmic imaging",
    model: "Review of AI-powered ophthalmology methods",
    dataset: "Not reported in the reviewed source",
    performance: "Not reported in the reviewed source",
    contribution: "Provides a broad review of AI in ophthalmology, including disease screening and decision support.",
    limitations: "High-level overview; does not provide a single integrated implementation for disease-specific assessment and visual explanation.",
  },
  {
    study: "A Review on Eye Disease Prediction and Detection Using AI/ML",
    year: "2025",
    disease: "Multiple eye diseases",
    modality: "Fundus and general ophthalmic imaging",
    model: "AI/ML review of eye disease detection methods",
    dataset: "Not reported in the reviewed source",
    performance: "Not reported in the reviewed source",
    contribution: "Reinforces the breadth of AI-based eye disease prediction research across multiple conditions.",
    limitations: "Does not fully address explainability, disease-specific severity/risk outputs, or unified clinical workflows.",
  },
  {
    study: "Leveraging Deep Learning with Automated Fundus Imaging for Early Detection and Diagnosis of Eye Diseases",
    year: "2025",
    disease: "Eye disease detection",
    modality: "Automated fundus imaging",
    model: "Deep learning with fundus imaging",
    dataset: "Not reported in the reviewed source",
    performance: "Not reported in the reviewed source",
    contribution: "Emphasizes early detection and automated diagnosis using fundus imaging and deep learning.",
    limitations: "Early detection alone does not guarantee explainable, multi-disease, or disease-specific assessment outputs.",
  },
];

const referenceList = [
  "Identification of Diabetic Related Eye Diseases Using Deep Learning (2023)",
  "Systematic Development of AI-Enabled Diagnostic Systems for Glaucoma and Diabetic Retinopathy (2023)",
  "An Automated Detection and Multi-stage Classification of Diabetic Retinopathy Using Convolutional Neural Networks (2023)",
  "A Comprehensive Analysis of Diabetic Retinopathy Using Deep Learning Techniques (2024)",
  "Prediction of Diabetic Eye Disease in Type 2 Diabetes Using Hybridization of Deep Neural Network-Based Approaches (2024)",
  "A Survey on AI-Powered Ophthalmology: A Revolution in Eye Care and Disease Management (2025)",
  "A Review on Eye Disease Prediction and Detection Using AI/ML (2025)",
  "Leveraging Deep Learning with Automated Fundus Imaging for Early Detection and Diagnosis of Eye Diseases (2025)",
];

const gapCards = [
  {
    title: "Single-disease orientation",
    text: "Many systems are designed around one condition, so clinicians still need separate tools for retinal lesions, structural eye disease, and image-quality issues.",
  },
  {
    title: "Limited multimodal integration",
    text: "Fundus and OCT workflows are often developed independently, despite their complementary value in diabetic eye disease assessment.",
  },
  {
    title: "Weak explainability",
    text: "Classification labels alone do not usually show how the model interpreted retinal structures, optic disc regions, or lesion patterns.",
  },
  {
    title: "Insufficient disease-specific assessment",
    text: "Several studies emphasize disease presence but do not consistently include grading, risk assessment, or output formats relevant to screening decisions.",
  },
  {
    title: "Cataract visibility degradation",
    text: "Existing cataract work often focuses on severity labels rather than explicitly quantifying how optical opacity affects retinal visibility and downstream interpretation.",
  },
  {
    title: "Glaucoma structural analysis",
    text: "Glaucoma studies benefit from optic disc and cup analysis, but not all systems make such structural biomarkers interpretable to clinicians.",
  },
];

export default function DomainPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <section id="literature-survey" className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:30px_30px] opacity-35" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.24),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-200">
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 font-medium tracking-[0.16em] uppercase text-sky-300">
              Literature Review
            </span>
            <span className="text-slate-400">Academic synthesis</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                Literature Review
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                This review synthesizes deep learning research in diabetic retinopathy, diabetic macular edema, cataract assessment, glaucoma screening, and explainable ophthalmic AI. The aim is to evaluate how prior work informs the design of a unified, disease-specific, and clinically interpretable framework.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Scope</div>
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                The review focuses on deep learning, multimodal retinal imaging, severity and risk assessment, and visual explainability in ophthalmology, with emphasis on evidence relevant to the project’s disease-specific modules.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {overviewPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 text-sm text-slate-200 shadow-[0_20px_35px_rgba(2,6,23,0.2)]">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-3">
          {diseaseNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-sky-200 hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_38px_rgba(2,6,23,0.04)] sm:p-8">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Overview</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Purpose and scope of the review
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-base leading-relaxed text-slate-600">
                The literature on retinal AI has grown substantially across diabetic eye disease, glaucoma, cataract, and OCT-based assessment. Much of the recent work demonstrates that convolutional neural networks, transfer learning, and hybrid architectures can classify retinal pathology with high accuracy when trained on curated image collections.
              </p>
            </div>
            <div>
              <p className="text-base leading-relaxed text-slate-600">
                However, a clear pattern remains: many studies are disease-specific, image-modality-specific, and focused on classification labels rather than a complete screening workflow. This review therefore examines both methodological progress and the practical gaps that motivate a more unified, explainable, and disease-aware framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="dr" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">A. Research on Diabetic Retinopathy</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
            Diabetic retinopathy remains the most established deep-learning application in retinal screening
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_38px_rgba(2,6,23,0.04)]">
            <p className="text-base leading-relaxed text-slate-600">
              Traditional retinal screening for diabetic retinopathy relied heavily on lesion-based examination and clinician interpretation of microaneurysms, haemorrhages, exudates, and vascular abnormalities. In the reviewed literature, this problem has increasingly been addressed through CNN-based approaches, transfer learning, and hybrid architectures that learn hierarchical retinal patterns directly from fundus images.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The literature consistently emphasizes five-class grading as a more clinically relevant objective than binary disease detection, because severity stratification supports earlier referral and monitoring decisions. Although these systems can achieve strong classification performance, their usefulness depends on lesion awareness, external validation, and the ability to explain which retinal regions contributed to the prediction.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">Strengths and limitations</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              <li><span className="font-semibold text-slate-800">Strength:</span> Strong performance on fundus-based DR classification and severity grading.</li>
              <li><span className="font-semibold text-slate-800">Strength:</span> Transfer learning and pretrained CNNs reduce the burden of training from scratch.</li>
              <li><span className="font-semibold text-slate-800">Limitation:</span> Many systems remain tied to single-disease classification rather than integrated screening workflows.</li>
              <li><span className="font-semibold text-slate-800">Limitation:</span> Model explanations are often limited to heatmaps and may not provide clinically grounded lesion-level reasoning.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="dme" className="scroll-mt-24 bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">B. Research on Diabetic Macular Edema</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              OCT is particularly appropriate for DME because it captures retinal layers and fluid changes directly
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-700 bg-slate-800/80 p-6">
              <p className="text-base leading-relaxed text-slate-200">
                DME is closely associated with retinal thickening and intraretinal fluid accumulation. OCT is therefore a highly relevant modality because it provides cross-sectional retinal structure and allows clinicians to examine fluid distribution, layer disruption, and macular changes with far greater detail than standard colour fundus imaging alone.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-200">
                The reviewed literature shows that CNNs and transfer-learning pipelines can classify OCT volumes or B-scans into disease or severity categories, often using retinal structural patterns as discriminative evidence. This is particularly useful for systems that need to distinguish DME from other OCT findings such as drusen or choroidal neovascularization.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-800/80 p-6">
              <h3 className="text-lg font-bold text-white">Why OCT matters</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                <li>It captures retinal layer morphology not visible on a 2D fundus image.</li>
                <li>It supports fluid localization and severity-oriented interpretation.</li>
                <li>It complements fundus-based DR, cataract, and glaucoma assessment within a multimodal framework.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cataract" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">C. Research on Cataract Detection and Severity Assessment</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
            Cataract research has moved beyond simple grading toward visibility-aware assessment
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_38px_rgba(2,6,23,0.04)]">
            <p className="text-base leading-relaxed text-slate-600">
              Cataract detection commonly uses deep learning and transfer learning to classify severity into categories such as no cataract, mild, moderate, and severe. The literature also shows that increased opacity reduces retinal visibility, affecting vessel contrast, optic disc clarity, and the ability to assess deeper retinal structures.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              This is important because not all cataract studies distinguish between a simple classification outcome and the practical issue of how much image degradation affects the interpretability of the retinal image itself. The project addresses this gap by investigating cataract-related visibility degradation as a separate assessment problem rather than only predicting severity labels.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">Important distinction</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              A system may correctly classify cataract severity while still failing to quantify the extent to which lens opacity reduces retinal visibility. The proposed work therefore evaluates both the disease label and the visibility condition, which is more meaningful for downstream retinal interpretation.
            </p>
          </div>
        </div>
      </section>

      <section id="glaucoma" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">D. Research on Glaucoma Detection</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Glaucoma assessment depends strongly on structural cues and optic-nerve geometry
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_38px_rgba(2,6,23,0.04)]">
              <p className="text-base leading-relaxed text-slate-600">
                Fundus-based glaucoma research often focuses on optic disc and optic cup localization, retinal vessel pattern analysis, and structural biomarkers such as the cup-to-disc ratio. These features are clinically relevant because glaucomatous damage is reflected in changes to the optic nerve head geometry and surrounding retinal architecture.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The challenge is that glaucoma can be subtle, image quality varies across acquisition settings, and structural abnormalities may not be obvious without careful segmentation or expert interpretation. This is why explainable structures such as optic disc and cup masks are especially valuable for clinical trust and validation.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900">Relevant challenges</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <li>Variability in image capture quality and illumination.</li>
                <li>Subtle structural differences during early-stage glaucoma.</li>
                <li>Need for external validation and clinically meaningful biomarkers.</li>
                <li>Importance of segmentation-based and risk-oriented interpretation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="xai" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">E. Explainable Artificial Intelligence in Ophthalmology</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
            Explainable AI helps connect a prediction to clinically relevant retinal regions
          </h2>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_38px_rgba(2,6,23,0.04)] sm:p-8">
          <p className="text-base leading-relaxed text-slate-600">
            Grad-CAM and similar methods are frequently used in ophthalmic AI to highlight image regions that contribute to a model prediction. In retinal disease screening, this can help show whether the network is focusing on lesion regions, optic disc structures, retinal vasculature, or image-quality-related artifacts. Such visualizations are useful because they allow users to inspect whether the model is attending to medically meaningful areas instead of background noise or confounding patterns.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            However, heatmaps must be interpreted carefully. They are not proof of clinical correctness. A high-activation region may still reflect a spurious pattern or a confounder. For this reason, explainability is best treated as supporting evidence within a broader diagnostic workflow, not as a replacement for expert assessment.
          </p>
        </div>
      </section>

      <section id="multimodal" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">F. Existing Multi-Disease and Multimodal Diagnostic Frameworks</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              Unified platforms differ from single-model cross-disease approaches
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-700 bg-slate-800/80 p-6">
              <p className="text-base leading-relaxed text-slate-200">
                The literature contains several disease-specific systems for DR, glaucoma, cataract, and DME. These studies demonstrate the value of specialized modeling for each condition, yet they often remain separated by disease, imaging modality, and workflow. In contrast, a unified web platform integrates multiple disease modules into a single environment, allowing common image upload, shared interpretation, and disease-specific outputs to be displayed together.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-800/80 p-6">
              <p className="text-base leading-relaxed text-slate-200">
                This distinction is important. A single model that attempts to classify every disease from the same input space is structurally different from a framework that uses separate disease-specific modules built for different retinal modalities and assessment goals. The latter is more aligned with how real ophthalmic screening often operates: fundus images for DR, cataract, and glaucoma; OCT for DME; and disease-specific explainability for each output.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">G. Critical Comparison of Existing Research</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
            Comparative synthesis of recent ophthalmic AI studies
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-[0_15px_38px_rgba(2,6,23,0.04)]">
          <table className="min-w-[1100px] text-left text-sm">
            <thead className="bg-slate-100 text-slate-800">
              <tr>
                <th className="px-4 py-3 font-semibold">Study / Author</th>
                <th className="px-4 py-3 font-semibold">Year</th>
                <th className="px-4 py-3 font-semibold">Target disease</th>
                <th className="px-4 py-3 font-semibold">Imaging modality</th>
                <th className="px-4 py-3 font-semibold">Model / technique</th>
                <th className="px-4 py-3 font-semibold">Dataset</th>
                <th className="px-4 py-3 font-semibold">Reported performance</th>
                <th className="px-4 py-3 font-semibold">Main contribution</th>
                <th className="px-4 py-3 font-semibold">Limitations or needs</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={`${row.study}-${row.year}`} className="border-t border-slate-200 align-top">
                  <td className="px-4 py-3 font-medium text-slate-800">{row.study}</td>
                  <td className="px-4 py-3 text-slate-600">{row.year}</td>
                  <td className="px-4 py-3 text-slate-600">{row.disease}</td>
                  <td className="px-4 py-3 text-slate-600">{row.modality}</td>
                  <td className="px-4 py-3 text-slate-600">{row.model}</td>
                  <td className="px-4 py-3 text-slate-600">{row.dataset}</td>
                  <td className="px-4 py-3 text-slate-600">{row.performance}</td>
                  <td className="px-4 py-3 text-slate-600">{row.contribution}</td>
                  <td className="px-4 py-3 text-slate-600">{row.limitations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="references" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.04)] sm:p-10 lg:p-12">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-700">J. References</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
              Verified references used in this review
            </h2>
          </div>

          <ol className="mx-auto max-w-5xl list-none space-y-5 text-xl leading-relaxed text-slate-700">
            {referenceList.map((ref, index) => (
              <li key={ref} className="flex gap-4">
                <span className="mt-1 inline-flex min-w-[2.25rem] items-center justify-center text-base font-bold text-sky-700">[{index + 1}]</span>
                <span>{ref}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="research-gap" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Research Gaps</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Evidence gaps that motivate the proposed framework
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gapCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_38px_rgba(2,6,23,0.04)]">
                <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Gap</div>
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research-problem-solution" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-12 max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">
              RESEARCH PROBLEM &amp; SOLUTION
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
              Bridging the Gap Between AI-Based Eye Disease Detection and Explainable Assessment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Diabetes-related eye disorders can affect vision and may require timely clinical assessment. Although deep learning has demonstrated potential in ophthalmic image analysis, developing an integrated platform that supports multiple eye diseases, disease-specific assessment, and interpretable predictions remains a challenge.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              AI EyeDx addresses this research problem through a unified web-based framework containing four disease-specific modules: diabetic retinopathy, glaucoma, cataract, and diabetic macular edema (DME).
            </p>
          </header>

          <section aria-labelledby="problem-heading" className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">The Research Problem</p>
              <h3 id="problem-heading" className="mt-3 text-2xl font-black tracking-tight text-slate-900">
                Building a unified yet disease-aware platform
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Existing AI-based ophthalmic systems often focus on individual diseases, specific imaging modalities, or narrowly defined classification tasks. As a result, their capabilities may be fragmented across separate systems.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Furthermore, a predicted disease label alone may not provide sufficient information about the image regions influencing the prediction, disease severity, retinal visibility, or the reliability of the result.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                The main research problem is therefore how to integrate disease-specific deep learning models into a unified platform while preserving appropriate imaging methods, assessment strategies, and explainability features for each disease.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Proposed Solution</p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">AI EyeDx</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                AI EyeDx proposes an explainable multi-disease framework that integrates four disease-specific modules through a common web interface. Each module uses its appropriate input modality, model, and assessment approach; no single model is used for all four tasks.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Four specialist modules", "Fundus + OCT", "Explainable outputs"].map((item) => (
                  <span key={item} className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-blue-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="challenges-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Research Challenges</p>
              <h3 id="challenges-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Key Challenges
              </h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Fragmented Disease Assessment",
                  text: "Existing approaches may focus on individual eye diseases rather than providing access to multiple disease-specific assessment modules through one platform.",
                },
                {
                  number: "02",
                  title: "Different Imaging Requirements",
                  text: "Fundus images and optical coherence tomography (OCT) images provide different information. Each disease requires an appropriate image-processing and analysis pipeline.",
                },
                {
                  number: "03",
                  title: "Limited Interpretability",
                  text: "Deep learning models can behave as black-box systems, making it difficult for users to understand which image regions influenced a prediction.",
                },
                {
                  number: "04",
                  title: "Limited Disease-Specific Assessment and Reliability",
                  text: "A simple disease label may not provide additional information such as severity, optic-disc/cup measurements, or cataract-related visibility degradation. Unfamiliar input images can also affect prediction reliability.",
                },
              ].map((challenge) => (
                <article key={challenge.number} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-sky-200 sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-extrabold text-white" aria-hidden="true">
                      {challenge.number}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{challenge.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{challenge.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="modules-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Proposed Solution</p>
              <h3 id="modules-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Four Disease-Specific Modules
              </h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Diabetic Retinopathy (DR)",
                  icon: "DR",
                  details: [
                    "Input: Retinal fundus images",
                    "Model: EfficientNetV2-S",
                    "Function: Five-class DR severity classification",
                    "Additional features: Lesion-aware analysis, Grad-CAM visualization, and Mahalanobis-distance-based out-of-distribution assessment",
                  ],
                },
                {
                  title: "Glaucoma",
                  icon: "G",
                  details: [
                    "Input: Retinal fundus images",
                    "Function: U-Net-based optic-disc and optic-cup segmentation, cup-to-disc ratio extraction, and risk assessment",
                  ],
                },
                {
                  title: "Cataract",
                  icon: "C",
                  details: [
                    "Input: Retinal fundus images",
                    "Model: EfficientNet-B3",
                    "Function: Four-class cataract severity classification",
                    "Additional features: Visibility Degradation Score (VDS) and Grad-CAM visualization",
                  ],
                },
                {
                  title: "Diabetic Macular Edema (DME)",
                  icon: "DME",
                  details: [
                    "Input: OCT images",
                    "Model: EfficientNet-B0",
                    "Function: OCT-based disease classification and assessment",
                    "Additional feature: Grad-CAM visualization",
                  ],
                },
              ].map((module) => (
                <article key={module.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-sky-200">
                  <div className="mb-4 inline-flex h-10 min-w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-2 text-xs font-extrabold text-white" aria-hidden="true">
                    {module.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{module.title}</h4>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600">
                    {module.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="mapping-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Problem to Solution</p>
              <h3 id="mapping-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                How the Solution Addresses the Challenges
              </h3>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                ["Fragmented assessment", "Four disease-specific modules accessible through one web platform."],
                ["Different imaging requirements", "Fundus-based analysis for DR, glaucoma, and cataract, and OCT-based analysis for DME."],
                ["Limited interpretability", "Grad-CAM visualizations highlight image regions that influence predictions."],
                ["Limited disease-specific assessment", "Severity classification, glaucoma-related structural measurements, and cataract visibility assessment, where implemented."],
                ["Reliability concerns", "Mahalanobis-distance-based out-of-distribution assessment in the DR module."],
              ].map(([problem, response]) => (
                <div key={problem} className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:gap-4">
                  <h4 className="shrink-0 text-sm font-bold text-slate-900">{problem}</h4>
                  <span className="hidden text-lg font-bold text-blue-600 sm:inline" aria-hidden="true">→</span>
                  <p className="text-sm leading-relaxed text-slate-600">{response}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="workflow-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">System Workflow</p>
              <h3 id="workflow-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                From Image Input to Results
              </h3>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {[
                "Image Input",
                "Preprocessing",
                "Disease-Specific Model",
                "Assessment Output",
                "Explainability and Reliability Checks",
                "Results Display",
              ].map((step, index) => (
                <li key={step} className="relative flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-extrabold text-blue-700">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold leading-snug text-slate-800">{step}</span>
                  {index < 5 && <span className="ml-auto hidden text-lg font-bold text-blue-400 xl:inline" aria-hidden="true">→</span>}
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="contribution-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Research Contribution</p>
              <h3 id="contribution-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                What This Research Contributes
              </h3>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Unified Platform",
                  text: "Integrates four disease-specific assessment modules in a common web interface.",
                },
                {
                  title: "Disease-Specific Assessment",
                  text: "Uses appropriate models, imaging modalities, and outputs for the selected condition.",
                },
                {
                  title: "Explainability and Reliability",
                  text: "Incorporates visual explanations and the implemented reliability assessment features.",
                },
              ].map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-extrabold text-blue-700 shadow-sm" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="scope-heading" className="mt-14 rounded-3xl bg-slate-950 p-6 text-white shadow-lg sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Responsible Use</p>
            <h3 id="scope-heading" className="mt-3 text-2xl font-black tracking-tight">Scope and Limitations</h3>
            <div className="mt-4 grid gap-5 text-sm leading-relaxed text-slate-300 md:grid-cols-2">
              <p>
                AI EyeDx is an academic research prototype intended to support the investigation of AI-assisted ophthalmic screening. Its predictions depend on the training data, model implementation, and evaluation conditions. Further validation is required before clinical use.
              </p>
              <p>
                The system does not replace professional eye examinations, diagnosis, or treatment by qualified healthcare professionals.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section id="contribution" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-8 shadow-[0_20px_45px_rgba(14,116,144,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">I. Research Contribution</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
            How the proposed framework responds to the reviewed literature
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-base leading-relaxed text-slate-600">
                The proposed framework addresses the main limitations identified in the reviewed studies by combining four disease-specific modules into a single web-based platform. Rather than treating diabetic eye disease as a single isolated classification problem, the design respects the fact that different conditions require different image modalities and diagnostic interpretation strategies.
              </p>
            </div>
            <div>
              <p className="text-base leading-relaxed text-slate-600">
                DR, DME, cataract, and glaucoma each receive appropriate modality-aware disease modeling, while the system also includes severity or risk-oriented outputs and Grad-CAM-based visual explanations. This creates a more coherent and clinically interpretable screening workflow than a single black-box classifier that produces only a disease label.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
