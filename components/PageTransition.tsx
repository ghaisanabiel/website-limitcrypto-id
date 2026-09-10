"use client";

import { motion, useReducedMotion } from "framer-motion";

// template.tsx already gives this component a fresh mount on every
// navigation, so this just needs a plain mount-in animation — no
// AnimatePresence, no `initial={false}` (that flag was actively
// suppressing the animation on every remount, which is why nothing
// appeared to happen before).
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return <>{children}</>;

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