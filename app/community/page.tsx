"use client";

import Navbar from "@/components/Navbar";
import GridSparkleBackground from "@/components/GridSparkleBackground";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// TODO: swap in the real Discord invite link once you have it.
const DISCORD_INVITE = "#";

function reveal(delay: number) {
  return {
    initial: { opacity: 0, y: 28, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative py-28 border-b border-border overflow-hidden text-center">
          <GridSparkleBackground />
          <div className="relative max-w-2xl mx-auto px-6">
            <motion.span {...reveal(0)} className="text-xs text-gold tracking-wide block">
              COMMUNITY
            </motion.span>
            <motion.h1
              {...reveal(0.1)}
              className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-ink leading-tight"
            >
              Free, and it stays that way.
            </motion.h1>
            <motion.p {...reveal(0.25)} className="mt-6 text-muted text-lg leading-relaxed">
              Value should come from what we build and share — not from
              selling access to a group chat.
            </motion.p>
            <motion.div {...reveal(0.4)} className="mt-8">
              <Link
                href={DISCORD_INVITE}
                target="_blank"
                className="inline-block px-8 py-3.5 rounded-full border-2 border-gold text-gold font-medium hover:bg-gold hover:text-black transition-colors"
              >
                Available on Discord
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 className="font-display font-semibold text-2xl text-ink">
              What happens here
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Day-to-day discussion, market talk, and questions between people
              learning the same markets. Premium modules fund the platform —
              being part of the community doesn&apos;t require buying anything.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="mt-14 border-t border-border pt-8"
          >
            <h2 className="font-display font-semibold text-2xl text-ink">
              Where to join
            </h2>
            <p className="mt-3 text-muted">
              The community lives on Discord — free, always.
            </p>
            <Link
              href={DISCORD_INVITE}
              target="_blank"
              className="mt-4 inline-block px-6 py-3 rounded-sm bg-gold-gradient text-black font-medium"
            >
              Join on Discord
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
}