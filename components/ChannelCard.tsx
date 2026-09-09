import Link from "next/link";
import type { ChannelData } from "@/lib/mock-content";

export default function ChannelCard({ channel }: { channel: ChannelData }) {
  return (
    <Link
      href={channel.href}
      target="_blank"
      className="block border border-border rounded-md p-6 hover:border-gold/40 transition-colors"
    >
      <span className="text-[11px] text-gold tracking-wide">{channel.name}</span>
      <h3 className="mt-2 font-display font-semibold text-lg text-ink">
        {channel.handle}
      </h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{channel.description}</p>
    </Link>
  );
}