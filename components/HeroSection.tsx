"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Download,
  ArrowDown,
  Code2,
  Terminal,
} from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1] rounded-full blur-[140px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6] rounded-full blur-[140px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06b6d4] rounded-full blur-[180px] opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(99,102,241,0.3)] bg-[rgba(99,102,241,0.08)] text-sm text-[#a5b4fc] mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for Work
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black mb-4 leading-tight"
          >
            Hi, I&apos;m <span className="gradient-text">Lucky Wadhwaniya</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl lg:text-3xl font-semibold text-[#94a3b8] mb-6 h-10"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Java Enthusiast",
                2000,
                "Python Developer",
                2000,
                "UI/UX Craftsman",
                2000,
                "Open Source Contributor",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#6366f1]"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
           Python & MERN Stack Developer passionate about AI/ML, Deep Learning, and transforming data into intelligent solutions.
          </motion.p>

          {/* Tech pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start"
          >
            {["Java", "Python","AI/ML",'Data-Science','Data-Analysis', "React", "MERN Stack", "DSA", "SQL"].map((t) => (
              <span key={t} className="tech-badge">
                <Code2 className="w-3 h-3" /> {t}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] glow-purple hover:opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-[#a5b4fc] border border-[rgba(99,102,241,0.4)] hover:bg-[rgba(99,102,241,0.1)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/luckywadhwaniya",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/luckywadhwaniya96/",
                label: "LinkedIn",
              },
              {
                icon: Twitter,
                href: "https://x.com/LkyWdhwy116291",
                label: "Twitter",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[rgba(99,102,241,0.3)] bg-[rgba(99,102,241,0.08)] flex items-center justify-center text-[#94a3b8] hover:text-[#6366f1] hover:border-[#6366f1] transition-all"
                whileHover={{ scale: 1.15, y: -2 }}
                title={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Avatar / Code window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            type: "spring",
            stiffness: 80,
          }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] blur-2xl opacity-30 scale-110" />

            {/* Avatar circle */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full border-2 border-[rgba(99,102,241,0.4)] bg-gradient-to-br from-[#1e1e2e] to-[#0a0a0f] flex items-center justify-center float-animation pulse-glow overflow-hidden">
              {/* Code terminal mockup */}
              <div className="w-full h-full rounded-full flex flex-col items-center justify-center p-8">
                <div className="w-full bg-[#0d0d1a] rounded-xl border border-[rgba(99,102,241,0.2)] overflow-hidden shadow-2xl">
                  {/* Terminal bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#111127] border-b border-[rgba(99,102,241,0.15)]">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-[#475569] text-xs font-mono">
                      portfolio.js
                    </span>
                  </div>
                  {/* Code lines */}
                  <div className="p-4 font-mono text-xs leading-6">
                    <div>
                      <span className="text-[#6366f1]">const</span>{" "}
                      <span className="text-[#06b6d4]">dev</span> ={" "}
                      <span className="text-[#fbbf24]">&#123;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#94a3b8]">name:</span>{" "}
                      <span className="text-green-400">
                        &apos;Lucky Wadhwaniya&apos;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#94a3b8]">role:</span>{" "}
                      <span className="text-green-400">
                        &apos;Full Stack&apos;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#94a3b8]">skills:</span> [
                    </div>
                    <div className="pl-8">
                      <span className="text-green-400">&apos;Java&apos;</span>,{" "}
                      <span className="text-green-400">&apos;Python&apos;</span>
                      ,
                    </div>
                    <div className="pl-8">
                      <span className="text-green-400">&apos;React&apos;</span>,{" "}
                      <span className="text-green-400">&apos;DSA&apos;</span>
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-[#94a3b8]">available:</span>{" "}
                      <span className="text-[#6366f1]">true</span>
                    </div>
                    <div>
                      <span className="text-[#fbbf24]">&#125;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            {[
              { text: "Java", color: "#ef4444", pos: "top-4 -left-4" },
              { text: "Python", color: "#06b6d4", pos: "top-4 -right-4" },
              { text: "React", color: "#6366f1", pos: "bottom-16 -left-8" },
              { text: "SQL", color: "#fbbf24", pos: "bottom-16 -right-8" },
            ].map(({ text, color, pos }) => (
              <motion.div
                key={text}
                className={`absolute ${pos} px-3 py-1.5 rounded-full text-xs font-bold text-white border`}
                style={{
                  background: color + "22",
                  borderColor: color + "66",
                  color,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#475569] hover:text-[#6366f1] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}
