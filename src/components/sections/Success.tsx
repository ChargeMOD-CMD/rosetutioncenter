import { Quote, Star } from "lucide-react";

const stories = [
  {
    name: "Meera S.",
    grade: "Class 12 · State Board",
    score: "98.4%",
    quote: "ROSE AI nudged me every week. I went from struggling in Physics to scoring 99 in boards.",
  },
  {
    name: "Arjun N.",
    grade: "Class 10 · CBSE",
    score: "96.2%",
    quote: "The focused study mode and weekly tests built my confidence. The mentors are incredibly patient.",
  },
  {
    name: "Lakshmi V.",
    grade: "Class 11 · Bio",
    score: "Top 5%",
    quote: "Live dashboard kept me on track. Loved how my parents could quietly see my progress too.",
  },
];

export default function Success() {
  return (
    <section id="success" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-50" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Success Stories</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Real students. <span className="text-gradient">Real milestones.</span>
          </h2>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-3">
          {stories.map((s) => (
            <div key={s.name} className="tilt-card relative rounded-3xl glass p-7" data-cursor="hover">
              <Quote className="h-6 w-6 text-accent" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{s.quote}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                <div>
                  <div className="font-display text-sm font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.grade}</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-lg font-bold text-gradient">{s.score}</div>
                  <div className="flex justify-end gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
