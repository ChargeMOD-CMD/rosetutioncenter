import { BookOpen, Sparkles, GraduationCap, Atom, Sigma } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-aurora" />
      <div className="absolute inset-0 -z-10 opacity-[0.07] [background:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            AI-powered academic mentorship · Chennai
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Grow Smarter.
            <br />
            Learn{" "}
            <span className="text-gradient">Better.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A futuristic academic ecosystem where intelligent mentorship, cinematic
            study journeys and AI-driven progress unlock every learner's true potential.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#enroll"
              className="group relative inline-flex items-center gap-2 rounded-full bg-rose-gradient px-7 py-3.5 text-sm font-medium text-white shadow-[0_15px_40px_-12px_oklch(0.68_0.21_0/0.7)] transition-transform hover:scale-[1.04]"
            >
              Enroll Now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 text-sm font-medium backdrop-blur hover:border-accent/60"
            >
              <Sparkles className="h-4 w-4 text-accent" /> Meet ROSE AI Mentor
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {[
              ["1200+", "Students mentored"],
              ["96%", "Board pass rate"],
              ["12+", "Expert faculty"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl font-bold text-gradient">{k}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Orb scene */}
        <div className="relative md:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-6 rounded-full bg-rose-gradient opacity-30 blur-3xl" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative grid h-56 w-56 place-items-center rounded-full bg-rose-gradient ring-orb animate-pulse-glow">
                <span className="absolute inset-2 rounded-full border border-white/20" />
                <span className="absolute inset-6 rounded-full border border-white/10" />
                <GraduationCap className="relative h-20 w-20 text-white" />
              </div>
            </div>

            {/* Orbiting icons */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative h-0 w-0">
                {[BookOpen, Atom, Sigma, Sparkles].map((Icon, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      animation: `orbit ${14 + i * 3}s linear infinite`,
                      animationDelay: `${i * -3}s`,
                    }}
                  >
                    <div className="grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl glass">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating formula chips */}
            <div className="animate-float-slow absolute -left-2 top-6 rounded-xl glass px-3 py-2 text-xs">
              <span className="text-muted-foreground">E = </span>
              <span className="text-accent">mc²</span>
            </div>
            <div className="animate-float-med absolute -right-2 bottom-10 rounded-xl glass px-3 py-2 text-xs">
              <span className="text-muted-foreground">∫ </span>
              <span className="text-highlight">f(x)dx</span>
            </div>
            <div className="animate-float-slow absolute bottom-0 left-8 rounded-xl glass px-3 py-2 text-xs">
              <span className="text-muted-foreground">a² + b² = </span>
              <span className="text-accent">c²</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
