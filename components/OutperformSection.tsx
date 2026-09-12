"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GridSparkleBackground from "@/components/GridSparkleBackground";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function OutperformSection() {
  return (
    <section className="relative py-24 border-t border-border overflow-hidden">
      <GridSparkleBackground />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="text-xs text-gold tracking-wide">TRACK RECORD</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink leading-tight">
            Outperforming BTC,<br />with real risk management.
          </h2>
          <div className="mt-8 flex gap-10">
            <div>
              <div className="font-display font-extrabold text-4xl text-gold">+803.51%</div>
              <div className="mt-1 text-sm text-muted">Total ROI (30D)</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-4xl text-ink">-2.86%</div>
              <div className="mt-1 text-sm text-muted">BTC, same period</div>
            </div>
          </div>
          <p className="mt-6 text-muted leading-relaxed">
            This isn&apos;t a promise of guaranteed returns — it&apos;s a real
            futures PnL record, shown alongside how BTC moved in the same
            window. The gap is the edge structured risk management can build.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="rounded-md border border-border overflow-hidden shadow-lg shadow-black/40"
        >
          <Image
            src="/portfolio-roi.jpeg"
            alt="Total ROI vs BTC all-time change"
            width={700}
            height={900}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}