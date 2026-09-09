import Navbar from "@/components/Navbar";
import Link from "next/link";
import { mockChannels } from "@/lib/mock-content";

export default function CommunityPage() {
  const telegram = mockChannels.find((c) => c.name === "Telegram");

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="font-display font-bold text-3xl text-ink">Community</h1>
        <p className="mt-4 text-ink text-lg leading-relaxed">
          The community will always be free. Value should come from what we
          build and share — not from selling access to the community.
        </p>

        <div className="mt-10 border-t border-border pt-8">
          <h2 className="font-display font-semibold text-xl text-ink">
            What happens here
          </h2>
          <p className="mt-3 text-muted leading-relaxed">
            Day-to-day discussion, market talk, and questions between people
            learning the same markets. Premium modules fund the platform —
            being part of the community doesn't require buying anything.
          </p>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <h2 className="font-display font-semibold text-xl text-ink">
            Where to join
          </h2>
          <p className="mt-3 text-muted">
            The community lives on Telegram for now.
          </p>
          {telegram && (
            <Link
              href={telegram.href}
              className="mt-4 inline-block px-6 py-3 rounded-sm bg-gold-gradient text-black font-medium"
            >
              Join on Telegram
            </Link>
          )}
        </div>
      </main>
    </>
  );
}