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

      <section id="research-objectives" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-12 max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">
              RESEARCH OBJECTIVES
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
              Developing an Explainable AI Framework for Multi-Disease Eye Assessment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              The primary objective of AI EyeDx is to develop an explainable deep learning framework that integrates disease-specific assessment modules for diabetic retinopathy, glaucoma, cataract, and diabetic macular edema. The framework aims to combine appropriate image-analysis methods, disease-specific outputs, and visual explanations within a unified web-based platform to support AI-assisted ophthalmic screening.
            </p>
          </header>

          <section aria-labelledby="primary-objective-heading">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="8.5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Main Research Objective</p>
                  <h3 id="primary-objective-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900">
                    Primary Objective
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                    To design and develop an explainable, multi-disease deep learning framework for the assessment of selected diabetes-related eye disorders by integrating disease-specific models, appropriate retinal imaging modalities, and interpretable assessment outputs within a unified web-based platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="specific-objectives-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Specific Objectives</p>
              <h3 id="specific-objectives-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                What This Research Aims to Achieve
              </h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: "Develop Disease-Specific Deep Learning Modules",
                  text: "Implement separate AI pipelines for diabetic retinopathy, glaucoma, cataract, and diabetic macular edema, using models and assessment methods appropriate to each condition.",
                },
                {
                  title: "Implement Disease-Specific Image Analysis",
                  text: "Process retinal fundus images for diabetic retinopathy, glaucoma, and cataract, and OCT images for diabetic macular edema. Apply preprocessing and analysis procedures appropriate to each module.",
                },
                {
                  title: "Assess Disease Severity and Relevant Indicators",
                  text: "Provide disease-specific outputs, including five-class diabetic retinopathy severity classification, four-class cataract severity classification, glaucoma-related optic-cup and optic-disc measurements with risk assessment, and OCT-based DME classification.",
                },
                {
                  title: "Integrate Explainable AI",
                  text: "Incorporate Grad-CAM visualizations into relevant model pipelines to highlight image regions that influence predictions and help users interpret model outputs.",
                },
                {
                  title: "Incorporate Visibility and Reliability Assessment",
                  text: "Implement the Cataract Visibility Degradation Score (VDS) using relevant image features and include Mahalanobis-distance-based out-of-distribution assessment in the diabetic retinopathy pipeline.",
                },
                {
                  title: "Integrate the Models into a Web-Based Platform",
                  text: "Connect disease-specific services to a common web interface so users can select a disease module, submit the appropriate image, and view corresponding assessment results and supported visual explanations.",
                },
              ].map((objective, index) => (
                <article key={objective.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-sky-200 sm:p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-extrabold text-white" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{objective.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{objective.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="objective-mapping-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Objective-to-Implementation Mapping</p>
              <h3 id="objective-mapping-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                How Each Objective Is Addressed
              </h3>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-bold">Objective</th>
                    <th scope="col" className="px-5 py-4 font-bold">Implementation Approach</th>
                    <th scope="col" className="px-5 py-4 font-bold">Expected Output</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {[
                    ["Disease-specific modeling", "Separate disease-specific models and assessment pipelines as described in the project modules.", "Predictions and assessment results tailored to the selected disease."],
                    ["Image analysis", "Fundus image inputs for DR, glaucoma, and cataract; OCT image inputs for DME, with module-appropriate preparation.", "Images prepared for the corresponding disease-specific analysis."],
                    ["Severity and indicator assessment", "Classification and relevant structural or visibility analysis, including the outputs described for each module.", "Severity classes and additional disease-specific measurements where supported."],
                    ["Explainable AI", "Grad-CAM visualizations are specified for supported classification modules; the glaucoma module describes segmentation visualizations.", "Visual explanation heatmaps or structural overlays, as applicable."],
                    ["Reliability assessment", "The DR module description specifies Mahalanobis-distance-based out-of-distribution assessment.", "An indication of potentially unfamiliar inputs for further review."],
                    ["Web integration", "The existing Next.js/React website presents the disease modules through a shared interface; model-service execution is dependent on the project integration.", "A common interface for navigating and reviewing disease-specific assessment information."],
                  ].map(([objective, approach, output]) => (
                    <tr key={objective} className="align-top">
                      <th scope="row" className="px-5 py-4 font-semibold text-slate-800">{objective}</th>
                      <td className="px-5 py-4 leading-relaxed">{approach}</td>
                      <td className="px-5 py-4 leading-relaxed">{output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="scope-objectives-heading" className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Research Scope</p>
              <h3 id="scope-objectives-heading" className="mt-3 text-2xl font-black tracking-tight text-slate-900">
                Scope of the Objectives
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                The research focuses on the development and integration of four disease-specific modules within an explainable AI-based screening-support platform. The modules use their respective imaging modalities and assessment approaches. The study also investigates the use of visual explanations, disease-specific outputs, cataract visibility assessment, and reliability-related checks.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                The scope is limited to the conditions, datasets, model architectures, and evaluation procedures used in this project. Further external and clinical validation may be required before practical clinical deployment.
              </p>
            </div>

            <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 shadow-sm sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Expected Outcomes</p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
                Expected Research Outcomes
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["Integrated Platform", "A common web interface for accessing four disease-specific AI modules."],
                  ["Disease-Specific Predictions", "Model outputs tailored to the selected eye condition and its imaging modality."],
                  ["Interpretable Results", "Visual explanations that help users understand which image regions influenced model predictions."],
                  ["Additional Assessment Information", "Relevant severity, structural, visibility, or reliability-related outputs supported by the individual modules."],
                ].map(([title, text]) => (
                  <article key={title} className="rounded-xl border border-white bg-white/90 p-4 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-900">{title}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{text}</p>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                These outcomes describe the intended research contributions. Actual performance and successful implementation should be established using the project&apos;s evaluation results.
              </p>
            </div>
          </section>

          <section aria-labelledby="objectives-closing-heading" className="mt-8 rounded-3xl bg-slate-950 p-6 text-white shadow-lg sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Closing Statement</p>
            <h3 id="objectives-closing-heading" className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              From Objectives to Implementation
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
              The research objectives guide the development of AI EyeDx from disease-specific image analysis to explainable assessment and web-based integration. Together, they establish a structured approach to investigating how multiple deep learning models can be combined into a unified screening-support platform without losing the individual requirements of each disease.
            </p>
          </section>
        </div>
      </section>

      <section id="methodology" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-12 max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">RESEARCH METHODOLOGY</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
              A Modular and Explainable Deep Learning Framework for Eye Disease Assessment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              AI EyeDx follows a modular research methodology that combines disease-specific image processing, deep learning models, assessment procedures, explainability techniques, and web-based integration. Each disease module is developed according to its imaging requirements and diagnostic task, while the overall platform provides a unified interface for accessing the results.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-700 sm:gap-3 sm:text-sm">
              {["Prepare data", "Develop pipelines", "Assess & explain", "Integrate results"].map((stage, index) => (
                <div key={stage} className="flex items-center gap-2 sm:gap-3">
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2">{stage}</span>
                  {index < 3 && <span className="text-blue-500" aria-hidden="true">→</span>}
                </div>
              ))}
            </div>
          </header>

          <section aria-labelledby="methodology-framework-heading">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Overall Methodological Framework</p>
              <h3 id="methodology-framework-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                End-to-End Research Workflow
              </h3>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Dataset Selection and Preparation", "Select datasets appropriate to each disease module. Organize images and labels, verify the class structure, and prepare the data for model development."],
                ["Image Preprocessing", "Apply preprocessing required by the selected dataset and model, such as resizing, normalization, and appropriate image preparation. Keep procedures consistent between training, validation, and inference."],
                ["Disease-Specific Model Development", "Develop or fine-tune individual deep learning pipelines for diabetic retinopathy, glaucoma, cataract, and diabetic macular edema, using the model and analysis strategy suited to each task."],
                ["Disease-Specific Assessment", "Generate the appropriate output for each module, including disease classification, severity categories, structural measurements, or visibility-related assessment where implemented."],
                ["Explainability and Reliability Assessment", "Use Grad-CAM to visualize image regions influencing supported model predictions. Apply Mahalanobis-distance-based out-of-distribution assessment within the diabetic retinopathy pipeline."],
                ["Web Integration and Results Presentation", "Connect disease-specific services to the React frontend and display model outputs and relevant visualizations through the existing website interface."],
              ].map(([title, description], index) => (
                <li key={title} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-extrabold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-base font-bold text-slate-900">{title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="disease-pipelines-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Disease-Specific Methodology</p>
              <h3 id="disease-pipelines-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Four Independent AI Pipelines
              </h3>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {[
                {
                  title: "Diabetic Retinopathy (DR)",
                  modality: "Retinal fundus images",
                  model: "EfficientNetV2-S",
                  steps: [
                    "Prepare and preprocess the fundus images.",
                    "Fine-tune the model for five-class DR severity classification: No DR, Mild, Moderate, Severe, and Proliferative DR.",
                    "Apply Grad-CAM to visualize regions influencing predictions.",
                    "Separately, the lesion-aware pipeline localizes candidate regions, extracts and analyzes features, filters candidates, then performs candidate-level classification or counting for lesions such as microaneurysms, hemorrhages, and hard exudates.",
                    "Apply Mahalanobis-distance-based out-of-distribution assessment to identify potentially unfamiliar inputs.",
                  ],
                  output: "Predicted DR severity, supported lesion-analysis outputs, and relevant explanation and reliability information.",
                },
                {
                  title: "Glaucoma",
                  modality: "Retinal fundus images",
                  model: "U-Net-based optic-disc and optic-cup segmentation",
                  steps: [
                    "Prepare the fundus image.",
                    "Apply the segmentation pipeline to identify the optic disc and optic cup.",
                    "Derive the cup-to-disc ratio from the relevant segmentation measurements.",
                    "Use the implemented assessment criteria to generate the corresponding glaucoma-related risk output.",
                    "Present relevant measurements and supported visual outputs; the cup-to-disc ratio alone does not confirm glaucoma.",
                  ],
                  output: "Optic-disc/cup segmentation, cup-to-disc ratio, and glaucoma-related risk assessment.",
                },
                {
                  title: "Cataract",
                  modality: "Retinal fundus images",
                  model: "EfficientNet-B3",
                  steps: [
                    "Prepare the images for the classification model.",
                    "Predict one of four cataract categories: No, Mild, Moderate, or Severe.",
                    "Calculate the Visibility Degradation Score (VDS) using entropy, contrast, vessel visibility, and sharpness.",
                    "Apply Grad-CAM to visualize regions influencing the classification result.",
                  ],
                  output: "Predicted cataract severity, visibility degradation assessment, and supported visual explanation.",
                },
                {
                  title: "Diabetic Macular Edema (DME)",
                  modality: "Optical coherence tomography (OCT) images",
                  model: "EfficientNet-B0",
                  steps: [
                    "Prepare OCT images according to the model's input requirements.",
                    "Apply the trained classification model to the OCT image and generate its supported disease classification result.",
                    "Apply Grad-CAM to highlight regions influencing the prediction.",
                    "Present the model output and corresponding visualization.",
                  ],
                  output: "OCT-based classification and supported visual explanation.",
                },
              ].map((pipeline) => (
                <article key={pipeline.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-sky-200 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h4 className="text-lg font-bold text-slate-900">{pipeline.title}</h4>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">{pipeline.modality}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600"><span className="font-semibold text-slate-800">Model / method:</span> {pipeline.model}</p>
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                    {pipeline.steps.map((step) => <li key={step} className="pl-1">{step}</li>)}
                  </ol>
                  <p className="mt-4 rounded-xl bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">
                    <span className="font-semibold text-slate-900">Output: </span>{pipeline.output}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="model-development-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Data Preparation and Model Training</p>
              <h3 id="model-development-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Dataset Preparation and Model Development
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Data Organization", "Organize images and labels according to the relevant disease dataset and classification or segmentation task."],
                ["Preprocessing", "Apply the image dimensions, normalization, and preprocessing operations required by each model. Preprocessing may differ between disease modules."],
                ["Training and Validation", "Train or fine-tune each model using corresponding training data, and use validation data to monitor performance and guide model selection."],
                ["Performance Evaluation", "Evaluate using task-appropriate metrics. Classification may use accuracy, precision, recall, F1-score, and a confusion matrix; segmentation should use suitable metrics when available in the evaluation results."],
              ].map(([title, text], index) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-extrabold text-blue-700 shadow-sm" aria-hidden="true">{index + 1}</span>
                  <h4 className="text-base font-bold text-slate-900">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="explainability-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Explainability and Reliability</p>
              <h3 id="explainability-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Making Model Outputs More Interpretable
              </h3>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
                <h4 className="text-lg font-bold text-slate-900">Explainable AI — Grad-CAM</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Grad-CAM generates a heatmap that highlights image regions contributing to a model&apos;s prediction. In AI EyeDx, this visualization is used in relevant disease modules to provide additional context for interpreting classification results.
                </p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                  Grad-CAM indicates model-sensitive regions; it does not prove that the model identified the correct clinical features.
                </p>
              </article>
              <article className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6">
                <h4 className="text-lg font-bold text-slate-900">Out-of-Distribution Assessment</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  The diabetic retinopathy pipeline uses Mahalanobis-distance-based assessment to identify inputs that may differ from the model&apos;s learned training distribution. This can provide a reliability-related warning for potentially unfamiliar inputs.
                </p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                  This assessment does not guarantee that a prediction is correct or incorrect.
                </p>
              </article>
            </div>
          </section>

          <section aria-labelledby="vds-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Cataract Assessment</p>
              <h3 id="vds-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Visibility Degradation Score (VDS)
              </h3>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
                The cataract module includes a Visibility Degradation Score designed to summarize image characteristics relevant to retinal visibility. Its project-specific approach considers the following image features:
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Entropy", "Represents the distribution and complexity of image intensity information."],
                ["Contrast", "Represents differences in image intensity."],
                ["Vessel Visibility", "Represents the visibility of retinal vessels."],
                ["Sharpness", "Represents the clarity of image details."],
              ].map(([title, text], index) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 h-1.5 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">Feature {index + 1}</p>
                  <h4 className="mt-2 text-lg font-bold text-slate-900">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              These features contribute to the visibility assessment. VDS is a project-specific metric and should not be interpreted as an established or clinically validated measurement.
            </p>
          </section>

          <section aria-labelledby="integration-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Web-Based System Integration</p>
              <h3 id="integration-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                From Model Development to an Integrated Application
              </h3>
            </div>
            <div className="flex flex-col items-stretch gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
              {["React Frontend", "Disease-Specific Backend Service", "Selected AI Pipeline", "Assessment Results", "Frontend Visualization"].map((step, index) => (
                <div key={step} className="flex items-center gap-3 sm:min-w-0 sm:flex-1 sm:flex-col sm:text-center">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white">{index + 1}</span>
                  <span className="text-sm font-semibold text-slate-800">{step}</span>
                  {index < 4 && <span className="ml-auto text-blue-600 sm:hidden" aria-hidden="true">↓</span>}
                  {index < 4 && <span className="hidden text-blue-600 sm:block" aria-hidden="true">→</span>}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              The intended workflow is for a user to select a disease module, provide its corresponding image, and have the relevant service invoke that disease-specific pipeline. The application then returns supported predictions and assessment information for presentation alongside available visual explanations. This describes the integration workflow without introducing new services or routes.
            </p>
          </section>

          <section aria-labelledby="methodology-summary-heading" className="mt-14 rounded-3xl bg-slate-950 p-6 text-white shadow-lg sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Methodological Summary</p>
            <h3 id="methodology-summary-heading" className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              A Disease-Specific Approach Within One Framework
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
              The methodology combines four separate AI pipelines through a common web interface. Each pipeline uses its appropriate image modality and assessment technique, while Grad-CAM and the implemented reliability-related assessment provide additional information where supported.
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
              This modular design enables the project to investigate the integration of disease-specific predictions and assessment outputs without treating all eye disorders as an identical classification problem.
            </p>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm font-medium leading-relaxed text-sky-100">
              AI EyeDx is an academic research prototype for screening support. Its outputs require appropriate interpretation and do not replace professional ophthalmic examination or diagnosis.
            </p>
          </section>
        </div>
      </section>

      <section id="technologies" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="relative mb-12 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-sm sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">TECHNOLOGY STACK</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
                The Technologies Powering AI EyeDx
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-600 sm:text-lg">
                AI EyeDx combines deep learning, image analysis, explainable AI, and web development technologies to investigate multi-disease assessment of diabetes-related eye disorders. The stack supports disease-specific model development and presentation of assessment information through a unified web interface.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Deep learning", "Fundus + OCT", "Explainable AI", "Web platform"].map((item) => (
                  <span key={item} className="rounded-full border border-blue-100 bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <section aria-labelledby="technology-ecosystem-heading">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Technology Overview</p>
              <h3 id="technology-ecosystem-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Our Technology Ecosystem
              </h3>
            </div>
            <div className="space-y-8">
              {[
                {
                  group: "Deep Learning and AI",
                  items: [
                    ["PyTorch", "Deep learning framework", "Listed as the framework for the disease-specific model modules."],
                    ["EfficientNetV2-S", "DR architecture", "Used for the diabetic retinopathy severity classification module."],
                    ["EfficientNet-B3", "Cataract architecture", "Used for cataract severity classification."],
                    ["EfficientNet-B0", "Glaucoma and DME architecture", "Listed for glaucoma assessment alongside U-Net segmentation, and for OCT-based DME classification."],
                    ["U-Net", "Image segmentation architecture", "Used for optic-disc and optic-cup segmentation in the glaucoma module."],
                  ],
                },
                {
                  group: "Computer Vision and Image Processing",
                  items: [
                    ["Image Preprocessing", "Image preparation", "Prepares fundus and OCT images for their corresponding disease-specific model requirements."],
                    ["Grad-CAM", "Explainable AI", "Produces heatmaps that highlight image regions influencing supported model predictions."],
                    ["Lesion-Aware Analysis", "DR image analysis", "A separate diabetic retinopathy pipeline component for candidate-region lesion analysis."],
                    ["Mahalanobis Distance", "Reliability assessment", "Supports out-of-distribution assessment in the diabetic retinopathy pipeline."],
                    ["Visibility Degradation Score (VDS)", "Image-quality assessment", "Summarizes cataract-related visibility characteristics using entropy, contrast, vessel visibility, and sharpness."],
                  ],
                },
                {
                  group: "Web Application and API",
                  items: [
                    ["Next.js Route Handlers", "Application API layer", "Provide the website's existing API routes. They are distinct from the disease-specific model pipelines."],
                  ],
                },
                {
                  group: "Frontend Technologies",
                  items: [
                    ["React", "UI library", "Renders the interactive user interface for the website."],
                    ["Next.js", "React framework", "Provides the existing App Router application structure, pages, and route handlers."],
                    ["TypeScript", "Programming language", "Adds typed application code across the frontend and route handlers."],
                    ["Tailwind CSS", "Styling", "Provides utility classes for responsive layouts and visual presentation."],
                  ],
                },
                {
                  group: "Development and Version Control",
                  items: [
                    ["Git and GitHub", "Version control and collaboration", "The project is maintained in a Git repository hosted on GitHub."],
                  ],
                },
              ].map((category) => (
                <div key={category.group}>
                  <h4 className="mb-4 text-lg font-bold text-slate-900">{category.group}</h4>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {category.items.map(([name, type, role]) => (
                      <article key={name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-sky-200">
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-10 min-w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-2 text-xs font-extrabold text-white" aria-hidden="true">
                            {name === "PyTorch" ? "PT" : name === "React" ? "R" : name === "Next.js" ? "N" : name === "TypeScript" ? "TS" : name === "U-Net" ? "U" : name === "Git and GitHub" ? "Git" : "AI"}
                          </span>
                          <div>
                            <h5 className="font-bold text-slate-900">{name}</h5>
                            <p className="mt-0.5 text-xs font-semibold text-blue-700">{type}</p>
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{role}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="technology-mapping-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Disease-Specific Stack</p>
              <h3 id="technology-mapping-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Which Technologies Support Each Disease?
              </h3>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[820px] text-left text-sm">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-bold">Disease Module</th>
                    <th scope="col" className="px-5 py-4 font-bold">Input</th>
                    <th scope="col" className="px-5 py-4 font-bold">Main Model or Method</th>
                    <th scope="col" className="px-5 py-4 font-bold">Additional Techniques</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {[
                    ["Diabetic Retinopathy", "Fundus image", "EfficientNetV2-S", "Grad-CAM, lesion-aware analysis, and Mahalanobis-distance-based OOD assessment"],
                    ["Glaucoma", "Fundus image", "U-Net segmentation; EfficientNet-B0 is also listed in the project module overview", "Optic-disc/cup segmentation, cup-to-disc ratio extraction"],
                    ["Cataract", "Fundus image", "EfficientNet-B3", "Grad-CAM and Visibility Degradation Score"],
                    ["Diabetic Macular Edema", "OCT image", "EfficientNet-B0", "Grad-CAM"],
                  ].map(([disease, input, model, techniques]) => (
                    <tr key={disease} className="align-top">
                      <th scope="row" className="px-5 py-4 font-semibold text-slate-800">{disease}</th>
                      <td className="px-5 py-4">{input}</td>
                      <td className="px-5 py-4 leading-relaxed">{model}</td>
                      <td className="px-5 py-4 leading-relaxed">{techniques}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              The glaucoma module overview lists EfficientNet-B0 as its model while describing U-Net for optic-disc and optic-cup segmentation; these are presented as separate components.
            </p>
          </section>

          <section aria-labelledby="technology-architecture-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Technology Architecture</p>
              <h3 id="technology-architecture-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                How the Technologies Work Together
              </h3>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["User Interface", "React application structured with Next.js."],
                ["Website API Layer", "Existing Next.js route handlers support website APIs; disease-model inference services are not identified as these routes."],
                ["Disease-Specific AI Layer", "Separate module-specific architectures: DR, glaucoma, cataract, and DME use their respective models and analysis methods."],
                ["Explainability and Assessment", "Grad-CAM and relevant disease-specific outputs; Mahalanobis-distance-based OOD assessment is associated with the DR module."],
                ["Results Presentation", "The web application presents project module information and existing website outputs."],
              ].map(([title, detail], index) => (
                <li key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-extrabold text-blue-700">{index + 1}</span>
                    <h4 className="font-bold text-slate-900">{title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{detail}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="technology-benefits-heading" className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Technology Rationale</p>
              <h3 id="technology-benefits-heading" className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Designed for Modularity and Explainability
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Modular AI Development", "Independent disease-specific pipelines allow each condition to use an appropriate model and analysis method."],
                ["Multimodal Image Support", "The framework accommodates fundus imaging and OCT through their respective disease-specific modules."],
                ["Explainable Assessment", "Grad-CAM visualizations provide additional context about image regions influencing supported predictions."],
                ["Web-Based Integration", "The existing web application provides a common interface for accessing information about the individual disease modules."],
              ].map(([title, text], index) => (
                <article key={title} className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm">
                  <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-extrabold text-blue-700 shadow-sm" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h4 className="font-bold text-slate-900">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="technology-summary-heading" className="mt-14 rounded-3xl bg-slate-950 p-6 text-white shadow-lg sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Technology Summary</p>
            <h3 id="technology-summary-heading" className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              From Image Input to Interpretable Results
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
              The AI EyeDx technology stack combines deep learning architectures, image-analysis techniques, disease-specific assessment methods, and web development technologies. These components are described as supporting image analysis, model predictions, and presentation of relevant outputs through the research platform.
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
              The architecture emphasizes modularity: each disease pipeline maintains its own input requirements and assessment logic while contributing to the same research platform.
            </p>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm font-medium leading-relaxed text-sky-100">
              The technologies and model capabilities presented here describe the academic research implementation. Their outputs are intended for screening support and do not replace professional ophthalmic examination or diagnosis.
            </p>
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
