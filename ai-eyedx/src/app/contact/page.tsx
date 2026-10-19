"use client";

import { useState, type FormEvent } from "react";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const result = (await response.json()) as { error?: string };
        setErrorMessage(result.error || "Something went wrong. Please try again later.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Unable to reach the server. Please try again later.");
      setStatus("error");
    }
  };

  const fieldClassName =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100";

  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.25),_transparent_28%),linear-gradient(135deg,#020817_0%,#0f172a_20%,#172554_48%,#1d4ed8_78%,#2563eb_100%)] text-white">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl" />
        <div className="absolute -bottom-36 left-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.26em] text-blue-100 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
              Academic enquiries
            </span>
            <h1 className="mt-7 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-7xl">
              Let&apos;s connect
              <span className="mt-2 block bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-400 bg-clip-text text-transparent">
                around research.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/90">
              Have a question about AI EyeDx, our research methodology, or a potential academic collaboration? Send the team a message.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-blue-100/70">
              This channel is for academic and research enquiries only. It cannot provide medical advice, diagnosis, or interpretation of personal health information.
            </p>
          </div>

          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              { value: "01", label: "Research enquiries" },
              { value: "02", label: "Academic collaboration" },
              { value: "03", label: "Technical discussion" },
            ].map((item) => (
              <div key={item.value} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-md">
                <div className="text-xs font-bold tracking-[0.2em] text-cyan-200">{item.value}</div>
                <div className="mt-2 text-sm font-semibold text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <aside className="space-y-5">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.07)]">
              <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800 p-7 text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-2xl shadow-lg backdrop-blur-sm">
                  👁️
                </div>
                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-blue-200">Research group</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight">AI EyeDx</h2>
                <p className="mt-1 text-sm text-blue-100/80">R26-IT-043 · SLIIT Research Project</p>
              </div>

              <div className="space-y-5 p-7">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">⌂</span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Institution</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">Sri Lanka Institute of Information Technology (SLIIT)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">▤</span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Department</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">Department of Information Technology</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">✉</span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">How to reach us</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">Send your enquiry using the secure contact form.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-800">What we can discuss</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "AI and deep learning research",
                  "Academic collaboration enquiries",
                  "Ophthalmology domain and methodology",
                  "Technical approaches and future extensions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/80 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-900">Please note</p>
              <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
                Do not submit personal medical records or request clinical advice through this research contact form.
              </p>
            </div>
          </aside>

          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.07)] sm:p-9">
            <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-700">Contact the team</p>
                <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-900 sm:text-3xl">Send a message</h2>
                <p className="mt-2 text-sm text-slate-500">Fields marked with * are required.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-right">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Project</p>
                <p className="mt-1 text-sm font-bold text-slate-700">AI EyeDx</p>
              </div>
            </div>

            {status === "success" && (
              <div role="status" className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">✓</span>
                <div>
                  <p className="text-sm font-bold text-emerald-900">Message received</p>
                  <p className="mt-1 text-sm text-emerald-800">Thank you for your enquiry. The team will respond as soon as possible.</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div role="alert" className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-700">Full name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    placeholder="Your full name"
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-700">Email address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    placeholder="you@example.com"
                    className={fieldClassName}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-700">Subject *</label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  maxLength={160}
                  value={form.subject}
                  onChange={(event) => setForm({ ...form, subject: event.target.value })}
                  placeholder="Research enquiry, collaboration, or question"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-700">Message *</label>
                <textarea
                  id="contact-message"
                  required
                  maxLength={5000}
                  rows={7}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  placeholder="Tell us a little about your enquiry..."
                  className={`${fieldClassName} resize-y`}
                />
                <p className="mt-2 text-right text-xs text-slate-400">{form.message.length}/5000</p>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-5 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(37,99,235,0.32)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending message...
                  </>
                ) : (
                  <>
                    Send message
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
              <p className="text-center text-xs leading-relaxed text-slate-400">
                Your details will only be used to respond to this research enquiry.
              </p>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
