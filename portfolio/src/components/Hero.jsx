import { useState, useEffect } from "react";
import { scrollTo } from "../utils/scrollTo";

function TypingText({ texts }) {
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const t = texts[idx]; let tm;
    if (!del && shown.length < t.length)       tm = setTimeout(() => setShown(t.slice(0, shown.length + 1)), 60);
    else if (!del && shown.length === t.length) tm = setTimeout(() => setDel(true), 2000);
    else if (del && shown.length > 0)           tm = setTimeout(() => setShown(shown.slice(0, -1)), 30);
    else { setDel(false); setIdx(i => (i + 1) % texts.length); }
    return () => clearTimeout(tm);
  }, [shown, del, idx, texts]);
  return <span style={{color:"var(--a2)"}}>{shown}<span className="cursor" /></span>;
}

export default function Hero({ dark }) {
  return (
    <section id="home" style={{
      minHeight:"100vh", display:"flex", alignItems:"center",
      position:"relative", overflow:"hidden",
      padding:"100px clamp(20px,8vw,120px) 60px",
    }}>
      <div className="mesh-bg">
        <div className="mesh-orb" style={{width:600,height:600,top:"-10%",left:"-15%",background:"var(--accent)",opacity:.16}} />
        <div className="mesh-orb" style={{width:400,height:400,bottom:"-5%",right:"-10%",background:"var(--a2)",opacity:.13}} />
        <div className="mesh-orb" style={{width:300,height:300,top:"40%",right:"20%",background:"var(--a3)",opacity:.1}} />
      </div>

      <div className="hero-layout" style={{
        display:"flex",alignItems:"center",justifyContent:"space-between",
        gap:48,width:"100%",maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1,
      }}>
        <div style={{flex:1,animation:"fadeUp .8s ease both"}}>
          <div className="code-badge" style={{marginBottom:20,display:"inline-block"}}>👋 Available for opportunities</div>
          <h1 style={{fontSize:"clamp(38px,7vw,72px)",fontWeight:800,lineHeight:1.08,letterSpacing:"-2px",marginBottom:14}}>
            Hi, I'm <span className="grad-text">Wasim Shaikh</span>
          </h1>
          <h2 style={{fontSize:"clamp(17px,2.8vw,26px)",fontWeight:400,color:"var(--text2)",marginBottom:14,lineHeight:1.5}}>
            <TypingText texts={["Computer Engineering Graduate","Full Stack Developer","Problem Solver","Software Developer"]} />
          </h2>
          <p style={{fontSize:15,color:"var(--text2)",maxWidth:460,lineHeight:1.85,marginBottom:36}}>
            Passionate about building beautiful, functional, and scalable web applications.
            Turning ideas into digital reality, one line of code at a time.
          </p>
          <div className="hero-cta" style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            <button className="btn-primary" onClick={() => scrollTo("experience")}>🚀 View My Work</button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>💬 Contact Me</button>
          </div>
          <div className="hero-stats" style={{display:"flex",gap:36,marginTop:48,flexWrap:"wrap"}}>
            {[["3+","Projects Built"],["1","Internship"],["8+","Technologies"]].map(([n,l]) => (
              <div key={l}>
                <div style={{fontSize:28,fontWeight:800,color:"var(--accent)"}}>{n}</div>
                <div style={{fontSize:13,color:"var(--text2)"}}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" style={{width:380,height:380,flexShrink:0,position:"relative",animation:"fadeIn 1s ease .3s both"}}>
          <div style={{position:"absolute",inset:-20,borderRadius:"50%",border:"2px dashed rgba(108,99,255,0.25)",animation:"spin 22s linear infinite"}} />
          <div style={{position:"absolute",inset:-42,borderRadius:"50%",border:"1px dashed rgba(255,107,157,0.18)",animation:"spin 35s linear infinite reverse"}} />
          <div style={{
            position:"absolute",inset:0,borderRadius:"62% 38% 46% 54% / 60% 44% 56% 40%",
            background: dark ? "linear-gradient(135deg,#1e2536,#2a1f3d)" : "linear-gradient(135deg,#ece9ff,#ffd6e7)",
            boxShadow:"0 20px 80px rgba(108,99,255,0.28)",animation:"float 6s ease-in-out infinite",
          }} />
          <svg viewBox="0 0 320 320" style={{position:"absolute",inset:0,width:"100%",height:"100%",animation:"float 5s ease-in-out infinite"}}>
            <rect x="80" y="90" width="160" height="110" rx="12" fill={dark?"#252d42":"#fff"} stroke="var(--accent)" strokeWidth="2"/>
            <rect x="90" y="100" width="140" height="90" rx="6" fill={dark?"#1a2033":"#f0eeff"}/>
            <rect x="100" y="115" width="60" height="7" rx="3" fill="var(--accent)" opacity=".7"/>
            <rect x="100" y="128" width="90" height="6" rx="3" fill="var(--a2)" opacity=".6"/>
            <rect x="110" y="141" width="70" height="6" rx="3" fill="var(--a3)" opacity=".6"/>
            <rect x="100" y="154" width="50" height="6" rx="3" fill="var(--accent)" opacity=".5"/>
            <rect x="100" y="167" width="80" height="6" rx="3" fill="var(--a2)" opacity=".4"/>
            <rect x="148" y="200" width="24" height="20" rx="4" fill={dark?"#252d42":"#ddd"}/>
            <rect x="124" y="218" width="72" height="8" rx="4" fill={dark?"#252d42":"#ccc"}/>
            <circle cx="60"  cy="140" r="24" fill={dark?"#1e2536":"#fff"} stroke="var(--a2)"    strokeWidth="1.5"/>
            <text x="60"  y="146" textAnchor="middle" fontSize="18">⚛️</text>
            <circle cx="262" cy="118" r="24" fill={dark?"#1e2536":"#fff"} stroke="var(--a3)"    strokeWidth="1.5"/>
            <text x="262" y="124" textAnchor="middle" fontSize="18">🐍</text>
            <circle cx="242" cy="212" r="22" fill={dark?"#1e2536":"#fff"} stroke="var(--accent)" strokeWidth="1.5"/>
            <text x="242" y="218" textAnchor="middle" fontSize="16">☕</text>
            <rect x="100" y="244" width="120" height="30" rx="6" fill={dark?"#252d42":"#e8e4ff"} stroke="var(--border)" strokeWidth="1"/>
            {[0,1,2,3].map(i=><rect key={i} x={110+i*26} y={250} width="20" height="8" rx="2" fill={dark?"#1e2536":"#d4ceff"}/>)}
          </svg>
          {[{x:"4%",y:"8%",text:"React ⚛️",d:"0s"},{x:"58%",y:"74%",text:"Java ☕",d:".6s"}].map(b=>(
            <div key={b.text} style={{
              position:"absolute",left:b.x,top:b.y,
              background:"var(--card)",border:"1px solid var(--border)",
              borderRadius:10,padding:"6px 14px",fontSize:12,fontWeight:600,
              boxShadow:"var(--shadow)",whiteSpace:"nowrap",
              animation:`float 4s ease-in-out ${b.d} infinite`,
            }}>{b.text}</div>
          ))}
        </div>
      </div>

      <div style={{
        position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",
        display:"flex",flexDirection:"column",alignItems:"center",gap:6,
        color:"var(--text2)",fontSize:11,animation:"fadeIn 2s ease 1.2s both",cursor:"pointer",
      }} onClick={()=>scrollTo("what-i-do")}>
        
      </div>
    </section>
  );
}