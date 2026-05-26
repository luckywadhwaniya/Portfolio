"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import {
  Trophy,
  Medal,
  Star,
  Award,
  Code,
  Zap,
  Target,
  BookOpen,
} from "lucide-react";

const achievements = [
 
  
  {
    icon: Star,
    title: "Open Source Contributor",
    description:
      "15+ merged pull requests across major open source projects. 100+ GitHub pusha on personal repositories.",
    metric: "100+",
    metricLabel: "GitHub pushs",
    color: "#06b6d4",
    badge: "Open Source",
  },
  {
    icon: Award,
    title: "Leadership",
    description:
      "Led the Projects of Multiple Gropus with 5+ members. Organized 6+ Groups on web development.",
    metric: "10+",
    metricLabel: "Members Led",
    color: "#ec4899",
    badge: "Leadership",
  },
 
];

const certifications: Array<{
  name: string;
  org: string;
  year: string;
  color: string;
}> = [
  // Add certifications here in the future
  // Example: { name: "AWS Certified", org: "Amazon", year: "2024", color: "#ff9900" }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#fbbf24] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <RevealOnScroll className="text-center mb-16">
          <span className="text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Hall of Fame
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto" />
        </RevealOnScroll>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.06}>
              <motion.div
                className="relative bg-[rgba(15,15,26,0.9)] border border-[rgba(99,102,241,0.12)] rounded-2xl p-6 card-hover group overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Glow bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at top left, ${item.color}12, transparent 60%)`,
                  }}
                />

                {/* Badge */}
                <div
                  className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold mb-4"
                  style={{ background: item.color + "22", color: item.color }}
                >
                  {item.badge}
                </div>

                {/* Icon + metric */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: item.color + "20",
                      border: `1px solid ${item.color}40`,
                    }}
                  >
                    <item.icon
                      className="w-6 h-6"
                      style={{ color: item.color }}
                    />
                  </div>
                  <div className="text-right">
                    <div
                      className="text-2xl font-black"
                      style={{ color: item.color }}
                    >
                      {item.metric}
                    </div>
                    <div className="text-[10px] text-[#475569]">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-white mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-[#64748b] text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Certifications */}
        <RevealOnScroll>
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Certifications</span>
          </h3>
        </RevealOnScroll>
        <div className="flex flex-wrap gap-4 justify-center">
          {certifications.map((cert, i) => (
            <RevealOnScroll key={cert.name} delay={i * 0.08}>
              <motion.div
                className="flex items-center gap-4 bg-[rgba(15,15,26,0.9)] border border-[rgba(99,102,241,0.12)] rounded-2xl px-6 py-4 card-hover"
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white shrink-0"
                  style={{
                    background: cert.color + "33",
                    border: `1px solid ${cert.color}66`,
                  }}
                >
                  <Award className="w-5 h-5" style={{ color: cert.color }} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {cert.name}
                  </div>
                  <div className="text-xs text-[#64748b]">
                    {cert.org} · {cert.year}
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
