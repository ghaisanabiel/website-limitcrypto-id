"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const corners = [
  { label: "COMMUNITY", href: "/community", pos: "top-0 left-0" },
  { label: "MODULES", href: "/learning", pos: "top-0 right-0" },
  { label: "CHANNEL", href: "/channel", pos: "bottom-0 left-0" },
  { label: "EVENTS", href: "/events", pos: "bottom-0 right-0" },
] as const;

// Timing for each label's cycle: rise+blur in, hold, fade out — fully
// sequential (one finishes fading out before the next starts), not staggered
// together like before.
const RISE_MS = 500;
const HOLD_MS = 500;
const FADE_MS = 300;
const STEP_MS = RISE_MS + HOLD_MS + FADE_MS;

export default function IntroSequence({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"intro" | "closing" | "done">("intro");
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1); // -1 = not started / finished

  // Drives the one-at-a-time label cycle once the logo has actually loaded.
  useEffect(() => {
    if (!logoLoaded || reducedMotion) return;

    setActiveIndex(0);
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index >= corners.length) {
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
            className="fixed inset-0 z-50 bg-bg flex items-center justify-center"
            initial={{ y: 0 }}
            animate={{ y: phase === "closing" ? "-100%" : 0 }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, filter: "blur(14px)" }}
                animate={
                  logoLoaded
                    ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                    : { opacity: 0, scale: 0.92, filter: "blur(14px)" }
                }
                transition={{ duration: 0.7, ease: EASE }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    priority
                    onLoad={() => setLogoLoaded(true)}
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {corners.map((c, i) => (
                <div key={c.label} className={`absolute ${c.pos}`}>
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: RISE_MS / 1000, ease: EASE }}
                        className="relative px-5 py-4"
                      >
                        <div
                          className="absolute inset-0 -z-10 rounded-md"
                          style={{
                            background:
                              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.75))",
                          }}
                        />
                        <Link
                          href={c.href}
                          className="font-bold text-xs md:text-sm tracking-wide text-white hover:text-gold transition-colors"
                        >
                          {c.label}
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}