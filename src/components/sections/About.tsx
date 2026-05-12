import { Target, HeartHandshake, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Teaching Philosophy",
    body: "Concept-first learning over rote memorisation. We teach the why before the what.",
  },
  {
    icon: HeartHandshake,
    title: "Student Mission",
    body: "Every learner gets a personal mentor, a paced plan and progress visibility for parents.",
  },
  {
    icon: Rocket,
    title: "Growth Strategy",
    body: "Weekly diagnostics, AI-assisted analytics and confidence-building feedback loops.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">About the Centre</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Where intelligent learning meets <span className="text-gradient">emotional motivation</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Rose Tuition Centre is a modern academic coaching studio in Chennai, built around
            concept clarity, student confidence and structured, measurable growth.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="reveal tilt-card relative rounded-3xl glass p-7"
              data-cursor="hover"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-gradient ring-glow">
                <p.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 [background:radial-gradient(60%_60%_at_50%_0%,oklch(0.68_0.21_0/0.18),transparent_70%)] group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
