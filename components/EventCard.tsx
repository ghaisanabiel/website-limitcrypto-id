import type { EventData } from "@/lib/mock-content";

export default function EventCard({ event }: { event: EventData }) {
  return (
    <div className="border border-border rounded-md p-5 hover:border-gold/40 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-gold tracking-wide">{event.eventType}</span>
        <span className="text-xs text-muted">{event.date} · {event.time}</span>
      </div>
      <h3 className="mt-3 font-display font-semibold text-lg text-ink">{event.title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{event.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-muted">{event.locationOrUrl}</span>
        <button className="text-sm font-medium px-4 py-2 rounded-sm border border-border text-ink hover:border-gold/40 transition-colors">
          Register
        </button>
      </div>
    </div>
  );
}