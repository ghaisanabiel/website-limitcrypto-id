import Link from "next/link";

type Access = "free" | "preview" | "purchased" | "locked";

export type ModuleCardData = {
  slug: string;
  title: string;
  description: string;
  market: "Crypto" | "Stocks" | "Forex";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  topic: string;
  durationMinutes: number;
  access: Access;
};

const accessLabel: Record<Access, string> = {
  free: "Free",
  preview: "Preview",
  purchased: "Owned",
  locked: "Premium",
};

export default function ModuleCard({ mod }: { mod: ModuleCardData }) {
  return (
    <Link
      href={`/learning/${mod.slug}`}
      className="group block border border-border rounded-md overflow-hidden hover:border-gold/40 transition-colors"
    >
      <div className="relative aspect-video bg-surface">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
        <span className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-sm bg-black/60 text-ink border border-border">
          {accessLabel[mod.access]}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-display font-semibold text-ink leading-snug">
          {mod.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">
          {mod.description}
        </p>

        <div className="mt-4 flex items-center gap-3 text-[11px] text-muted">
          <span>{mod.market}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{mod.topic}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{mod.difficulty}</span>
          <span className="ml-auto">{mod.durationMinutes} min</span>
        </div>
      </div>
    </Link>
  );
}
