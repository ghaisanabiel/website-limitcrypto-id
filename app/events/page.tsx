import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import { mockEvents } from "@/lib/mock-content";

// TODO: replace with prisma.event.findMany({ orderBy: { date: "asc" } }).
// "Register" should be visible to guests but clicking it while unauthenticated
// should route to /login (per spec: guests can view events, registration
// requires login) — wire that once auth is fully connected.

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="font-display font-bold text-3xl text-ink">Events</h1>
        <p className="mt-2 text-muted">
          Market sessions, workshops, and open discussions. Guests can browse —
          registering needs an account.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {mockEvents.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </main>
    </>
  );
}