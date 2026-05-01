import { useState, useEffect } from "react";

const DARK = "dark";
const LIGHT = "light";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("wasim-theme") || DARK; } catch { return DARK; }
  });
  useEffect(() => {
    try { localStorage.setItem("wasim-theme", theme); } catch {}
  }, [theme]);
  return [theme, () => setTheme(t => t === DARK ? LIGHT : DARK)];
}