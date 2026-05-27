"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Trip Booking",
    description:
      "Smart Trip is an intelligent travel planning and recommendation system developed using Python and AI-based technologies. The project helps users discover destinations, manage travel plans, receive smart recommendations, and analyze travel preferences through an interactive and user-friendly interface.",
    image:
      "https://images.prismic.io/ai-travelfika-blogs/adYXWZ1ZCF7ES8y2_AI-Trip-Planning.jpg?auto=format,compress",
    tags: ["Python", "Streamlit", "MySQL", "CURD"],
    category: "Python",
    github: "https://github.com/luckywadhwaniya/SmartTripAI",
    stars: 124,
    forks: 38,
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Cafe Tales",
    description:
      "CafeTales is a modern and responsive café management and restaurant website designed to provide an engaging digital experience for customers. The project focuses on elegant UI/UX, online menu display, smooth navigation, responsive design, and interactive web features using modern web development technologies.",
    image:
      "https://cdn.prod.website-files.com/688d3a84114bb08733192a12/68a3887519763149a362ebaa_68645a359287d257c305b67e_optimizing-restaurant-reservations-with-smart-ai-solutions-1751407156682.webp",
    tags: ["Full Stack", "MySQL", "DBMS", "Javascript", "Tailwind", "HTML/CSS"],
    category: "Full Stack",
    github: "https://github.com/luckywadhwaniya/CafeTales",
    stars: 67,
    forks: 19,
    color: "#4a91fd",
  },
  {
    id: 3,
    title: "Python Data Dashboard",
    description:
      "Analytics dashboard with ML-powered insights. Processes large datasets, generates predictions, and visualizes trends using interactive charts.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["Python", "Pandas", "Scikit-learn", "React", "Recharts"],
    category: "Full Stack",
    github: "https://github.com",
    stars: 91,
    forks: 28,
    color: "#10b981",
  },
];

const categories = ["All", "Full Stack", "Python", "AI/ML"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6366f1] rounded-full blur-[160px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block">
            What I&apos;ve Built
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto mb-8" />

          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white"
                    : "border border-[rgba(99,102,241,0.3)] text-[#94a3b8] hover:text-white hover:border-[rgba(99,102,241,0.6)]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </RevealOnScroll>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-[rgba(15,15,26,0.9)] border border-[rgba(99,102,241,0.12)] rounded-2xl overflow-hidden card-hover cursor-pointer"
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                    style={{
                      background: `linear-gradient(to top, ${project.color}40, transparent)`,
                    }}
                  />

                  {/* Category badge */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: project.color + "cc" }}
                  >
                    {project.category}
                  </div>
                  <AnimatePresence>
                    {hovered === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#0a0a0f]/80 flex items-center justify-center gap-4"
                      >
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#a5b4fc] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                        style={{
                          background: project.color + "18",
                          color: project.color,
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(99,102,241,0.1)]">
                    <div className="flex items-center gap-4 text-[#475569] text-sm">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" /> {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" /> {project.forks}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all */}
        <RevealOnScroll className="text-center mt-12">
          <motion.a
            href="https://github.com/Hars505?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-[#a5b4fc] border border-[rgba(99,102,241,0.4)] hover:bg-[rgba(99,102,241,0.1)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </motion.a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
