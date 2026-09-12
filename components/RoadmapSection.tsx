"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Learn market structure",
    desc: "Understand liquidity, trend, and price action before touching size.",
  },
  {
    title: "Build a risk framework",
    desc: "Position sizing and stop placement — the part most traders skip.",
  },
  {
    title: "Trade small, track everything",
    desc: "Prove the edge exists on small size before scaling it up.",
  },
  {
    title: "Scale with discipline",
    desc: "Increase size only as your process holds up under real conditions.",
  },
  {
    title: "Compound consistently",
    desc: "Long-term edge comes from repetition, not one lucky trade.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function RoadmapSection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center"
        >
          <span className="text-xs text-gold tracking-wide">ROADMAP</span>
          <h2 className="mt-3 font-display font-bold text-3xl text-ink">
            The path to trading like this
          </h2>
        </motion.div>

        <div className="mt-14 relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-surface border border-gold/40 flex items-center justify-center font-display font-semibold text-gold">
                {i + 1}
              </div>
              <h3 className="font-display font-semibold text-lg text-ink">{s.title}</h3>
              <p className="mt-1 text-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}