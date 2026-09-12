"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import GridSparkleBackground from "@/components/GridSparkleBackground";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function JoinCTASection() {
  return (
    <section className="relative py-28 border-t border-border overflow-hidden text-center">
      <GridSparkleBackground />
      <motion.div
        className="relative max-w-2xl mx-auto px-6"
        initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
          Ready to build your edge?
        </h2>
        <p className="mt-4 text-muted">
          Free community, premium modules when you&apos;re ready for them.
        </p>
        <motion.div
          className="mt-8 inline-block"
          animate={{
            boxShadow: [
              "0 0 0px rgba(212,175,55,0.4)",
              "0 0 24px rgba(212,175,55,0.35)",
              "0 0 0px rgba(212,175,55,0.4)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ borderRadius: "9999px" }}
        >
          <Link
            href="/signup"
            className="inline-block px-8 py-3.5 rounded-full border-2 border-gold text-gold font-medium hover:bg-gold hover:text-black transition-colors"
          >
            Join now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}