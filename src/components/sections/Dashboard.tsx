import { TrendingUp, Target, Brain, Trophy } from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "Weekly Growth", value: "+18%", tint: "text-accent" },
  { icon: Target, label: "Concept Mastery", value: "92%", tint: "text-highlight" },
  { icon: Brain, label: "Focus Score", value: "A+", tint: "text-accent" },
  { icon: Trophy, label: "Mock Rank", value: "#12", tint: "text-highlight" },
];

const subjectsBars = [
  { name: "Mathematics", value: 92 },
  { name: "Physics", value: 86 },
  { name: "Chemistry", value: 78 },
  { name: "Biology", value: 81 },
  { name: "English", value: 89 },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">AI Student Dashboard</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Live progress, <span className="text-gradient">visualised intelligently</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            A real-time view of your learning — concept strength, time on task, mock ranks and
            personalised next-step recommendations from ROSE AI.
          </p>
        </div>

        <div className="reveal mt-14 overflow-hidden rounded-[2rem] glass p-2 ring-glow">
          <div className="rounded-[1.6rem] border border-border bg-background/60 p-6 md:p-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Dashboard</div>
                <div className="mt-1 font-display text-2xl font-semibold">Aarav · Class 11 · Science</div>
              </div>
              <span className="rounded-full bg-rose-gradient px-3 py-1 text-xs text-white">Live</span>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card/60 p-5">
                  <s.icon className={`h-5 w-5 ${s.tint}`} />
                  <div className="mt-4 font-display text-3xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 text-sm font-medium">Subject mastery</div>
                <ul className="space-y-3">
                  {subjectsBars.map((s) => (
                    <li key={s.name}>
                      <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                        <span>{s.name}</span>
                        <span>{s.value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full bg-rose-gradient" style={{ width: `${s.value}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card/60 p-5">
                <div className="text-sm font-medium">ROSE AI · Today's insight</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Your Chemistry concept-recall dropped 6% this week. I've queued 3 micro-revisions
                  on chemical bonding and a 12-minute focused practice set. Goal: regain 90%+ by Friday.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  {["Bonding revision", "Mock #04", "Focus block"].map((t) => (
                    <span key={t} className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
