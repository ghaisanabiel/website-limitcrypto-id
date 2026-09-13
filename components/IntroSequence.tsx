"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const words = ["COMMUNITY", "MODULES", "CHANNEL", "EVENTS"] as const;

// Timing for each word's cycle: rise+blur in, hold, fade out — sequential.
const RISE_MS = 500;
const HOLD_MS = 500;
const FADE_MS = 300;
const STEP_MS = RISE_MS + HOLD_MS + FADE_MS;

export default function IntroSequence({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"intro" | "closing" | "done">("intro");
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!logoLoaded || reducedMotion) return;

    setActiveIndex(0);
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index >= words.length) {
        clearInterval(interval);
        setActiveIndex(-1);
        setTimeout(() => setPhase("closing"), 400);
        setTimeout(() => setPhase("done"), 400 + 550);
      } else {
        setActiveIndex(index);
      }
    }, STEP_MS);

    return () => clearInterval(interval);
  }, [logoLoaded, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) setPhase("done");
  }, [reducedMotion]);

  if (reducedMotion && phase === "done") return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            className="fixed inset-0 z-50 bg-bg flex items-center justify-center overflow-hidden"
            initial={{ y: 0 }}
            animate={{ y: phase === "closing" ? "-100%" : 0 }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
          >
            {/* Giant word — dead center, gradient fill (white top ~70% -> black),
                sits BEHIND the logo. One word visible at a time. */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeIndex >= 0 && (
                  <motion.span
                    key={words[activeIndex]}
                    initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: RISE_MS / 1000, ease: EASE }}
                    className="font-extrabold text-6xl sm:text-8xl md:text-9xl tracking-tight bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #000000 100%)",
                    }}
                  >
                    {words[activeIndex]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Logo — small, centered, on top (z-10) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, filter: "blur(14px)" }}
              animate={
                logoLoaded
                  ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                  : { opacity: 0, scale: 0.92, filter: "blur(14px)" }
              }
              transition={{ duration: 0.7, ease: EASE }}
              className="relative z-10 w-24 h-24 md:w-32 md:h-32"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                priority
                onLoad={() => setLogoLoaded(true)}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}