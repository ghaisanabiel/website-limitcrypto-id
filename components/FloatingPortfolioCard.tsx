"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className: string; // positioning classes, passed per instance
  label: string;
  value: string;
  sub?: string;
  positive?: boolean;
  delay?: number;
};

// Pops in (opacity/scale) timed to land right as the intro finishes sliding
// up, then floats on a slow infinite vertical drift. Two separate transition
// timings on the same element: one for the entrance, one for the loop.
export default function FloatingPortfolioCard({
  className,
  label,
  value,
  sub,
  positive = true,
  delay = 0,
}: Props) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={`hidden md:block absolute ${className}`}>
        <Card label={label} value={value} sub={sub} positive={positive} />
      </div>
    );
  }

  return (
    <motion.div
      className={`hidden md:block absolute ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 4.5, delay, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <Card label={label} value={value} sub={sub} positive={positive} />
    </motion.div>
  );
}

function Card({
  label,
  value,
  sub,
  positive,
}: {
  label: string;
  value: string;
  sub?: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-md border border-border bg-surface/90 backdrop-blur px-4 py-3 shadow-lg shadow-black/40">
      <span className="text-[10px] text-muted tracking-wide">{label}</span>
      <div
        className={`mt-1 font-display font-semibold text-lg ${
          positive ? "text-gold" : "text-ink"
        }`}
      >
        {value}
      </div>
      {sub && <span className="text-[10px] text-muted">{sub}</span>}
    </div>
  );
}