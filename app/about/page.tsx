import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="font-display font-bold text-3xl text-ink">About</h1>

        <p className="mt-6 text-ink text-lg leading-relaxed">
          Limitcrypto is a trading education platform covering crypto, stocks,
          and forex — built for people learning to understand markets, not
          chase shortcuts.
        </p>

        <div className="mt-10 border-t border-border pt-8">
          <h2 className="font-display font-semibold text-xl text-ink">
            What this is
          </h2>
          <p className="mt-3 text-muted leading-relaxed">
            Modules across three markets, tagged by difficulty and topic —
            technical, fundamental, narrative, risk management, and more.
            There&apos;s no forced order. Explore what&apos;s relevant to you,
            whether that&apos;s a beginner narrative breakdown or an advanced
            liquidity concept.
          </p>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <h2 className="font-display font-semibold text-xl text-ink">
            What this isn&apos;t
          </h2>
          <p className="mt-3 text-muted leading-relaxed">
            No promises of guaranteed profits, no "easy money" pitch. Trading
            involves real risk. What we can offer is a clearer understanding
            of how markets actually work — the rest is discipline and time.
          </p>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <h2 className="font-display font-semibold text-xl text-ink">
            The community
          </h2>
          <p className="mt-3 text-muted leading-relaxed">
            Always free. Premium modules fund the platform — being part of
            the community never requires buying anything.
          </p>
        </div>
      </main>
    </>
  );
}