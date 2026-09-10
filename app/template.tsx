import PageTransition from "@/components/PageTransition";

// template.tsx (unlike layout.tsx) creates a fresh instance on every
// navigation — that's what actually makes the fade fire each time you
// change pages. Putting PageTransition in layout.tsx never re-triggered it
// because layouts are intentionally preserved across navigation.
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}