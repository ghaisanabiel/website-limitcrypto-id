"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import { mockEvents, type EventStatus } from "@/lib/mock-content";

const tabs: { key: EventStatus; label: string }[] = [
  { key: "upcoming", label: "Upcoming" },
  { key: "live", label: "Live" },
  { key: "past", label: "Past" },
];

export default function EventsPage() {
  const [active, setActive] = useState<EventStatus>("upcoming");
  const filtered = mockEvents.filter((e) => e.status === active);

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="font-display font-bold text-3xl text-ink">Events</h1>
        <p className="mt-2 text-muted">
          Market sessions, workshops, and open discussions.
        </p>

        <div className="mt-8 flex gap-2 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 text-sm border-b-2 -mb-px transition-colors ${
                active === t.key
                  ? "border-gold text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {filtered.length > 0 ? (
            filtered.map((e) => <EventCard key={e.slug} event={e} />)
          ) : (
            <p className="text-muted text-sm py-8 text-center">
              No {active} events right now.
            </p>
          )}
        </div>
      </main>
    </>
  );
}