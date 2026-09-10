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

// Pops in (opacity/scale) timed to land right as the intro finishes sliding
// up, then floats up-down continuously.
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
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -18, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        y: {
          duration: 3,
          delay: delay + 0.6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      }}
    >
      <Card image={image} alt={alt} width={width} height={height} />
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