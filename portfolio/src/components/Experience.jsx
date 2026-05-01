import useReveal from "../hooks/useReveal";
import RevealItem from "./RevealItem";
import { projects } from "../constants/data";

export default function Experience() {
  const [titleRef, titleVis] = useReveal();

  return (
    <section id="experience" style={{padding:"100px clamp(20px,8vw,120px)",background:"var(--bg)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>

        <div ref={titleRef} style={{
          textAlign:"center",marginBottom:64,
          transition:"opacity .7s, transform .7s",
          opacity: titleVis ? 1 : 0,
          transform: titleVis ? "none" : "translateY(40px)",
        }}>
          <span className="code-badge" style={{marginBottom:16,display:"inline-block"}}>💼 Career</span>
          <h2 className="section-title">My <span className="grad-text">Experience</span></h2>
        </div>

        <div className="exp-wrap" style={{display:"flex",gap:26,alignItems:"flex-start"}}>
          <RevealItem dir="left" delay={0} className="exp-intern" style={{flex:"0 0 330px"}}>
            <div className="hover-lift" style={{
              background:"var(--card)",border:"1px solid var(--border)",
              borderRadius:20,padding:"28px",borderTop:"3px solid var(--accent)",
            }}>
              <div style={{display:"flex",alignItems:"flex-start",gap:14,marginBottom:16}}>
                <div style={{
                  width:48,height:48,borderRadius:13,flexShrink:0,
                  background:"linear-gradient(135deg,var(--accent),var(--a2))",
                  display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,
                }}>💻</div>
                <div>
                  <h3 style={{fontSize:16,fontWeight:700}}>Java Developer Intern</h3>
                  <p style={{color:"var(--accent)",fontWeight:600,fontSize:13,marginTop:3}}>Robowaves Pvt Ltd</p>
                </div>
              </div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16}}>
                <span className="code-badge">📅 Oct 2024–Mar 2025</span>
                
              </div>
              <div style={{borderTop:"1px solid var(--border)",paddingTop:14}}>
                {["Developed web features using Java & MySQL","Built REST APIs for the React frontend team","Collaborated in Agile sprints & code reviews"].map(it=>(
                  <div key={it} style={{display:"flex",gap:8,marginBottom:9,fontSize:13,color:"var(--text2)",lineHeight:1.6}}>
                    <span style={{color:"var(--accent)",flexShrink:0,fontWeight:700}}>✦</span>
                    <span>{it}</span>
                  </div>
                ))}
              </div>
              <div style={{marginTop:14,display:"flex",flexWrap:"wrap",gap:7}}>
                {["Java","MySQL","REST APIs","React","Agile"].map(t=>(
                  <span key={t} className="skill-pill" style={{fontSize:11}}>{t}</span>
                ))}
              </div>
            </div>
          </RevealItem>

          <div style={{flex:1,display:"flex",flexDirection:"column",gap:16}}>
            {projects.map((p,i)=>(
              <RevealItem key={i} dir="right" delay={i*0.13}>
                <div className="hover-lift" style={{
                  background:"var(--card)",border:"1px solid var(--border)",
                  borderRadius:16,padding:"20px 22px",
                  borderLeft:`3px solid ${p.color}`,
                }}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:9}}>
                    <span style={{fontSize:22}}>{p.emoji}</span>
                    <div>
                      <h4 style={{fontSize:15,fontWeight:700}}>{p.title}</h4>
                      <span style={{fontSize:11,color:p.color,fontWeight:600}}>{p.type}</span>
                    </div>
                  </div>
                  <p style={{fontSize:13,color:"var(--text2)",lineHeight:1.65,marginBottom:12}}>{p.desc}</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                    {p.tags.map(t=><span key={t} className="skill-pill" style={{fontSize:11}}>{t}</span>)}
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}