const team = [
  {
    name: "Binuri Perera",
    id: "IT22151292",
    role: "Explainable Cataract Severity & Visibility Degradation Assessment",
    initials: "BP",
    disease: "Cataract Module",
    email: "[ADD EMAIL]",
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
    name: "Sanduni D. Kahawevithana",
    id: "IT22191342",
    role: "Diabetic Macular Edema Detection, Severity & Risk Assessment",
    initials: "SK",
    disease: "DME Module",
    email: "[ADD EMAIL]",
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
    disease: "Glaucoma Module",
    email: "[ADD EMAIL]",
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
      "CDR-based assessment (96.05% validation accuracy)",
      "U-Net optic disc/cup segmentation",
      "Explainable glaucoma risk assessment",
    ],
  },
  {
    name: "Oshan Wijekoon",
    id: "[Confirm ID]",
    role: "Diabetic Retinopathy Detection & Severity Assessment + System Integration",
    initials: "OW",
    disease: "DR Module + Integration",
    email: "[ADD EMAIL]",
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
  { name: "Dr. Sanvitha Kasthuriarachchi", role: "Research Supervisor", initials: "SK", dept: "SLIIT" },
  { name: "Ms. Chathurya Prabhavi Kumarapperuma", role: "Co-Supervisor", initials: "CP", dept: "SLIIT" },
  { name: "Dr. Sarath Deraniyagala", role: "External / Domain Supervisor", initials: "SD", dept: "External" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-200 bg-white/10 px-3 py-1 rounded-full mb-4">Research Team</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Group R26-IT-043 — B.Sc. (Hons) in Information Technology, Department of Information Technology, SLIIT.
          </p>
        </div>
      </section>

      {/* Institution */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-blue-50 border border-blue-100">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
            >
              S
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900 text-sm">Sri Lanka Institute of Information Technology (SLIIT)</div>
              <div className="text-xs text-gray-600">Department of Information Technology · Group R26-IT-043</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Team Members</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Research Team</h2>
          </div>

          <div className="space-y-8">
            {team.map((member, i) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="h-2"
                  style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                />
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Profile */}
                    <div className="flex flex-col items-center text-center lg:w-56 flex-shrink-0">
                      <div
                        className="w-24 h-24 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mb-4 shadow-lg"
                        style={{ background: `linear-gradient(135deg, #${["1e3a8a", "1d4ed8", "2563eb", "1e40af"][i]}, #3b82f6)` }}
                      >
                        {member.initials}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
                      <p className="text-xs text-gray-500 mb-2">{member.id}</p>
                      <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-3">
                        {member.disease}
                      </span>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>

                    {/* Right: Details */}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-blue-700 mb-4 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100">
                        {member.role}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Responsibilities</h4>
                          <ul className="space-y-1.5">
                            {member.responsibilities.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-xs text-gray-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Contributions */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Key Contributions</h4>
                          <ul className="space-y-1.5">
                            {member.contributions.map((c) => (
                              <li key={c} className="flex items-start gap-2 text-xs text-gray-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Technical Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((s) => (
                              <span
                                key={s}
                                className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Role Summary Table */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Team Role Summary</h2>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
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
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
                          style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                        >
                          {m.initials}
                        </div>
                        <span className="font-medium text-gray-900">{m.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">{m.id}</td>
                    <td className="px-6 py-4 text-gray-600">{m.disease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Supervisors */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Supervision</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Academic Supervisors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supervisors.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl"
                  style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                >
                  {s.initials}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{s.name}</h3>
                <p className="text-xs text-blue-600 font-medium mb-2">{s.role}</p>
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{s.dept}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Note */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Research Ethics
            </h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              This project uses publicly available and anonymized medical imaging datasets for research and educational purposes. 
              The system is intended as a research and screening-support prototype and is not a replacement for professional medical diagnosis. 
              All research activities are conducted in accordance with SLIIT academic guidelines and research ethics standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
