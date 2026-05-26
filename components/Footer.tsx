"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-[rgba(99,102,241,0.1)] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            &lt; Lucky's Portfolio /&gt;
          </motion.div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-[#475569] text-sm">
            Made with{" "}
            <Heart className="w-4 h-4 text-[#ec4899] fill-[#ec4899] animate-pulse" />{" "}
            by
            <span className="text-[#a5b4fc] font-semibold">Lucky Wadhwaniya</span>
            &copy; {new Date().getFullYear()}
          </div>

          {/* Socials + scroll top */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/luckywadhwaniya" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/luckywadhwaniya96//",
              },
              { icon: Twitter, href: "https://x.com/LkyWdhwy116291" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-[rgba(99,102,241,0.2)] text-[#64748b] hover:text-[#6366f1] hover:border-[rgba(99,102,241,0.5)] transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white ml-2 hover:opacity-80 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[rgba(99,102,241,0.07)] text-center text-xs text-[#334155]">
          Built with Next.js · javaScript · Tailwind CSS · Html ·
          Deployed on VS code
        </div>
      </div>
    </footer>
  );
}
