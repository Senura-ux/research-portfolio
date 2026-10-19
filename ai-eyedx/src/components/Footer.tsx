import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer text-slate-200">
      <div className="site-footer-disclaimer px-4 py-2.5">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mx-auto max-w-5xl text-[10px] leading-snug text-blue-100">
            <span className="font-semibold text-white">⚠️ Research Prototype Disclaimer:</span> This system is developed
            as an academic research and screening-support prototype. AI-generated results are not a medical diagnosis and
            must not replace examination, diagnosis or treatment by a qualified ophthalmologist or other healthcare
            professional.
          </p>
        </div>
      </div>

      <div className="site-footer-content relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-5 grid grid-cols-2 gap-x-5 gap-y-4 lg:grid-cols-4 lg:gap-8">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-2.5 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_8px_20px_rgba(59,130,246,0.25)]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white">AI EyeDx</div>
                <div className="text-xs text-slate-400">Group R26-IT-043</div>
              </div>
            </div>
            <p className="mb-2.5 max-w-lg text-xs leading-relaxed text-slate-300">
              An Explainable Deep Learning Framework for Multi-Disease Diagnosis and Disease-Specific Assessment of
              Diabetes-Related Eye Disorders.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Diabetic Retinopathy", "Glaucoma", "Cataract", "DME"].map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-blue-400/20 bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-100"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1 sm:grid-cols-1">
              {[
                { href: "/", label: "Home" },
                { href: "/domain", label: "Domain" },
                { href: "/milestones", label: "Milestones" },
                { href: "/research-modules", label: "Research Modules" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-slate-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white">Research</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1 sm:grid-cols-1">
              {[
                { href: "/documents", label: "Documents" },
                { href: "/presentations", label: "Presentations" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-slate-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="col-span-2">
                <div className="mt-2 rounded-lg border border-blue-400/20 bg-blue-500/10 px-2.5 py-1.5">
                  <p className="text-xs font-medium text-blue-100">Group Email</p>
                  <p className="mt-0.5 text-xs text-slate-300">Use the contact form</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-4 sm:flex-row">
          <div className="text-center text-[10px] text-slate-400 sm:text-left">
            <p className="font-medium text-slate-200">
              AI-Driven Multi-Disease Diagnosis of Diabetes-Related Eye Disorders
            </p>
            <p className="mt-0.5">
              Group R26-IT-043 · B.Sc. (Hons) in Information Technology · SLIIT ·{" "}
              <span className="text-blue-300">Department of Information Technology</span>
            </p>
          </div>
          <div className="text-[10px] text-slate-500">© {new Date().getFullYear()} AI EyeDx Research Group</div>
        </div>
      </div>
    </footer>
  );
}
