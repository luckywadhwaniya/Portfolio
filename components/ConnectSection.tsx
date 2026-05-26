"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Globe,
  Code,
  Terminal,
  BookOpen,
  Coffee,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import { Arrow } from "@radix-ui/react-popover";

const socials = [
  {
    name: "GitHub",
    handle: "@luckywadhwaniya",
    description: "200+ stars · 20+ repos · Open source contributions",
    icon: Github,
    href: "https://github.com/luckywadhwaniya",
    color: "#e2e8f0",
    bg: "#1a1a2e",
    border: "rgba(226,232,240,0.2)",
    stats: "200+ Stars",
  },
  {
    name: "LinkedIn",
    handle: "Lucky Wadhwaniya",
    description: "Professional network · 250+ connections · Posts about tech",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/luckywadhwaniya96/",
    color: "#0ea5e9",
    bg: "#0c1a2e",
    border: "rgba(14,165,233,0.2)",
    stats: "250+ Connections",
  },
  {
    name: "Twitter / X",
    handle: "@luckywadhwaniya",
    description: "Daily coding tips · Tech threads · Dev community",
    icon: Twitter,
    href: "https://x.com/LkyWdhwy116291",
    color: "#38bdf8",
    bg: "#0c1a2e",
    border: "rgba(56,189,248,0.2)",
    stats: "Followers",
  },
  {
    name: "Portfolio",
    handle: "Lucky.me",
    description:
      "This site! Built with Next.js, Framer Motion, and lots of love.",
    icon: Globe,
    href: "#",
    color: "#6366f1",
    bg: "#0f0f1a",
    border: "rgba(99,102,241,0.3)",
    stats: "You're Here!",
  },
];

export default function ConnectSection() {
  return (
    <section id="connect" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#6366f1] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Let&apos;s Stay Connected
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Find Me <span className="gradient-text">Online</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto mt-4">
            I&apos;m active across multiple platforms. Follow me for daily
            coding content, open source work, and dev community discussions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto mt-6" />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {socials.map((s, i) => (
            <RevealOnScroll key={s.name} delay={i * 0.07}>
              <motion.a
                href={s.href}
                target={s.href !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300 cursor-pointer block"
                style={{
                  background: s.bg,
                  borderColor: s.border,
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Icon row */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: s.color + "22",
                      border: `1px solid ${s.color}44`,
                    }}
                  >
                    <s.icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <div
                    className="px-2 py-1 rounded-full text-[10px] font-semibold"
                    style={{ background: s.color + "18", color: s.color }}
                  >
                    {s.stats}
                  </div>
                </div>

                {/* Info */}
                <div>
                  <div className="font-bold text-white text-sm mb-0.5">
                    {s.name}
                  </div>
                  <div
                    className="text-xs font-medium mb-2"
                    style={{ color: s.color }}
                  >
                    {s.handle}
                  </div>
                  <p className="text-[#475569] text-xs leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* CTA */}
                <div
                  className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: s.color }}
                >
                  Visit Profile <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>
            </RevealOnScroll>
          ))}
        </div>

        {/* GO UP */}
        <RevealOnScroll className="mt-12 text-center">
          <motion.a
            href="#"
            target="_self"
            rel=""
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a1200] border border-[rgba(251,191,36,0.3)] text-[#fbbf24] font-semibold hover:bg-[rgba(251,191,36,0.1)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
            GO UP
          </motion.a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
