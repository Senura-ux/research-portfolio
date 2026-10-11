import Image from "next/image";

const team = [
  {
    name: "Binuri Perera",
    id: "IT22151292",
    role: "Explainable Cataract Severity & Visibility Degradation Assessment",
    initials: "BP",
    photo: "/team/portraits/member-perera.png",
    disease: "Cataract Module",
    email: null,
    responsibilities: [
      "Cataract dataset preparation",
      "Fundus image preprocessing",
      "Cataract severity model development",
      "Visibility degradation assessment",
      "VDS formula development",
      "Grad-CAM explainability",
      "Cataract API/model integration",
      "Research documentation — cataract component",
    ],
    skills: ["EfficientNet-B3", "Grad-CAM", "OpenCV", "Python", "PyTorch", "VDS"],
    contributions: [
      "Cataract severity classification (No/Mild/Moderate/Severe)",
      "Visibility-aware retinal image analysis",
      "Explainable cataract prediction",
      "Integration with the overall framework",
    ],
  },
  {
    name: "S.D Kahawevithana",
    id: "IT22191342",
    role: "Diabetic Macular Edema Detection, Severity & Risk Assessment",
    initials: "SK",
    photo: "/team/member-kahawevithana-new.png",
    disease: "DME Module",
    email: null,
    responsibilities: [
      "OCT dataset preparation",
      "OCT image preprocessing",
      "EfficientNet-B0 DME model training",
      "DME classification (CNV/DME/DRUSEN/NORMAL)",
      "Severity assessment (Low/Medium/High)",
      "Risk-level prediction",
      "Grad-CAM explainability for OCT",
      "DME API/model integration",
    ],
    skills: ["EfficientNet-B0", "PyTorch", "OCT Analysis", "Grad-CAM", "Python", "Flask"],
    contributions: [
      "OCT-based DME analysis",
      "EfficientNet-B0 model (92.67% validation accuracy)",
      "DME severity and risk output",
      "Explainable OCT prediction",
    ],
  },
  {
    name: "Chavindee M.A.P.",
    id: "IT22127778",
    role: "Explainable Glaucoma Detection & Risk Assessment",
    initials: "CM",
    photo: "/team/portraits/member-chavindee.png",
    disease: "Glaucoma Module",
    email: null,
    responsibilities: [
      "Glaucoma dataset preparation",
      "Fundus image preprocessing",
      "Optic disc segmentation",
      "Optic cup segmentation",
      "U-Net implementation",
      "CDR calculation",
      "Glaucoma severity classification",
      "Risk/confidence estimation",
      "Explainable segmentation visualization",
      "Glaucoma API/model integration",
    ],
    skills: ["U-Net", "Segmentation", "CDR", "OpenCV", "Python", "PyTorch"],
    contributions: [
      "Structural glaucoma analysis",
      "CDR-based assessment (95.48% validation accuracy)",
      "U-Net optic disc/cup segmentation",
      "Explainable glaucoma risk assessment",
    ],
  },
  {
    name: "Oshan Wijekoon",
    id: "IT22265388",
    role: "Diabetic Retinopathy Detection & Severity Assessment + System Integration",
    initials: "OW",
    photo: "/team/portraits/member-wijekoon.png",
    disease: "DR Module + Integration",
    email: null,
    responsibilities: [
      "DR dataset preparation",
      "Fundus image preprocessing",
      "DR model development",
      "EfficientNetV2-S implementation",
      "DR severity classification",
      "Model evaluation",
      "Grad-CAM integration",
      "DR API/model integration",
      "Integration of all disease-specific modules",
      "Overall system coordination and testing",
    ],
    skills: ["EfficientNetV2-S", "System Integration", "Flask", "React.js", "Python", "MongoDB"],
    contributions: [
      "DR classification and severity (92.13% validation accuracy)",
      "EfficientNetV2-S model",
      "Explainable DR analysis",
      "Multi-module system integration",
    ],
  },
];

