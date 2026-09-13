export type EventStatus = "upcoming" | "live" | "past";

export type EventData = {
  slug: string;
  title: string;
  description: string;
  date: string; // display string for now, e.g. "Sep 20, 2026"
  time: string;
  eventType: string;
  locationOrUrl: string;
  status: EventStatus;
};

export const mockEvents: EventData[] = [
  {
    slug: "weekly-market-analysis",
    title: "Weekly Market Analysis",
    description:
      "Live read of crypto, stocks, and forex charts — structure, liquidity, and what's actually worth watching this week.",
    date: "Sep 14, 2026",
    time: "20:00 WIB",
    eventType: "Market Analysis Session",
    locationOrUrl: "Online",
    status: "live",
  },
  {
    slug: "risk-management-workshop",
    title: "Risk Management Workshop",
    description:
      "Position sizing, stop placement, and the math behind why most blown accounts come from sizing, not entries.",
    date: "Sep 21, 2026",
    time: "19:30 WIB",
    eventType: "Trading Workshop",
    locationOrUrl: "Online",
    status: "upcoming",
  },
  {
    slug: "community-ama",
    title: "Community AMA",
    description: "Open floor — ask anything about the platform, the bot, or trading in general.",
    date: "Sep 27, 2026",
    time: "21:00 WIB",
    eventType: "AMA",
    locationOrUrl: "Online",
    status: "upcoming",
  },
  {
    slug: "coinfest-asia-recap",
    title: "Coinfest Asia Recap",
    description: "What we shared on stage, and the questions the audience asked afterward.",
    date: "Aug 21, 2026",
    time: "—",
    eventType: "Community Meetup",
    locationOrUrl: "Bali",
    status: "past",
  },
];

export type ChannelData = {
  name: string;
  handle: string;
  description: string;
  href: string;
};

export const mockChannels: ChannelData[] = [
  {
    name: "TikTok",
    handle: "@ghaisanabiel",
    description: "Build-in-public bot updates, market commentary, and short breakdowns.",
    href: "https://www.tiktok.com/@ghaisanabiel",
  },
  {
    name: "YouTube",
    handle: "Limitcrypto",
    description: "Longer-form breakdowns and workshop recordings.",
    href: "#",
  },
  {
    name: "Telegram",
    handle: "Limitcrypto Community",
    description: "Where the free community actually lives — day-to-day discussion.",
    href: "#",
  },
  {
    name: "X",
    handle: "@ghaisanabiel",
    description: "Fast takes on price action and news as it happens.",
    href: "#",
  },
];