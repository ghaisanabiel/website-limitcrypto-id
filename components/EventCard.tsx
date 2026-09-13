import type { EventData } from "@/lib/mock-content";

const statusLabel: Record<string, string> = {
  upcoming: "Upcoming",
  live: "Live now",
  past: "Past",
};

export default function EventCard({ event }: { event: EventData }) {
  return (
    <div className="border border-border rounded-md p-5 hover:border-gold/40 transition-colors">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-[11px] text-gold tracking-wide">
          {event.status === "live" && (
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          )}
          {event.eventType}
        </span>
        <span className="text-xs text-muted">{event.date} · {event.time}</span>
      </div>
      <h3 className="mt-3 font-display font-semibold text-lg text-ink">{event.title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{event.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-muted">{event.locationOrUrl}</span>
        {event.status !== "past" ? (
          <button className="text-sm font-medium px-4 py-2 rounded-sm border border-border text-ink hover:border-gold/40 transition-colors">
            {event.status === "live" ? "Join now" : "Register"}
          </button>
        ) : (
          <span className="text-xs text-muted">{statusLabel[event.status]}</span>
        )}
      </div>
    </div>
  );
}