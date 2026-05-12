import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#dashboard", label: "AI Dashboard" },
  { href: "#faculty", label: "Faculty" },
  { href: "#success", label: "Success" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 ${scrolled ? "glass rounded-2xl" : ""}`}>
        <nav className="flex items-center justify-between gap-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-rose-gradient ring-glow">
              <span className="font-display text-lg font-bold text-white">R</span>
              <span className="absolute -inset-1 rounded-2xl bg-rose-gradient opacity-30 blur-md" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold tracking-wide">Rose Tuition</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Centre</div>
            </div>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#enroll"
            className="group relative inline-flex items-center gap-2 rounded-full bg-rose-gradient px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_oklch(0.68_0.21_0/0.7)] transition-transform hover:scale-[1.03]"
          >
            Enroll Now
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
