import Navbar from "@/components/Navbar";
import ChannelCard from "@/components/ChannelCard";
import { mockChannels } from "@/lib/mock-content";

export default function ChannelPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="font-display font-bold text-3xl text-ink">Channel</h1>
        <p className="mt-2 text-muted">Where the content lives outside the platform.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {mockChannels.map((c) => (
            <ChannelCard key={c.name} channel={c} />
          ))}
        </div>
      </main>
    </>
  );
}