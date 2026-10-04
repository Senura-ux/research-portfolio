"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const stats = [
  { value: "4", label: "Disease Modules" },
  { value: "2", label: "Imaging Modalities" },
  { value: "4", label: "Dedicated AI Functions" },
  { value: "1", label: "Integrated Framework" },
  { value: "XAI", label: "Explainability Layer" },
  { value: "R26", label: "Group ID" },
];

const highlights = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    num: "01",
    title: "Multi-Disease Diagnosis",
    desc: "Integrated analysis of Diabetic Retinopathy, Glaucoma, Cataract, and Diabetic Macular Edema in a single unified platform.",
    tags: ["DR", "Glaucoma", "Cataract", "DME"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    num: "02",
    title: "Multi-Modal Imaging",
    desc: "Analyzes both Retinal Fundus photographs and Optical Coherence Tomography (OCT) scans for comprehensive coverage.",
    tags: ["Fundus", "OCT"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    num: "03",
    title: "Explainable AI",
    desc: "Grad-CAM heatmaps, segmentation overlays, and clinically meaningful visual indicators provide transparent AI reasoning.",
    tags: ["Grad-CAM", "Segmentation", "XAI"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    num: "04",
    title: "Risk & Severity Assessment",
    desc: "Disease classification, severity prediction, confidence scores, and cataract visibility degradation analysis.",
    tags: ["Severity", "Risk Score", "VDS"],
  },
];

const diseases = [
  {
    id: "dr",
    name: "Diabetic Retinopathy",
    model: "EfficientNetV2-S",
    accuracy: "92.13%",
    modality: "Fundus",
    color: "#3b82f6",
    bgColor: "#eff6ff",
    desc: "Detects and classifies DR severity from retinal fundus images. Identifies microaneurysms, hemorrhages, exudates, and other retinal lesions.",
    icon: "🔴",
  },
  {
    id: "glaucoma",
    name: "Glaucoma",
    model: "U-Net + Assessment",
    accuracy: "96.05%",
    modality: "Fundus",
    color: "#1d4ed8",
    bgColor: "#eff6ff",
    desc: "Optic disc/cup segmentation with Cup-to-Disc Ratio (CDR) calculation, structural biomarker extraction and risk assessment.",
    icon: "🟡",
  },
  {
    id: "cataract",
    name: "Cataract",
    model: "EfficientNet-B3",
    accuracy: "88.19%",
    modality: "Fundus",
    color: "#2563eb",
    bgColor: "#eff6ff",
    desc: "Severity classification (No/Mild/Moderate/Severe) plus Visibility Degradation Score (VDS) measuring how opacity affects retinal visibility.",
    icon: "🟠",
  },
  {
    id: "dme",
    name: "Diabetic Macular Edema",
    model: "EfficientNet-B0",
    accuracy: "92.67%",
    modality: "OCT",
    color: "#1e40af",
    bgColor: "#eff6ff",
    desc: "OCT-based DME detection, severity classification (Low/Medium/High risk), and Grad-CAM visualization of influential retinal regions.",
    icon: "🟢",
  },
];

const steps = [
  { step: "01", title: "Select & Upload", desc: "Choose disease type and upload a retinal fundus or OCT image." },
  { step: "02", title: "Validation", desc: "Image is validated for format, quality, and expected modality." },
  { step: "03", title: "Preprocessing", desc: "Resizing, normalization, contrast enhancement, and noise reduction." },
  { step: "04", title: "AI Prediction", desc: "Disease-specific deep learning model generates predictions." },
  { step: "05", title: "Assessment", desc: "Severity, risk, confidence, CDR, or VDS computed per disease." },
  { step: "06", title: "Explainability", desc: "Grad-CAM heatmaps or segmentation overlays generated." },
  { step: "07", title: "Results Dashboard", desc: "Interpretable diagnostic-support results displayed to the user." },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("in-view"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal();
  return <div ref={ref} className={`section-animate ${className}`}>{children}</div>;
}

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #1d4ed8 70%, #3b82f6 100%)",
          minHeight: "92vh",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute rounded-full opacity-10"
            style={{ width: 600, height: 600, top: -150, right: -150, border: "1px solid #60a5fa" }}
          />
          <div
            className="absolute rounded-full opacity-10"
            style={{ width: 400, height: 400, bottom: -100, left: -100, border: "1px solid #93c5fd" }}
          />
          <div
            className="absolute rounded-full opacity-5"
            style={{ width: 800, height: 800, top: "50%", left: "50%", transform: "translate(-50%,-50%)", border: "1px solid #bfdbfe" }}
          />
          {/* Retinal vessel lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <path d="M600,400 C500,300 400,250 300,200 C200,150 100,180 50,220" stroke="#93c5fd" strokeWidth="1" fill="none" />
            <path d="M600,400 C650,350 700,280 780,220 C850,160 950,170 1050,200" stroke="#93c5fd" strokeWidth="1" fill="none" />
            <path d="M600,400 C580,480 560,550 520,620 C480,690 420,730 350,760" stroke="#60a5fa" strokeWidth="0.8" fill="none" />
            <path d="M600,400 C620,470 660,540 700,610 C740,680 810,710 880,740" stroke="#60a5fa" strokeWidth="0.8" fill="none" />
            <path d="M600,400 C500,420 430,400 370,380" stroke="#93c5fd" strokeWidth="0.6" fill="none" />
            <path d="M600,400 C700,380 750,350 800,360" stroke="#93c5fd" strokeWidth="0.6" fill="none" />
            <circle cx="600" cy="400" r="40" stroke="#60a5fa" strokeWidth="1" fill="none" opacity="0.6" />
            <circle cx="600" cy="400" r="80" stroke="#93c5fd" strokeWidth="0.5" fill="none" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center text-center" style={{ minHeight: "92vh" }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse-slow" />
            <span className="text-sm text-blue-200 font-medium">Group R26-IT-043 · SLIIT Research Project</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fadeInUp"
            style={{ maxWidth: 900, letterSpacing: "-0.02em" }}
          >
            AI-Driven Multi-Disease Diagnosis of
            <span className="block" style={{ color: "#93c5fd" }}>
              Diabetes-Related Eye Disorders
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed animate-fadeInUp delay-200">
            An explainable AI framework for early screening and disease-specific assessment using retinal fundus and OCT images.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp delay-300">
            <Link
              href="/domain"
              className="px-7 py-3.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg hover:scale-105"
              style={{ background: "white", color: "#1e3a8a" }}
            >
              Explore Research
            </Link>
            <Link
              href="/research-modules"
              className="px-7 py-3.5 rounded-lg font-semibold text-sm border border-blue-300/40 text-white hover:bg-white/10 transition-all"
            >
              View Research Modules
            </Link>
            <Link
              href="/about"
              className="px-7 py-3.5 rounded-lg font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              Meet the Team
            </Link>
          </div>

          {/* Stat badges */}
          <div className="mt-16 grid grid-cols-3 sm:grid-cols-6 gap-4 animate-fadeInUp delay-500">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-3 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-blue-200 mt-0.5 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── Intro ── */}
      <RevealSection>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              Diabetes-related eye diseases are a major cause of preventable visual impairment and blindness. Diabetic
              Retinopathy, Diabetic Macular Edema, glaucoma and cataract may occur together, making comprehensive
              screening challenging. Our research proposes an integrated AI-driven platform that combines
              disease-specific deep learning models with explainable AI, severity/risk assessment and image-quality
              analysis — designed to support ophthalmologists and healthcare professionals by providing interpretable
              screening information from retinal images.
            </p>
          </div>
        </section>
      </RevealSection>

      {/* ── Highlights ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Core Contributions</span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">Key Research Highlights</h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <RevealSection key={h.num}>
                <div
                  className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                      {h.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-blue-400 mb-1">{h.num}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{h.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{h.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {h.tags.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disease Modules ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RevealSection>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">AI Modules</span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">Four Disease-Specific AI Modules</h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm">
                Each module uses a dedicated deep learning model trained for disease-specific diagnosis and assessment.
                Values shown are project-reported experimental validation results.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {diseases.map((d, i) => (
              <RevealSection key={d.id}>
                <div
                  className="group bg-white rounded-2xl border border-gray-200 p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{d.icon}</span>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: "#eff6ff", color: "#1d4ed8" }}
                    >
                      {d.accuracy}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-base">{d.name}</h3>
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{d.modality}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">{d.model}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{d.desc}</p>

                  {/* Accuracy bar */}
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Validation Accuracy</span>
                      <span className="font-semibold text-blue-600">{d.accuracy}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: d.accuracy,
                          background: "linear-gradient(90deg, #3b82f6, #1e40af)",
                          transition: "width 1.5s ease-out",
                        }}
                      />
                    </div>
                  </div>

                  <Link
                    href="/research-modules"
                    className="mt-4 text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #f0f7ff, #e8f4fd)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <RevealSection>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-white px-3 py-1 rounded-full border border-blue-100">Workflow</span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">How the System Works</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {steps.slice(0, 4).map((s) => (
              <RevealSection key={s.step}>
                <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm text-white mb-4"
                    style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                  >
                    {s.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">{s.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {steps.slice(4).map((s) => (
              <RevealSection key={s.step}>
                <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm text-white mb-4"
                    style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                  >
                    {s.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">{s.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── System Architecture ── */}
      <RevealSection>
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Architecture</span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">System Architecture</h2>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <div className="flex flex-col items-center gap-0">
                {[
                  { label: "User / Healthcare Professional", icon: "👩‍⚕️", color: "#e0f2fe" },
                  { label: "React Web Interface", icon: "💻", color: "#dbeafe" },
                  { label: "Image Upload & Validation", icon: "📤", color: "#dbeafe" },
                  { label: "Preprocessing Layer", icon: "⚙️", color: "#bfdbfe" },
                  { label: "Disease Routing / Disease-Specific APIs", icon: "🔀", color: "#bfdbfe" },
                  { label: "AI Model Layer (EfficientNet / U-Net)", icon: "🤖", color: "#93c5fd" },
                  { label: "Assessment Layer (Severity / Risk / CDR / VDS)", icon: "📊", color: "#93c5fd" },
                  { label: "Explainability Layer (Grad-CAM / Segmentation)", icon: "🔍", color: "#60a5fa" },
                  { label: "Result Fusion / Report Layer", icon: "📋", color: "#3b82f6" },
                  { label: "Clinical Decision-Support Dashboard", icon: "🏥", color: "#2563eb" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center w-full max-w-md">
                    <div
                      className="w-full px-5 py-3 rounded-xl text-center text-sm font-medium text-gray-800 border border-blue-100 shadow-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </div>
                    {i < 9 && (
                      <div className="flex flex-col items-center my-1">
                        <div className="w-0.5 h-4 bg-blue-300" />
                        <div
                          className="w-0 h-0"
                          style={{
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "6px solid #93c5fd",
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── Explainable AI ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-white px-3 py-1 rounded-full border border-blue-100">XAI</span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">Explainable AI</h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm">
                Medical AI systems should not simply output a label. Healthcare professionals need to understand which
                image regions contributed to a prediction.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Grad-CAM Heatmaps",
                desc: "Gradient-weighted Class Activation Mapping generates visual heatmaps highlighting retinal regions that most influenced the model's disease prediction.",
                items: ["Original image", "Heatmap overlay", "Prediction confidence", "Region interpretation"],
              },
              {
                title: "Glaucoma Segmentation",
                desc: "U-Net model segments the optic disc and optic cup, enabling automatic CDR calculation and structural biomarker visualization.",
                items: ["Optic disc mask", "Optic cup mask", "CDR measurement", "Neuroretinal rim analysis"],
              },
              {
                title: "Cataract VDS",
                desc: "A weighted combination of image-quality features quantifies how lens opacity degrades the visibility of critical retinal structures.",
                items: ["Entropy weight: 0.4426", "Contrast: 0.2955", "Vessel visibility: 0.2287", "Sharpness: 0.0332"],
              },
            ].map((card) => (
              <RevealSection key={card.title}>
                <div className="bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-lg transition-shadow h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-xl"
                    style={{ background: "#eff6ff" }}
                  >
                    🔬
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{card.desc}</p>
                  <ul className="space-y-1.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Preview ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Team</span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">Our Research Team</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { name: "Binuri Perera", id: "IT22151292", role: "Cataract & Visibility Degradation", initials: "BP", disease: "Cataract" },
              { name: "Sanduni D. Kahawevithana", id: "IT22191342", role: "DME Detection & Risk Assessment", initials: "SK", disease: "DME" },
              { name: "Chavindee M.A.P.", id: "IT22127778", role: "Glaucoma Detection & Risk", initials: "CM", disease: "Glaucoma" },
              { name: "Oshan Wijekoon", id: "[Confirm]", role: "DR Detection & System Integration", initials: "OW", disease: "DR" },
            ].map((member) => (
              <RevealSection key={member.id}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all text-center">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl"
                    style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                  >
                    {member.initials}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{member.name}</h4>
                  <p className="text-xs text-gray-500 mb-2">{member.id}</p>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {member.disease}
                  </span>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">{member.role}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
            >
              Meet the Full Team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <RevealSection>
        <section
          className="py-16"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)" }}
        >
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Research Materials</h2>
            <p className="text-blue-200 mb-8 text-sm">Access project documents, presentations, and research modules.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: "/documents", label: "📄 Project Documents" },
                { href: "/presentations", label: "📽️ Presentations" },
                { href: "/research-modules", label: "🔬 Research Modules" },
                { href: "/milestones", label: "🏁 Milestones" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
