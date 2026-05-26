"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { Code2, Database, Globe, Server, Cpu, BookOpen } from "lucide-react";

const skills = [
  { name: "Java", level: 90, category: "Backend" },
  { name: "Python", level: 88, category: "Backend" },
  { name: "JavaScript / TypeScript", level: 68, category: "Frontend" },
  { name: "HTML & CSS", level: 95, category: "Frontend" },
  { name: "React / Next.js", level: 40, category: "Frontend" },
  { name: "DSA & Algorithms", level: 85, category: "CS Core" },
  { name: "DBMS / SQL", level: 70, category: "Database" },
  { name: "Git & Version Control", level: 50, category: "DevOps" },
];

const techCategories = [
  {
    icon: Code2,
    title: "Languages",
    color: "#6366f1",
    items: ["Java", "Python", "JavaScript"],
  },
  {
    icon: Globe,
    title: "Frontend",
    color: "#06b6d4",
    items: ["HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "#8b5cf6",
    items: [ "Spring Boot", "REST APIs", "MatplotLib"],
  },
  {
    icon: Database,
    title: "Database",
    color: "#fbbf24",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Cpu,
    title: "CS Fundamentals",
    color: "#ec4899",
    items: ["Data Structures", "Algorithms", "DBMS"],
  },
  {
    icon: BookOpen,
    title: "Tools & Platforms",
    color: "#10b981",
    items: ["Git/GitHub", "VS Code"],
  },
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="mb-5"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm text-[#cbd5e1] font-medium">{name}</span>
        <span className="text-sm text-[#6366f1] font-bold">{level}%</span>
      </div>
      <div className="h-1.5 bg-[rgba(99,102,241,0.12)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: index * 0.07 + 0.3, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#8b5cf6] rounded-full blur-[160px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <RevealOnScroll className="text-center mb-16">
          <span className="text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block">Who I Am</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto" />
        </RevealOnScroll>

        {/* Bio + stats */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          {/* Bio */}
          <RevealOnScroll direction="left">
            <div className="space-y-6">
              <p className="text-[#94a3b8] text-lg leading-relaxed">
                I&apos;m a passionate <span className="text-white font-semibold">Full Stack Developer</span> with a strong
                foundation in Computer Science. I love solving complex problems with clean, efficient code.
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed">
                My journey started with <span className="text-[#6366f1] font-semibold">Java</span> and 
                {" "}<span className="text-[#06b6d4] font-semibold">Python</span>, and evolved into building end-to-end web
                applications. I&apos;m deeply passionate about <span className="text-[#8b5cf6] font-semibold">AI & ML</span>, competitive
                programming, and crafting seamless user experiences.
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed">
                When not coding, I contribute to open-source, write technical blogs, and mentor fellow developers.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { num: "8+", label: "Leadership In Projects" },
                  { num: "12+", label: "Projects Built" },
                  { num: "500+", label: "Github Pushs" },
                ].map(({ num, label }) => (
                  <motion.div
                    key={label}
                    className="bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.2)] rounded-xl p-4 text-center card-hover"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-black gradient-text">{num}</div>
                    <div className="text-xs text-[#64748b] mt-1">{label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Skills bars */}
          <RevealOnScroll direction="right">
            <div className="bg-[rgba(15,15,26,0.8)] border border-[rgba(99,102,241,0.15)] rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-[#6366f1] to-[#8b5cf6] rounded-full" />
                Proficiency
              </h3>
              {skills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Tech categories grid */}
        <RevealOnScroll>
          <h3 className="text-2xl font-bold text-center text-white mb-10">
            Tech <span className="gradient-text">Arsenal</span>
          </h3>
        </RevealOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, i) => (
            <RevealOnScroll key={cat.title} delay={i * 0.08}>
              <motion.div
                className="bg-[rgba(15,15,26,0.8)] border border-[rgba(99,102,241,0.12)] rounded-2xl p-6 card-hover group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: cat.color + "22", border: `1px solid ${cat.color}44` }}
                  >
                    <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <span className="font-bold text-white">{cat.title}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-200"
                      style={{
                        background: cat.color + "15",
                        border: `1px solid ${cat.color}30`,
                        color: cat.color,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
