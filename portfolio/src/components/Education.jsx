import useReveal from "../hooks/useReveal";
import RevealItem from "./RevealItem";
import { eduData } from "../constants/data";

export default function Education({ dark }) {
  const [titleRef, titleVis] = useReveal();

  return (
    <section id="education" style={{padding:"100px clamp(20px,8vw,120px)",background:"var(--bg2)"}}>
      <div style={{maxWidth:780,margin:"0 auto"}}>

        <div ref={titleRef} style={{
          textAlign:"center",marginBottom:64,
          transition:"opacity .7s, transform .7s",
          opacity: titleVis ? 1 : 0,
          transform: titleVis ? "none" : "translateY(40px)",
        }}>
          <span className="code-badge" style={{marginBottom:16,display:"inline-block"}}>🏫 Academic</span>
          <h2 className="section-title">My <span className="grad-text">Education</span></h2>
        </div>

        <div style={{position:"relative",paddingLeft:28}}>
          <div style={{
            position:"absolute",left:8,top:0,bottom:0,width:2,
            background:`linear-gradient(to bottom, var(--accent), var(--a2), var(--a3))`,
            opacity:.35,borderRadius:2,
          }} />

          {eduData.map((edu, i) => (
            <RevealItem key={i} dir={i%2===0?"left":"right"} delay={i*0.14}>
              <div style={{position:"relative",marginBottom:34}}>
                <div className="tl-dot" style={{
                  background:edu.color,
                  boxShadow:`0 0 0 4px ${dark?"#161b27":"#ffffff"}`,
                }}>
                  <span>{edu.icon}</span>
                </div>
                <div className="hover-lift" style={{
                  background:"var(--card)",border:"1px solid var(--border)",
                  borderRadius:16,padding:"22px 24px",
                  borderLeft:`3px solid ${edu.color}`,
                }}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:8}}>
                    <div>
                      <h3 style={{fontSize:17,fontWeight:700}}>{edu.degree}</h3>
                      <p style={{color:edu.color,fontWeight:600,fontSize:14,marginTop:4}}>{edu.field}</p>
                    </div>
                    <span className="code-badge">{edu.year}</span>
                  </div>
                  <p style={{color:"var(--text2)",marginTop:10,fontSize:13}}>{edu.school}</p>
                  <div style={{
                    display:"inline-block",marginTop:12,padding:"4px 14px",
                    borderRadius:99,background:`${edu.color}18`,color:edu.color,fontSize:12,fontWeight:700,
                  }}>{edu.grade}</div>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}