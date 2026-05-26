"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  Loader,
  Wheat,
  PhoneCallIcon,
  PhoneForwardedIcon,
  LucidePhoneIncoming,
  PhoneOff,
  LucideServer,
  SmartphoneNfc,
} from "lucide-react";
import App from "next/app";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate send
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const inputClass =
    "w-full bg-[rgba(15,15,26,0.8)] border border-[rgba(99,102,241,0.2)] rounded-xl px-4 py-3 text-[#e2e8f0] text-sm placeholder-[#475569] focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[rgba(99,102,241,0.3)] transition-all duration-200";

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06b6d4] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto mt-4">
            Have a project in mind? Looking for a developer? Or just want to say
            hi? I&apos;d love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto mt-6" />
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <RevealOnScroll direction="left">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Contact Information
                </h3>
                <p className="text-[#64748b] leading-relaxed">
                  I&apos;m currently open to full-time roles, freelance
                  projects, and technical consultations. Response time is
                  usually within 24 hours.
                </p>
              </div>

              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "luckywadhwaniya@gmail.com",
                  href: "mailto:luckywadhwaniya@gmail.com",
                  color: "#6366f1",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 88664 84085",
                  href: "tel:+918866484085",
                  color: "#06b6d4",
                },
                {
                  icon: SmartphoneNfc,
                  label: "Whatsapp",
                  value: "+91 88664 84085",
                  href: "tel:+918866484085",
                  color: "#065fd4",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Ahemdabad,Gujarat,India",
                  href: "#",
                  color: "#ec4899",
                },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[rgba(15,15,26,0.8)] border border-[rgba(99,102,241,0.12)] hover:border-[rgba(99,102,241,0.3)] transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: color + "20",
                      border: `1px solid ${color}40`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xs text-[#475569] mb-0.5">{label}</div>
                    <div className="text-sm font-medium text-[#cbd5e1] group-hover:text-white transition-colors">
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Social row */}
              <div>
                <div className="text-xs text-[#475569] mb-4 uppercase tracking-widest">
                  Follow me
                </div>
                <div className="flex gap-3">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/luckywadhwaniya",
                      color: "#e2e8f0",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/luckywadhwaniya96/",
                      color: "#0ea5e9",
                    },
                    {
                      icon: Twitter,
                      href: "https://x.com/LkyWdhwy116291",
                      color: "#38bdf8",
                    },
                  ].map(({ icon: Icon, href, color }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl flex items-center justify-center border border-[rgba(99,102,241,0.2)] bg-[rgba(15,15,26,0.8)] hover:border-[rgba(99,102,241,0.5)] transition-all"
                      style={{ color }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability card */}
              <motion.div
                className="p-5 rounded-2xl bg-gradient-to-br from-[rgba(99,102,241,0.12)] to-[rgba(139,92,246,0.06)] border border-[rgba(99,102,241,0.2)]"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(99,102,241,0)",
                    "0 0 30px rgba(99,102,241,0.1)",
                    "0 0 0 rgba(99,102,241,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-green-400">
                    Available for Work
                  </span>
                </div>
                <p className="text-[#94a3b8] text-sm">
                  Currently open to full-time positions and interesting
                  freelance projects.
                </p>
              </motion.div>
            </div>
          </RevealOnScroll>

          {/* Contact form */}
          <RevealOnScroll direction="right">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-[rgba(15,15,26,0.9)] border border-[rgba(99,102,241,0.15)] rounded-2xl p-8 space-y-5 mt-30"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-[#64748b] mb-2 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="James Bond"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#64748b] mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#64748b] mb-2 uppercase tracking-widest">
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="job">Job Opportunity</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="collab">Collaboration</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-[#64748b] mb-2 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  rows={5}
                  className={inputClass + " resize-none"}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                  status === "success"
                    ? "bg-green-600/80"
                    : "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:opacity-90"
                }`}
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
              >
                {status === "idle" && (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
                {status === "loading" && (
                  <>
                    <Loader className="w-4 h-4 animate-spin" /> Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle className="w-4 h-4" /> Message Sent!
                  </>
                )}
              </motion.button>
            </motion.form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
