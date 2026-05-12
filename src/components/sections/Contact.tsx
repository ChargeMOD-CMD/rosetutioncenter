import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const items = [
  { icon: Phone, label: "Call", value: "+91 9025191524", href: "tel:+919025191524" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 9025191524", href: "https://wa.me/919025191524" },
  { icon: Mail, label: "Email", value: "info@rosetuitioncentre.com", href: "mailto:info@rosetuitioncentre.com" },
  { icon: MapPin, label: "Visit", value: "Chennai, Tamil Nadu, India", href: "#" },
  { icon: Clock, label: "Hours", value: "Weekdays 4–9 PM · Weekends 9 AM–6 PM", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Contact</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Let's <span className="text-gradient">grow together</span>.
          </h2>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              data-cursor="hover"
              className="tilt-card group rounded-3xl glass p-6"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-gradient ring-glow">
                  <it.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.label}</div>
                  <div className="mt-0.5 font-display text-sm font-semibold">{it.value}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
