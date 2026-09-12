"use client";
import { motion } from "framer-motion";

const sparkles = [
  { top: "10%", left: "15%", size: 3, delay: 0 },
  { top: "25%", left: "80%", size: 2, delay: 0.6 },
  { top: "60%", left: "10%", size: 2, delay: 1.2 },
  { top: "75%", left: "70%", size: 3, delay: 0.3 },
  { top: "40%", left: "45%", size: 2, delay: 1.8 },
  { top: "15%", left: "60%", size: 2, delay: 0.9 },
  { top: "85%", left: "30%", size: 3, delay: 1.5 },
];

// Blue grid + twinkling dots, meant as a section background. Parent needs
// `relative`; this fills it via `absolute inset-0` at a low z-index.
export default function GridSparkleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}