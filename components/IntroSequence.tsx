"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const corners = [
  { label: "COMMUNITY", href: "/community", pos: "top-0 left-0", from: { x: -40, y: -30 } },
  { label: "MODULES", href: "/learning", pos: "top-0 right-0", from: { x: 40, y: -30 } },
  { label: "CHANNEL", href: "/channel", pos: "bottom-0 left-0", from: { x: -40, y: 30 } },
  { label: "EVENTS", href: "/events", pos: "bottom-0 right-0", from: { x: 40, y: 30 } },
] as const;

export default function IntroSequence({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"intro" | "closing" | "done">("intro");

  useEffect(() => {
    // plays on every page load — no localStorage skip. Only reduced-motion
    // users get the simplified instant reveal.
    if (reducedMotion) {
      setPhase("done");
      return;
    }
    const closeTimer = setTimeout(() => setPhase("closing"), 2600);
    const doneTimer = setTimeout(() => setPhase("done"), 3200);
    return () => {
      clearTimeout(closeTimer);
      clearTimeout(doneTimer);
    };
  }, [reducedMotion]);

  if (reducedMotion && phase === "done") return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            className="fixed inset-0 z-50 bg-bg flex items-center justify-center"
            initial={{ y: 0 }}
            animate={{ y: phase === "closing" ? "-100%" : 0 }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
          >
            {/* fixed-size stage: logo centered, labels pinned to this box's
                corners so they sit close to the logo instead of the screen edges */}
            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, filter: "blur(14px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  {/* Logo — drop your file at /public/logo-hex.png (or .svg) to replace this.
                      Swap the src below if your filename/extension differs. */}
                  <Image src="public/logo-hex.png" alt="Logo" fill priority className="object-contain" />
                </div>
              </motion.div>

              {corners.map((c, i) => (
                <motion.div
                  key={c.label}
                  className={`absolute ${c.pos}`}
                  initial={{ opacity: 0, x: c.from.x, y: c.from.y, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.5 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={c.href}
                    className="font-bold text-xs md:text-sm tracking-wide text-white hover:text-gold transition-colors"
                  >
                    {c.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}