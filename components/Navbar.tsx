import Link from "next/link";

const links = [
  { href: "/learning", label: "Learning" },
  { href: "/events", label: "Events" },
  { href: "/community", label: "Community" },
  { href: "/channel", label: "Channel" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Plain <a>, not next/link — forces a real full-page navigation,
            bypassing Next's client-side router cache entirely. Only use
            this if the cache bug returns; otherwise Link is preferred. */}
        <a href="/" className="font-display font-bold text-ink">
          LIMITCRYPTO
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-muted hover:text-ink transition-colors">
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium px-4 py-2 rounded-sm bg-gold-gradient text-black"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}