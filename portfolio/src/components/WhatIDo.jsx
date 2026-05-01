import useReveal from "../hooks/useReveal";
import RevealItem from "./RevealItem";
import { widCards, widDirs, techRow } from "../constants/data";

export default function WhatIDo() {
  const [titleRef, titleVis] = useReveal();

  return (
    <section id="what-i-do" style={{padding:"100px clamp(20px,8vw,120px)",background:"var(--bg2)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>

        <div ref={titleRef} style={{
          textAlign:"center",marginBottom:64,
          transition:"opacity .7s, transform .7s",
          opacity: titleVis ? 1 : 0,
          transform: titleVis ? "none" : "translateY(40px)",
        }}>
          <span className="code-badge" style={{marginBottom:16,display:"inline-block"}}>🛠️ Expertise</span>
          <h2 className="section-title">What I <span className="grad-text">Do?</span></h2>
          <p className="grad-text2" style={{fontSize:18,fontWeight:600,marginTop:8}}>Full Stack Development</p>
        </div>

        <div className="wid-cards" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
          {widCards.map((card, i) => (
            <RevealItem key={i} dir={widDirs[i]} delay={i * 0.1}>
              <div className="hover-lift" style={{
                height:"100%",
                background:"var(--card)",border:"1px solid var(--border)",
                borderRadius:18,padding:"30px 24px",
                borderTop:`3px solid ${card.color}`,
              }}>
                <div style={{
                  width:58,height:58,borderRadius:14,marginBottom:16,
                  background:`${card.color}18`,
                  display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,
                }}>{card.icon}</div>
                <h3 style={{fontSize:17,fontWeight:700,marginBottom:14}}>{card.title}</h3>
                {card.items.map(it=>(
                  <div key={it} style={{display:"flex",gap:9,marginBottom:10,color:"var(--text2)",fontSize:13,lineHeight:1.7}}>
                    <span style={{color:card.color,flexShrink:0,marginTop:2}}>▸</span>
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </RevealItem>
          ))}
        </div>

        <div style={{marginTop:60}}>
          <p style={{textAlign:"center",color:"var(--text2)",marginBottom:24,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>
            Technologies I Work With
          </p>
          <div className="tech-grid-8" style={{display:"grid",gridTemplateColumns:"repeat(8,1fr)",gap:12}}>
            {techRow.map((t,i)=>(
              <RevealItem key={t.n} dir={i%2===0?"left":"right"} delay={i*0.06}>
                <div className="hover-lift" style={{
                  background:"var(--card)",border:"1px solid var(--border)",
                  borderRadius:12,padding:"14px 6px",
                  display:"flex",flexDirection:"column",alignItems:"center",gap:6,cursor:"default",
                }}>
                  <span style={{fontSize:24}}>{t.e}</span>
                  <span style={{fontSize:10,fontWeight:700,color:"var(--text2)"}}>{t.n}</span>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}