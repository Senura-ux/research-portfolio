"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const result = (await res.json()) as { error?: string };
        setErrorMessage(result.error || "Something went wrong. Please try again later.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Unable to reach the server. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Header */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-200 bg-white/10 px-3 py-1 rounded-full mb-4">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Academic enquiries about the AI EyeDx research project are welcome. This form is for research purposes only and cannot provide medical advice.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Project Info */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold mb-4"
                  style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                >
                  👁️
                </div>
                <h3 className="font-bold text-gray-900 mb-1">AI EyeDx Research</h3>
                <p className="text-xs text-gray-500 mb-4">Group R26-IT-043 · SLIIT Research Project</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium text-gray-700">Institution</p>
                      <p className="text-xs text-gray-500">Sri Lanka Institute of Information Technology (SLIIT)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium text-gray-700">Department</p>
                      <p className="text-xs text-gray-500">Department of Information Technology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium text-gray-700">Group Email</p>
                      <p className="text-xs text-gray-500">Use the contact form</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Scope */}
              <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
                <h4 className="font-semibold text-blue-900 text-sm mb-3">Research Scope</h4>
                <ul className="space-y-2">
                  {[
                    "AI & deep learning research discussions",
                    "Academic collaboration enquiries",
                    "Ophthalmology domain questions",
                    "Technical methodology discussions",
                    "Potential research extensions",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-blue-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not For */}
              <div className="bg-amber-50 rounded-2xl border border-amber-100 p-5">
                <h4 className="font-semibold text-amber-900 text-sm mb-2 flex items-center gap-2">
                  ⚠️ Please Note
                </h4>
                <p className="text-xs text-amber-800 leading-relaxed">
                  This contact form is for academic and research enquiries only. We cannot provide medical advice, diagnosis, or clinical interpretations of personal health conditions.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>

                {status === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-green-800 text-sm">Message received!</p>
                      <p className="text-xs text-green-700 mt-0.5">Thank you for your enquiry. The team will respond as soon as possible.</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Subject *</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Research inquiry / collaboration / question"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please describe your enquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
