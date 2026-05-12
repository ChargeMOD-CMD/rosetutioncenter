import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const orb = useRef<HTMLDivElement>(null);
  const trail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (orb.current) {
        orb.current.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      }
      const el = e.target as HTMLElement;
      const interactive = el?.closest('a,button,[data-cursor="hover"]');
      orb.current?.classList.toggle("is-hovering", !!interactive);
    };
    const loop = () => {
      tx += (x - tx) * 0.18;
      ty += (y - ty) * 0.18;
      if (trail.current) {
        trail.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`;
      }
      requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    const raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={trail} className="cursor-trail" />
      <div ref={orb} className="cursor-orb" />
    </>
  );
}
