"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

// template.tsx already gives this component a fresh mount on every
// navigation, so this just needs a plain mount-in animation — no
// AnimatePresence, no `initial={false}`.
//
// Homepage ("/") is skipped entirely: IntroSequence already owns a full
// entrance choreography there (black overlay + logo + corner labels). Having
// this generic fade wrap it too meant the intro's own background/logo were
// ALSO fading in from the outside at the same time as their own internal
// animation — two overlapping timelines fighting each other, which is what
// was reading as a "blink".
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  if (reducedMotion || pathname === "/") return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}