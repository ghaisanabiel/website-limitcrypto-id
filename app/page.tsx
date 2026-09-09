import IntroSequence from "@/components/IntroSequence";
import Navbar from "@/components/Navbar";
import ModuleCard from "@/components/ModuleCard";
import FloatingPortfolioCard from "@/components/FloatingPortfolioCard";
import { mockModules } from "@/lib/mock-data";
import Link from "next/link";

// Floating cards pop in ~3.3s after load — that's roughly when the intro
// overlay finishes sliding up (see IntroSequence timings). Adjust the delay
// prop below if you change the intro duration.
const INTRO_DONE_DELAY = 3.3;

export default function HomePage() {
  return (
    <IntroSequence>
      <Navbar />
      <main>
        <section className="relative max-w-4xl mx-auto px-6 pt-24 pb-20 text-center overflow-hidden">
          <FloatingPortfolioCard
            className="top-6 left-0 lg:-left-16"
            label="PnL %"
            value="+142.6%"
            sub="BTC · Long"
            delay={INTRO_DONE_DELAY}
          />
          <FloatingPortfolioCard
            className="bottom-10 right-0 lg:-right-16"
            label="Module Progress"
            value="12 / 24"
            sub="Lessons completed"
            positive={false}
            delay={INTRO_DONE_DELAY + 0.2}
          />

          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ink leading-[1.05]">
            Learn the market.
            <br />
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Build your edge.
            </span>
          </h1>
          <p className="mt-6 text-muted text-lg max-w-xl mx-auto">
            Practical education across crypto, stocks, and forex — structured
            without forcing a rigid path through it.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
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
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display font-semibold text-2xl text-ink">
              Featured modules
            </h2>
            <Link href="/learning" className="text-sm text-muted hover:text-ink">
              View all
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockModules.map((m) => (
              <ModuleCard key={m.slug} mod={m} />
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-20 border-t border-border text-center">
          <p className="text-ink text-lg leading-relaxed">
            The community will always be free. Value should come from what we
            build and share — not from selling access to the community.
          </p>
        </section>
      </main>
    </IntroSequence>
  );
}