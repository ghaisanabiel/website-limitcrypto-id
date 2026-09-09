import type { ModuleCardData } from "@/components/ModuleCard";

export const mockModules: ModuleCardData[] = [
  {
    slug: "understanding-liquidity",
    title: "Understanding Liquidity",
    description:
      "How liquidity pools form on a chart and why price gets pulled toward them.",
    market: "Crypto",
    difficulty: "Advanced",
    topic: "Technical",
    durationMinutes: 18,
    access: "locked",
  },
  {
    slug: "reading-bitcoin-narrative",
    title: "Reading Bitcoin Narrative",
    description: "How to separate signal from noise in crypto market narratives.",
    market: "Crypto",
    difficulty: "Beginner",
    topic: "Narrative",
    durationMinutes: 12,
    access: "free",
  },
  {
    slug: "understanding-earnings",
    title: "Understanding Earnings",
    description: "What actually moves a stock on earnings day, and what doesn't.",
    market: "Stocks",
    difficulty: "Intermediate",
    topic: "Fundamental",
    durationMinutes: 15,
    access: "preview",
  },
  {
    slug: "market-structure-basics",
    title: "Market Structure & Liquidity",
    description:
      "Understand how liquidity and market structure influence price movement.",
    market: "Crypto",
    difficulty: "Advanced",
    topic: "Technical",
    durationMinutes: 12,
    access: "purchased",
  },
];

export const markets = ["Crypto", "Stocks", "Forex"] as const;
export const difficulties = ["Beginner", "Intermediate", "Advanced"] as const;
export const topics = [
  "Technical",
  "Fundamental",
  "Narrative",
  "Trend",
  "Strategy",
  "Psychology",
  "Risk Management",
] as const;
