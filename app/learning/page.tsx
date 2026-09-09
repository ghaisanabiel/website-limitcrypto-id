import Navbar from "@/components/Navbar";
import ModuleCard from "@/components/ModuleCard";
import { mockModules, markets, difficulties, topics } from "@/lib/mock-data";

// TODO: replace mock data with a Prisma query once the DB is wired up:
// prisma.module.findMany({ where: { status: "PUBLISHED", ...filters }, include: { market: true, topics: true } })
// Access ("free"/"preview"/"purchased"/"locked") must be resolved server-side per the
// current session — never trust a client-supplied access value.

export default function LearningPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="font-display font-bold text-3xl text-ink">Learning</h1>
        <p className="mt-2 text-muted">
          Explore by market, level, or topic. There&apos;s no set order to follow.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <FilterGroup label="Market" options={markets} />
          <FilterGroup label="Level" options={difficulties} />
          <FilterGroup label="Topic" options={topics} />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mockModules.map((m) => (
            <ModuleCard key={m.slug} mod={m} />
          ))}
        </div>
      </main>
    </>
  );
}

function FilterGroup({ label, options }: { label: string; options: readonly string[] }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted mr-1">{label}</span>
      {options.map((o) => (
        <button
          key={o}
          className="text-xs px-3 py-1.5 rounded-sm border border-border text-muted hover:text-ink hover:border-gold/40 transition-colors"
        >
          {o}
        </button>
      ))}
    </div>
  );
}
