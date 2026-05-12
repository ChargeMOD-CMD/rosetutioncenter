const faculty = [
  { name: "Mrs. Anitha R.", role: "Mathematics Lead", exp: "14 yrs", initials: "AR" },
  { name: "Dr. Suresh K.", role: "Physics Mentor", exp: "12 yrs", initials: "SK" },
  { name: "Mrs. Divya P.", role: "Chemistry Coach", exp: "10 yrs", initials: "DP" },
  { name: "Mr. Karthik V.", role: "Biology Specialist", exp: "9 yrs", initials: "KV" },
];

export default function Faculty() {
  return (
    <section id="faculty" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Faculty & Mentors</span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Teachers who <span className="text-gradient">mentor minds</span>.
            </h2>
          </div>
          <p className="md:max-w-sm text-sm text-muted-foreground">
            A small, hand-picked faculty with proven board results and a calm, confidence-building
            teaching style. Every student gets time, attention and a personal study plan.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f) => (
            <div
              key={f.name}
              data-cursor="hover"
              className="tilt-card group relative overflow-hidden rounded-3xl glass p-6"
            >
              <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full bg-rose-gradient ring-glow">
                <span className="font-display text-3xl font-semibold text-white">{f.initials}</span>
                <span className="absolute -inset-2 rounded-full bg-rose-gradient opacity-30 blur-xl transition-opacity group-hover:opacity-60" />
              </div>
              <h3 className="mt-6 text-center font-display text-lg font-semibold">{f.name}</h3>
              <p className="text-center text-xs text-muted-foreground">{f.role}</p>
              <div className="mt-4 flex items-center justify-center">
                <span className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
                  {f.exp} experience
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
