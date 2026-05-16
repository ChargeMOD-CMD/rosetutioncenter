import { useState } from "react";
import { Bot, X, Send } from "lucide-react";

const suggestions = [
  "Recommend a study plan",
  "Help with board exam prep",
  "Book a free counselling",
  "Track my progress",
];

export default function ChatbotOrb() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<{ from: "ai" | "me"; text: string }[]>([
    { from: "ai", text: "Hi! I'm ROSE — your AI Learning Mentor. How can I help you grow today?" },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { from: "me", text: t }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          from: "ai",
          text:
            "Lovely — I've noted that. A Rose mentor will reach out shortly, and meanwhile I can suggest a personalised pathway. Try sharing your class and target exam.",
        },
      ]);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open AI mentor"
        className="fixed bottom-6 right-6 z-50 grid h-16 w-16 place-items-center rounded-full bg-rose-gradient ring-orb animate-pulse-glow"
        data-cursor="hover"
      >
        <span className="absolute inset-0 rounded-full bg-rose-gradient opacity-50 blur-xl" />
        {open ? <X className="relative h-6 w-6 text-white" /> : <Bot className="relative h-6 w-6 text-white" />}
      </button>

      {open && (
        <div className="fixed bottom-28 right-6 z-50 w-[min(380px,calc(100vw-2rem))] overflow-hidden rounded-3xl glass shadow-2xl">
          <div className="flex items-center gap-3 border-b border-border/60 p-4">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-rose-gradient ring-glow">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold">ROSE AI Learning Mentor</div>
              <div className="text-[11px] text-muted-foreground">Online · Holographic mode</div>
            </div>
          </div>
          <div className="flex max-h-72 flex-col gap-2 overflow-y-auto p-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                  m.from === "ai"
                    ? "bg-secondary/80 text-foreground"
                    : "ml-auto bg-rose-gradient text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-border/60 p-3">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
              >
                {s}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border/60 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask ROSE anything…"
              className="flex-1 rounded-full border border-border bg-background/60 px-4 py-2 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="grid h-9 w-9 place-items-center rounded-full bg-rose-gradient text-white"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
