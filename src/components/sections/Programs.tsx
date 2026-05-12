import { Calculator, FlaskConical, Atom, Dna, BookText, Globe2, Languages } from "lucide-react";

const subjects = [
  { icon: Calculator, name: "Mathematics", note: "From foundations to board-level mastery" },
  { icon: Atom, name: "Physics", note: "Concept-first problem solving" },
  { icon: FlaskConical, name: "Chemistry", note: "Reactions, theory, lab intuition" },
  { icon: Dna, name: "Biology", note: "Diagrams, systems & exam frameworks" },
  { icon: Languages, name: "English", note: "Reading, writing, communication" },
  { icon: Globe2, name: "Social Science", note: "History, civics, geography" },
  { icon: BookText, name: "Science", note: "Integrated middle-school science" },
];

const programs = [
  "Primary Coaching",
  "Middle School Tuition",
  "High School Coaching",
  "Higher Secondary",
  "Board Exam Prep",
  "Crash Courses",
  "Revision Programs",
  "One-to-One Mentoring",
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-60" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Programs & Subjects</span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Animated learning <span className="text-gradient">pathways</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose from board-aligned tracks, crash programs and personalised mentoring across
              every core subject. Each pathway is paced, tested and visualised.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
            {programs.map((p) => (
              <span
                key={p}
                className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {subjects.map((s, i) => (
            <div
              key={s.name}
              data-cursor="hover"
              className="tilt-card group relative overflow-hidden rounded-3xl glass p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-gradient opacity-20 blur-2xl transition-opacity group-hover:opacity-50" />
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary/70 ring-1 ring-border">
                  <s.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="font-display text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
              <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full bg-rose-gradient"
                  style={{ width: `${70 + ((i * 7) % 25)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
