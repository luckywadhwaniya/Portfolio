"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { Cpu, Layers, Database, GitBranch } from "lucide-react";

const skillGrid = [
  {
    name: "Java",
    icon: "☕",
    level: 90,
    color: "#ef4444",
    desc: "OOP, Database ,JVM",
  },
  {
    name: "Python",
    icon: "🐍",
    level: 88,
    color: "#06b6d4",
    desc: "Django, FastAPI, ML libs",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    level: 75,
    color: "#fbbf24",
    desc: "ES2024, async/await, DOM",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    level: 72,
    color: "#3b82f6",
    desc: "Strict mode, generics",
  },
  {
    name: "React.js",
    icon: "⚛️",
    level: 65,
    color: "#61dafb",
    desc: "Hooks, Context, Redux",
  },
  {
    name: "Node.js",
    icon: "🟢",
    level: 68,
    color: "#22c55e",
    desc: "Express, REST, WebSocket",
  },
  {
    name: "MySQL",
    icon: "🐬",
    level: 85,
    color: "#00758f",
    desc: "Complex queries, indexing",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    level: 60,
    color: "#47a248",
    desc: "Aggregation, Atlas",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    level: 70,
    color: "#336791",
    desc: "ACID, PL/pgSQL",
  },
  {
    name: "Git & GitHub",
    icon: "🌿",
    level: 90,
    color: "#f97316",
    desc: "Branching, CI/CD",
  },
  {
    name: "HTML/CSS",
    icon: "🎨",
    level: 95,
    color: "#e34f26",
    desc: "Semantic, Flexbox, Grid",
  },
];

const proficiencyLevels = [
  { range: "85-100%", label: "Expert", color: "#6366f1" },
  { range: "70-84%", label: "Proficient", color: "#06b6d4" },
  { range: "60-69%", label: "Intermediate", color: "#fbbf24" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#06b6d4] rounded-full blur-[160px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block">
            What I Know
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto mb-6" />
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {proficiencyLevels.map((l) => (
              <div
                key={l.label}
                className="flex items-center gap-2 text-sm text-[#64748b]"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: l.color }}
                />
                {l.range} · {l.label}
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillGrid.map((skill, i) => (
            <RevealOnScroll key={skill.name} delay={i * 0.04}>
              <motion.div
                className="group relative bg-[rgba(15,15,26,0.9)] border border-[rgba(99,102,241,0.12)] rounded-2xl p-5 card-hover overflow-hidden"
                whileHover={{ y: -4, borderColor: skill.color + "60" }}
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}08, transparent 70%)`,
                  }}
                />

                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-4 relative">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{
                      background: skill.color + "15",
                      border: `1px solid ${skill.color}30`,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {skill.name}
                    </div>
                    <div className="text-[10px] text-[#475569]">
                      {skill.desc}
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative">
                  <div className="flex justify-between text-[10px] mb-1.5">
                    <span className="text-[#475569]">Proficiency</span>
                    <span style={{ color: skill.color }} className="font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.04,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
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
