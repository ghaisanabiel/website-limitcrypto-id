"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Manual drag/scroll carousel (not a marquee) — add more filenames to this
// array as more outlook screenshots come in.
const outlookImages = ["/outlook-1.jpeg"];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FreeOutlookCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  }

  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-end justify-between"
        >
          <div>
            <span className="text-xs text-gold tracking-wide">FREE OUTLOOK</span>
            <h2 className="mt-3 font-display font-bold text-3xl text-ink">
              Market reads, shared for free
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-ink hover:border-gold/40 transition-colors text-lg"
            >
              ‹
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-ink hover:border-gold/40 transition-colors text-lg"
            >
              ›
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollerRef}
          className="mt-8 flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {outlookImages.map((src, i) => (
            <div
              key={src}
              className="shrink-0 w-[320px] snap-start rounded-md border border-border overflow-hidden"
            >
              <Image
                src={src}
                alt={`Free outlook ${i + 1}`}
                width={320}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}