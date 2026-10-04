import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      {/* Disclaimer Banner */}
      <div style={{ background: "linear-gradient(135deg, #1e3a8a, #1d4ed8)" }} className="py-4 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-blue-100 leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold text-white">⚠️ Research Prototype Disclaimer:</span> This system is developed
            as an academic research and screening-support prototype. AI-generated results are not a medical diagnosis and
            must not replace examination, diagnosis or treatment by a qualified ophthalmologist or other healthcare
            professional.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900">AI EyeDx</div>
                <div className="text-xs text-gray-500">Group R26-IT-043</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm mb-4">
              An Explainable Deep Learning Framework for Multi-Disease Diagnosis and Disease-Specific Assessment of
              Diabetes-Related Eye Disorders.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Diabetic Retinopathy", "Glaucoma", "Cataract", "DME"].map((d) => (
                <span
                  key={d}
                  className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/domain", label: "Domain" },
                { href: "/milestones", label: "Milestones" },
                { href: "/research-modules", label: "Research Modules" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Research</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/documents", label: "Documents" },
                { href: "/presentations", label: "Presentations" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-xs text-blue-700 font-medium">Group Email</p>
                  <p className="text-xs text-gray-600 mt-0.5">Use the contact form</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xs text-gray-500 text-center sm:text-left">
            <p className="font-medium text-gray-700">
              AI-Driven Multi-Disease Diagnosis of Diabetes-Related Eye Disorders
            </p>
            <p className="mt-0.5">
              Group R26-IT-043 · B.Sc. (Hons) in Information Technology · SLIIT ·{" "}
              <span className="text-blue-600">Department of Information Technology</span>
            </p>
          </div>
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} AI EyeDx Research Group
          </div>
        </div>
      </div>
    </footer>
  );
}
