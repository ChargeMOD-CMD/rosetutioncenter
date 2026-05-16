import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 md:py-3" : "py-4 md:py-6"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 md:px-6 ${scrolled ? "glass rounded-2xl" : ""}`}>
        <nav className="flex items-center justify-between gap-4 py-3">
          <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
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

          <div className="flex items-center gap-2">
            <a
              href="#enroll"
              className="group relative hidden sm:inline-flex items-center gap-2 rounded-full bg-rose-gradient px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_-10px_oklch(0.68_0.21_0/0.7)] transition-transform hover:scale-[1.03] md:px-5 md:py-2.5"
            >
              Enroll Now
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl glass md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] z-40 mx-4 origin-top rounded-2xl glass p-5 transition-all duration-300 ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base text-foreground/90 hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#enroll"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-rose-gradient px-5 py-3 text-sm font-medium text-white"
            >
              Enroll Now →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
