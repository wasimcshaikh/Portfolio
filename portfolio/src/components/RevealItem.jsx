import { useState, useEffect, useRef } from "react";

export default function RevealItem({ dir = "up", delay = 0, children, style: extraStyle = {}, className = "" }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const base = { transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s` };
  const hidden = {
    up:    { opacity: 0, transform: "translateY(48px)" },
    down:  { opacity: 0, transform: "translateY(-48px)" },
    left:  { opacity: 0, transform: "translateX(-64px)" },
    right: { opacity: 0, transform: "translateX(64px)" },
    scale: { opacity: 0, transform: "scale(0.82)" },
  }[dir] || { opacity: 0 };
  const shown = { opacity: 1, transform: "none" };

  return (
    <div ref={ref} className={className} style={{ ...base, ...(vis ? shown : hidden), ...extraStyle }}>
      {children}
    </div>
  );
}