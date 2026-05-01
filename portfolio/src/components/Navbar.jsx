import { scrollTo } from "../utils/scrollTo";

export default function Navbar({ dark, toggleTheme, scrolled, menuOpen, setMenuOpen, navLinks }) {
  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:1000,
      background: scrolled ? (dark ? "rgba(13,17,23,0.93)" : "rgba(244,246,251,0.93)") : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition:"all .4s",
      padding:"0 clamp(20px,5vw,80px)",
      display:"flex",alignItems:"center",justifyContent:"space-between",height:68,
    }}>
      <div style={{fontFamily:"'JetBrains Mono',monospace",fontWeight:700,fontSize:20,cursor:"pointer"}}
        onClick={() => scrollTo("home")}>
        {/* <span style={{color:"var(--accent)"}}>{"<"}</span> */}
        <span>Wasim Shaikh </span>
        {/* <span style={{color:"var(--a2)"}}>{"/>"}</span> */}
      </div>

      <div className="nav-desktop" style={{display:"flex",gap:36,alignItems:"center"}}>
        {navLinks.map(l => (
          <span key={l} className="nav-link" onClick={() => scrollTo(l)}>
            {l === "what-i-do" ? "What I Do" : l.charAt(0).toUpperCase() + l.slice(1)}
          </span>
        ))}
      </div>

      <div style={{display:"flex",alignItems:"center",gap:14}}>
        <button onClick={toggleTheme} aria-label="Toggle theme" style={{
          background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:99,
          width:54,height:29,cursor:"pointer",display:"flex",alignItems:"center",padding:"3px 4px",
        }}>
          <div style={{
            width:21,height:21,borderRadius:"50%",
            background:"linear-gradient(135deg,var(--accent),var(--a2))",
            transform: dark ? "translateX(25px)" : "translateX(0)",
            transition:"transform .3s",
            display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,
          }}>{dark ? "🌙" : "☀️"}</div>
        </button>
        <button onClick={() => setMenuOpen(m => !m)} className="menu-btn"
          style={{display:"none",background:"none",border:"none",cursor:"pointer",color:"var(--text)",fontSize:24,padding:4}}
          aria-label="Menu">{menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          position:"fixed",top:68,left:0,right:0,
          background: dark ? "rgba(13,17,23,0.97)" : "rgba(244,246,251,0.97)",
          backdropFilter:"blur(20px)",borderBottom:"1px solid var(--border)",
          padding:"20px 32px",display:"flex",flexDirection:"column",gap:24,
          animation:"fadeIn .2s ease",zIndex:999,
        }}>
          {navLinks.map(l => (
            <span key={l} className="nav-link" style={{fontSize:17}} onClick={() => { scrollTo(l); setMenuOpen(false); }}>
              {l === "what-i-do" ? "What I Do" : l.charAt(0).toUpperCase() + l.slice(1)}
            </span>
          ))}
        </div>
      )}
      <style>{`.menu-btn{display:none!important;}@media(max-width:768px){.menu-btn{display:flex!important;}}`}</style>
    </nav>
  );
}