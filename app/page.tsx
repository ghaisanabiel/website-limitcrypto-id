"use client";

import { motion } from "framer-motion";
import IntroSequence from "@/components/IntroSequence";
import Navbar from "@/components/Navbar";
import ModuleCard from "@/components/ModuleCard";
import FloatingPortfolioCard from "@/components/FloatingPortfolioCard";
import { mockModules } from "@/lib/mock-data";
import Link from "next/link";
import OutperformSection from "@/components/OutperformSection";
import FreeOutlookCarousel from "@/components/FreeOutlookCarousel";
import RoadmapSection from "@/components/RoadmapSection";
import JoinCTASection from "@/components/JoinCTASection";
import TestimonialMarquee from "@/components/TestimonialMarquee";

// Floating cards + headline text all start their entrance around this time —
// roughly when the intro overlay finishes sliding up (see IntroSequence
// timings). Adjust this if you change the intro duration.
// Intro now cycles 4 words sequentially (~1.3s each) before sliding up —
// this must stay roughly in sync with IntroSequence's own timing constants,
// or homepage content finishes revealing while still hidden behind the
// overlay and looks static/stiff the moment it lifts.
const INTRO_DONE_DELAY = 6.3;
const EASE = [0.16, 1, 0.3, 1] as const;

// Shared "rise + blur-in" entrance, staggered by index across headline,
// paragraph, and buttons.
function reveal(delay: number) {
  return {
    initial: { opacity: 0, y: 28, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

export default function HomePage() {
  return (
    <IntroSequence>
      <Navbar />
      <main>
        <section className="relative max-w-4xl mx-auto px-6 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
          <FloatingPortfolioCard
            className="top-4 left-0 lg:-left-8 xl:-left-16"
            image="/portofolio1.jpeg"
            alt="Portfolio return example"
            width={400}
            delay={INTRO_DONE_DELAY}
          />
          <FloatingPortfolioCard
            className="bottom-10 right-0 lg:-right-8 xl:-right-16"
            image="/portofolio2.jpeg"
            alt="Portfolio return example"
            width={460}
            delay={INTRO_DONE_DELAY + 0.15}
          />
          <FloatingPortfolioCard
            className="bottom-4 left-0 lg:-left-8 xl:-left-16 hidden lg:block"
            image="/portofolio4.jpeg"
            alt="Portfolio return example"
            width={380}
            delay={INTRO_DONE_DELAY + 0.45}
          />
          <FloatingPortfolioCard
            className="top-1/3 right-0 lg:-right-12 xl:-right-24 hidden xl:block"
            image="/portofolio3.jpeg"
            alt="Portfolio return example"
            width={360}
            delay={INTRO_DONE_DELAY + 0.3}
          />

          <motion.h1
            {...reveal(INTRO_DONE_DELAY)}
            className="font-display font-extrabold text-4xl md:text-6xl text-ink leading-[1.05]"
          >
            Learn the market.
            <br />
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Build your edge.
            </span>
          </motion.h1>

          <motion.p
            {...reveal(INTRO_DONE_DELAY + 0.15)}
            className="mt-6 text-muted text-lg max-w-xl mx-auto"
          >
            Practical education across crypto, stocks, and forex — structured
            without forcing a rigid path through it.
          </motion.p>

          <motion.div
            {...reveal(INTRO_DONE_DELAY + 0.3)}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Link
              href="/learning"
              className="px-6 py-3 rounded-sm bg-gold-gradient text-black font-medium"
            >
              Explore modules
            </Link>
            <Link
              href="/community"
              className="px-6 py-3 rounded-sm border border-border text-ink"
            >
              Join community
            </Link>
          </motion.div>
        </section>

        <div className="border-t border-border" />
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display font-semibold text-2xl text-ink">
              Featured modules
            </h2>
            <Link href="/learning" className="text-sm text-muted hover:text-ink">
              View all
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockModules.map((m, i) => (
              <motion.div
                key={m.slug}
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <ModuleCard mod={m} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-20 border-t border-border text-center">
          <p className="text-ink text-lg leading-relaxed">
            The community will always be free. Value should come from what we
            build and share — not from selling access to the community.
          </p>
        </section>

        <OutperformSection />
        <FreeOutlookCarousel />
        <RoadmapSection />
        <TestimonialMarquee />
        <JoinCTASection />
      </main>
    </IntroSequence>
  );
}