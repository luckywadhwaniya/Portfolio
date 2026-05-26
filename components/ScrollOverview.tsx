"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionIds = ["home", "about", "skills", "projects", "achievements", "connect", "contact"];
const sectionLabels = ["Home", "About", "Skills", "Projects", "Achievements", "Connect", "Contact"];

interface SectionPreview {
  id: string;
  label: string;
  color: string;
}

const sectionPreviews: SectionPreview[] = [
  { id: "home", label: "Home", color: "#6366f1" },
  { id: "about", label: "About", color: "#06b6d4" },
  { id: "skills", label: "Skills", color: "#8b5cf6" },
  { id: "projects", label: "Projects", color: "#fbbf24" },
  { id: "achievements", label: "Achievements", color: "#ec4899" },
  { id: "connect", label: "Connect", color: "#10b981" },
  { id: "contact", label: "Contact", color: "#f97316" },
];

export default function ScrollOverview() {
  const [showOverview, setShowOverview] = useState(false);
  const lastScrollY = useRef(0);
  const scrollUpDelta = useRef(0);
  const isOverview = useRef(false);
  const lockScroll = useRef(false);

  const openOverview = useCallback(() => {
    if (isOverview.current) return;
    isOverview.current = true;
    setShowOverview(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeOverview = useCallback(() => {
    if (!isOverview.current) return;
    isOverview.current = false;
    setShowOverview(false);
    document.body.style.overflow = "";
    scrollUpDelta.current = 0;
  }, []);

  const navigateTo = (id: string) => {
    closeOverview();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (lockScroll.current) return;

      const currentY = window.scrollY;
      const delta = lastScrollY.current - currentY; // positive = scrolling up

      // Only trigger if at top of page and scrolling up more
      if (currentY <= 0 || currentY < 80) {
        if (delta > 0) {
          scrollUpDelta.current += delta;
          if (scrollUpDelta.current > 60 && !isOverview.current) {
            openOverview();
          }
        }
      } else {
        scrollUpDelta.current = 0;
      }

      lastScrollY.current = currentY;
    };

    const handleWheel = (e: WheelEvent) => {
      if (lockScroll.current) return;
      
      // If at top of page and scrolling up (negative deltaY = scroll up)
      if (window.scrollY <= 10 && e.deltaY < -30 && !isOverview.current) {
        scrollUpDelta.current += Math.abs(e.deltaY);
        if (scrollUpDelta.current > 80) {
          openOverview();
        }
        return;
      }

      // When overview is open and user scrolls down, close it
      if (isOverview.current && e.deltaY > 30) {
        closeOverview();
        return;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOverview.current) {
        closeOverview();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openOverview, closeOverview]);

  return (
    <AnimatePresence>
      {showOverview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "rgba(10,10,15,0.97)", backdropFilter: "blur(20px)" }}
          onClick={closeOverview}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8 z-10 relative"
          >
            <h2 className="text-2xl font-black gradient-text mb-1">Page Overview</h2>
            <p className="text-[#475569] text-sm">Click any section to navigate · Press Esc to close · Scroll down to return</p>
          </motion.div>

          {/* Section grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl w-full px-6 z-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {sectionPreviews.map((section, i) => (
              <motion.button
                key={section.id}
                initial={{ scale: 0.6, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4, type: "spring", stiffness: 120 }}
                onClick={() => navigateTo(section.id)}
                className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-300"
                style={{
                  background: section.color + "10",
                  borderColor: section.color + "30",
                }}
                whileHover={{
                  scale: 1.06,
                  borderColor: section.color + "80",
                  background: section.color + "20",
                }}
                whileTap={{ scale: 0.96 }}
              >
                {/* Mini page mockup */}
                <div
                  className="w-full h-20 rounded-lg overflow-hidden relative"
                  style={{ background: `linear-gradient(135deg, ${section.color}15, ${section.color}05)` }}
                >
                  {/* Fake content lines */}
                  <div className="p-3 space-y-1.5">
                    <div
                      className="h-2 rounded-full w-3/4"
                      style={{ background: section.color + "40" }}
                    />
                    <div
                      className="h-1.5 rounded-full w-1/2"
                      style={{ background: section.color + "25" }}
                    />
                    <div
                      className="h-1.5 rounded-full w-2/3"
                      style={{ background: section.color + "20" }}
                    />
                    <div className="flex gap-1 mt-2">
                      {[40, 60, 45].map((w, j) => (
                        <div
                          key={j}
                          className="h-3 rounded"
                          style={{ background: section.color + "30", width: `${w}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Number indicator */}
                  <div
                    className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                    style={{ background: section.color }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Label */}
                <span
                  className="text-sm font-semibold transition-colors"
                  style={{ color: section.color }}
                >
                  {section.label}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Hint */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center gap-2 text-[#334155] text-xs z-10 relative"
          >
            <div className="w-8 h-0.5 bg-[#334155] rounded" />
            Scroll Overview
            <div className="w-8 h-0.5 bg-[#334155] rounded" />
          </motion.div>

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={closeOverview}
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border border-[rgba(99,102,241,0.3)] text-[#475569] hover:text-white hover:border-[rgba(99,102,241,0.6)] transition-all z-10"
          >
            ✕
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
