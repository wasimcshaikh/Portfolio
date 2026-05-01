import { useState, useEffect } from "react";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dark = theme === "dark";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = ["home", "what-i-do", "skills", "education", "experience", "contact"];

  const cssVars = {
    "--bg":     dark ? "#0d1117" : "#f4f6fb",
    "--bg2":    dark ? "#161b27" : "#ffffff",
    "--bg3":    dark ? "#1e2536" : "#eaecf5",
    "--text":   dark ? "#e8ecf4" : "#1a1d2e",
    "--text2":  dark ? "#7c879e" : "#555d6e",
    "--accent": "#6c63ff",
    "--a2":     "#ff6b9d",
    "--a3":     "#00d4aa",
    "--a4":     "#f7b731",
    "--border": dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
    "--card":   dark ? "#1a2033" : "#ffffff",
    "--shadow": dark ? "0 8px 40px rgba(0,0,0,0.5)" : "0 8px 40px rgba(108,99,255,0.12)",
    fontFamily: "'Sora', sans-serif",
    background: "var(--bg)",
    color:      "var(--text)",
    transition: "background .4s, color .4s",
    minHeight:  "100vh",
    overflowX:  "hidden",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}

        @keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}

        .cursor{display:inline-block;width:3px;height:1em;background:var(--accent);margin-left:2px;animation:blink 1s infinite;vertical-align:middle;}
        .grad-text{background:linear-gradient(135deg,var(--accent),var(--a2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .grad-text2{background:linear-gradient(135deg,var(--a3),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .hover-lift{transition:transform .3s,box-shadow .3s;}
        .hover-lift:hover{transform:translateY(-7px);box-shadow:0 20px 50px rgba(108,99,255,0.22);}
        .social-icon{display:flex;align-items:center;justify-content:center;width:50px;height:50px;border-radius:50%;border:2px solid var(--border);color:var(--text2);font-size:20px;transition:all .3s;text-decoration:none;}
        .social-icon:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-5px) scale(1.12);background:rgba(108,99,255,0.1);}
        .skill-pill{display:inline-flex;align-items:center;gap:6px;padding:6px 16px;border-radius:99px;border:1px solid var(--border);font-size:13px;font-weight:500;transition:all .25s;cursor:default;}
        .skill-pill:hover{background:var(--accent);color:#fff;border-color:var(--accent);transform:scale(1.07);}
        ::-webkit-scrollbar{width:5px;}
        ::-webkit-scrollbar-thumb{background:var(--accent);border-radius:99px;}
        .mesh-bg{position:absolute;inset:0;overflow:hidden;z-index:0;pointer-events:none;}
        .mesh-orb{position:absolute;border-radius:50%;filter:blur(80px);}
        .nav-link{font-size:13px;font-weight:600;color:var(--text2);cursor:pointer;transition:color .2s;letter-spacing:.6px;text-transform:uppercase;}
        .nav-link:hover{color:var(--accent);}
        .code-badge{font-family:'JetBrains Mono',monospace;font-size:11px;padding:5px 12px;border-radius:6px;background:var(--bg3);color:var(--accent);letter-spacing:.5px;}
        .btn-primary{display:inline-flex;align-items:center;gap:8px;padding:13px 30px;border-radius:99px;background:linear-gradient(135deg,var(--accent),var(--a2));color:#fff;font-weight:700;font-size:15px;cursor:pointer;border:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 24px rgba(108,99,255,0.45);}
        .btn-primary:hover{transform:translateY(-3px);box-shadow:0 10px 32px rgba(108,99,255,0.55);}
        .btn-outline{display:inline-flex;align-items:center;gap:8px;padding:13px 30px;border-radius:99px;background:transparent;color:var(--text);font-weight:700;font-size:15px;cursor:pointer;border:2px solid var(--border);transition:all .2s;}
        .btn-outline:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-3px);}
        .section-title{font-size:clamp(28px,5vw,44px);font-weight:800;letter-spacing:-1.5px;}
        .contact-item{display:flex;align-items:center;gap:16px;padding:18px 24px;border-radius:14px;background:var(--card);border:1px solid var(--border);transition:all .3s;text-decoration:none;color:var(--text);}
        .contact-item:hover{border-color:var(--accent);transform:translateX(8px);}
        .skill-tool-card{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px 10px;border-radius:16px;background:var(--card);border:1px solid var(--border);cursor:default;transition:all .3s;position:relative;overflow:hidden;min-height:110px;}
        .skill-tool-card::after{content:'';position:absolute;inset:0;border-radius:16px;background:linear-gradient(135deg,var(--accent),var(--a2));opacity:0;transition:opacity .3s;z-index:0;}
        .skill-tool-card:hover::after{opacity:.08;}
        .skill-tool-card:hover{transform:translateY(-6px) scale(1.04);border-color:var(--accent);box-shadow:0 14px 36px rgba(108,99,255,0.22);}
        .skill-tool-card > *{position:relative;z-index:1;}
        .skill-emoji{transition:transform .3s;font-size:30px;display:block;line-height:1;}
        .skill-tool-card:hover .skill-emoji{transform:scale(1.22) rotate(-8deg);}
        .skill-tool-name{font-size:11px;font-weight:700;text-align:center;color:var(--text2);letter-spacing:.3px;line-height:1.3;}
        .skill-tool-level{font-size:9px;font-family:'JetBrains Mono',monospace;font-weight:700;padding:2px 8px;border-radius:99px;background:rgba(108,99,255,0.12);color:var(--accent);}
        .cat-strip{display:flex;align-items:center;gap:12px;margin-bottom:18px;}
        .cat-strip-line{flex:1;height:1px;background:var(--border);}
        .tl-dot{position:absolute;left:-9px;top:22px;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;z-index:2;}
        @media(max-width:900px){.wid-cards{grid-template-columns:1fr!important;}.exp-wrap{flex-direction:column!important;}.exp-intern{flex:unset!important;width:100%!important;}}
        @media(max-width:768px){.nav-desktop{display:none!important;}.hero-layout{flex-direction:column-reverse!important;text-align:center;}.hero-cta{justify-content:center!important;}.hero-stats{justify-content:center!important;}.hero-visual{width:260px!important;height:260px!important;}.skill-grid-inner{grid-template-columns:repeat(3,1fr)!important;}.contact-grid{grid-template-columns:1fr!important;}.tech-grid-8{grid-template-columns:repeat(4,1fr)!important;}}
        @media(max-width:480px){.skill-grid-inner{grid-template-columns:repeat(2,1fr)!important;}.tech-grid-8{grid-template-columns:repeat(3,1fr)!important;}}
      `}</style>

      <div style={cssVars}>
        <Navbar dark={dark} toggleTheme={toggleTheme} scrolled={scrolled}
          menuOpen={menuOpen} setMenuOpen={setMenuOpen} navLinks={navLinks} />
        <Hero dark={dark} />
        <WhatIDo />
        <Skills />
        <Education dark={dark} />
        <Experience />
        <Contact />
        <footer style={{
          textAlign:"center", padding:"28px 24px", fontSize:13,
          color:"var(--text2)", borderTop:"1px solid var(--border)",
        }}>
          © 2026 <span style={{color:"var(--accent)",fontWeight:700}}>Wasim</span>. All rights reserved. Built with ❤️ in React
        </footer>
      </div>
    </>
  );
}