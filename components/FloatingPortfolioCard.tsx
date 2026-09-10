"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className: string; // positioning classes, passed per instance
  image: string; // path under /public, e.g. "/portofolio1.jpeg"
  alt: string;
  width?: number; // px, default 200
  delay?: number;
};

// Two layers on purpose: the outer div plays the one-time entrance (rise +
// blur-in, matching the headline/paragraph entrance elsewhere on the page).
// The inner div starts its own infinite up-down float only after the
// entrance finishes — combining both into a single `y` animation caused the
// entrance and the loop to fight each other.
export default function FloatingPortfolioCard({
  className,
  image,
  alt,
  width = 200,
  delay = 0,
}: Props) {
  const reducedMotion = useReducedMotion();
  const height = Math.round(width * 1.15);

  if (reducedMotion) {
    return (
      <div className={`hidden md:block absolute ${className}`}>
        <Card image={image} alt={alt} width={width} height={height} />
      </div>
    );
  }

  return (
    <motion.div
      className={`hidden md:block absolute ${className}`}
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{
          duration: 3,
          delay: delay + 0.8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Card image={image} alt={alt} width={width} height={height} />
      </motion.div>
    </motion.div>
  );
}

function Card({
  image,
  alt,
  width,
  height,
}: {
  image: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div
      className="rounded-md border border-border overflow-hidden shadow-lg shadow-black/40"
      style={{ width }}
    >
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}