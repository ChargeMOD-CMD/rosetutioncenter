import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const programs = [
  "Primary Coaching",
  "Middle School Tuition",
  "High School Coaching",
  "Higher Secondary",
  "Board Exam Prep",
  "Crash Course",
];

export default function Enroll() {
  const [submitted, setSubmitted] = useState(false);
  const [program, setProgram] = useState(programs[2]);

  return (
    <section id="enroll" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Enrollment</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Book a <span className="text-gradient">free counselling</span> session.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Tell us about your learner and goals. A Rose mentor will design a personalised
            roadmap and a 30-minute walkthrough — at no cost.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Small batch attention with personalised mentoring",
              "Weekly diagnostic tests and parent updates",
              "AI-assisted study planning and focus mode",
              "Smart, AC classrooms with hybrid support",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="reveal relative overflow-hidden rounded-3xl glass p-7 ring-glow"
        >
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-rose-gradient opacity-25 blur-3xl" />
          {submitted ? (
            <div className="grid place-items-center py-16 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-rose-gradient">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">Request received</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Thank you. A Rose mentor will reach you within 24 hours to schedule the free session.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-4">
                <Field label="Student name" name="name" placeholder="e.g. Aarav R." />
                <Field label="Phone / WhatsApp" name="phone" placeholder="+91 ..." />
                <Field label="Email" name="email" type="email" placeholder="parent@example.com" />
                <div>
                  <label className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">
                    Program
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {programs.map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setProgram(p)}
                        data-cursor="hover"
                        className={`rounded-full border px-3 py-1.5 text-xs transition ${
                          program === p
                            ? "border-accent bg-rose-gradient text-white"
                            : "border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <Field
                  label="Tell us about your goals (optional)"
                  name="notes"
                  textarea
                  placeholder="Class, board, focus areas…"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-gradient px-6 py-3.5 text-sm font-medium text-white shadow-[0_15px_40px_-12px_oklch(0.68_0.21_0/0.7)] transition-transform hover:scale-[1.02]"
              >
                Request free counselling →
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      {textarea ? (
        <textarea id={name} name={name} placeholder={placeholder} rows={3} className={cls} />
      ) : (
        <input id={name} name={name} type={type} placeholder={placeholder} className={cls} />
      )}
    </div>
  );
}