const supervisors = [
  { name: "Dr. Sanvitha Kasthuriarachchi", role: "Research Supervisor", initials: "SK", dept: "SLIIT", photo: "/team/supervisor-sanvitha.png" },
  { name: "Ms. Chathurya Prabhavi Kumarapperuma", role: "Co-Supervisor", initials: "CP", dept: "SLIIT", photo: "/team/supervisor-chathurya.png" },
  { name: "Dr. Sarath Deraniyagala", role: "External / Domain Supervisor", initials: "SD", dept: "External", photo: "/team/supervisor-sarath.png" },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Header */}
      <section className="about-hero relative isolate overflow-hidden text-white">
        <div className="about-hero-grid" />
        <div className="about-hero-orb about-hero-orb-one" />
        <div className="about-hero-orb about-hero-orb-two" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-teal-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_16px_rgba(94,234,212,0.9)]" />
              The people behind the research
            </span>
            <h1 className="mt-7 text-5xl font-black tracking-[-0.07em] sm:text-6xl lg:text-7xl">
              Research built
              <span className="block bg-gradient-to-r from-teal-200 via-cyan-100 to-violet-200 bg-clip-text text-transparent">together.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100/90 sm:text-lg">
              Meet the multidisciplinary team advancing explainable AI for diabetes-related eye disease screening.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["4 student researchers", "3 academic supervisors", "1 integrated research project"].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-blue-50 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institution */}
      <section className="about-institution">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <div className="about-institution-card">
            <div
              className="about-institution-mark"
            >
              SLIIT
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">Sri Lanka Institute of Information Technology</div>
              <div className="mt-1 text-xs text-slate-500">Department of Information Technology · Group R26-IT-043</div>
            </div>
            <span className="about-program-tag">B.Sc. (Hons) Information Technology</span>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="about-team-section py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="about-section-kicker">Student researchers</span>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">A team with a shared vision</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">Each researcher leads a disease-focused module while contributing to the integrated AI EyeDx platform.</p>
            </div>
            <span className="about-team-count"><strong>04</strong><span>Research members</span></span>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {team.map((member, i) => (
              <article
                key={member.id}
                className="about-member-card"
              >
                <div className={`about-member-cover about-member-cover-${i + 1}`}>
                  <div className="about-member-portrait">
                    <Image
                      src={member.photo}
                      alt={`${member.name} profile portrait`}
                      fill
                      sizes="(max-width: 1279px) 112px, 120px"
                      quality={95}
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="about-member-number">RESEARCHER · 0{i + 1}</span>
                    <h3 className="mt-2 text-xl font-black tracking-[-0.035em] text-white sm:text-2xl">{member.name}</h3>
                    <p className="mt-1 text-xs text-blue-100/75">{member.id}</p>
                    <span className="about-member-disease">{member.disease}</span>
                  </div>
                </div>

                <div className="about-member-body">
                  <p className="about-member-role">{member.role}</p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="about-detail-heading"><span>01</span> Responsibilities</h4>
                      <ul className="about-detail-list">
                        {member.responsibilities.map((r) => (
                          <li key={r}><span className="about-list-dot" />{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="about-detail-heading"><span>02</span> Key contributions</h4>
                      <ul className="about-detail-list">
                        {member.contributions.map((c) => (
                          <li key={c}><span className="about-list-dot about-list-dot-teal" />{c}</li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <h4 className="about-detail-heading"><span>03</span> Technical skills</h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {member.skills.map((s) => (
                            <span key={s} className="about-skill-pill">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Role Summary Table */}
      <section className="about-summary-section py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="about-section-kicker">How we work</span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-950">Team role summary</h2>
          </div>
          <div className="about-summary-table-wrap">
            <table className="about-summary-table">
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}>
                  <th className="text-left px-6 py-4 text-white font-semibold">Member</th>
                  <th className="text-center px-6 py-4 text-white font-semibold">Student ID</th>
                  <th className="text-left px-6 py-4 text-white font-semibold">Main Research Function</th>
                </tr>
              </thead>
              <tbody>
                {team.map((m, i) => (
                  <tr key={m.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="about-summary-portrait">
                          <Image src={m.photo} alt="" fill sizes="36px" quality={90} className="object-cover" />
                        </div>
                        <span className="font-bold text-slate-900">{m.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600">{m.id}</td>
                    <td className="px-6 py-4 text-slate-600">{m.disease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Supervisors */}
      <section className="about-supervision-section py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="about-section-kicker">Guidance &amp; mentorship</span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">Academic supervisors</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">The project is supported by academic and domain expertise throughout its research and development.</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {supervisors.map((s) => (
              <article
                key={s.name}
                className="about-supervisor-card"
              >
                <div className="about-supervisor-portrait">
                  <Image src={s.photo} alt={`${s.name} profile portrait`} fill sizes="88px" quality={95} className="object-cover" />
                </div>
                <span className="about-supervisor-label">{s.role}</span>
                <h3 className="mt-3 text-base font-extrabold leading-snug text-slate-900">{s.name}</h3>
                <p className="mt-2 text-xs font-semibold text-slate-500">{s.dept} · AI EyeDx research project</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Note */}
      <section className="about-ethics-section py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="about-ethics-card">
            <div className="about-ethics-icon">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="about-section-kicker">Responsible research</span>
              <h2 className="mt-2 text-xl font-black tracking-tight text-slate-950">Research ethics &amp; intended use</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
              This project uses publicly available and anonymized medical imaging datasets for research and educational purposes.
              The system is intended as a research and screening-support prototype and is not a replacement for professional medical diagnosis.
              All research activities are conducted in accordance with SLIIT academic guidelines and research ethics standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
