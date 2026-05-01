import useReveal from "../hooks/useReveal";
import RevealItem from "./RevealItem";
import { skillCategories, lvColor } from "../constants/data";

export default function Skills() {
  const [titleRef, titleVis] = useReveal();

  return (
    <section id="skills" style={{padding:"100px clamp(20px,8vw,120px)",background:"var(--bg)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>

        <div ref={titleRef} style={{
          textAlign:"center",marginBottom:64,
          transition:"opacity .7s, transform .7s",
          opacity: titleVis ? 1 : 0,
          transform: titleVis ? "none" : "translateY(40px)",
        }}>
          <span className="code-badge" style={{marginBottom:16,display:"inline-block"}}>💡 Capabilities</span>
          <h2 className="section-title">My <span className="grad-text">Skills</span></h2>
          <p style={{color:"var(--text2)",marginTop:10,fontSize:14}}>Technologies & tools I work with, displayed as an interactive tool shelf</p>
        </div>

        {skillCategories.map((cat, ci) => (
          <div key={cat.cat} style={{marginBottom:48}}>
            <RevealItem dir={ci%2===0?"left":"right"} delay={0}>
              <div className="cat-strip">
                <div style={{
                  display:"flex",alignItems:"center",gap:10,
                  padding:"8px 20px",borderRadius:99,
                  background:`${cat.color}18`,border:`1px solid ${cat.color}44`,
                  flexShrink:0,
                }}>
                  <span style={{fontSize:18}}>{cat.icon}</span>
                  <span style={{fontWeight:700,fontSize:15,color:cat.color}}>{cat.cat}</span>
                  <span style={{fontSize:12,color:"var(--text2)",fontFamily:"'JetBrains Mono',monospace"}}>
                    {cat.tools.length} tools
                  </span>
                </div>
                <div className="cat-strip-line" />
              </div>
            </RevealItem>

            <div className="skill-grid-inner" style={{
              display:"grid",
              gridTemplateColumns:`repeat(${Math.min(cat.tools.length,6)},1fr)`,
              gap:12,
            }}>
              {cat.tools.map((tool, ti) => (
                <RevealItem key={tool.n} dir={ti%2===0?"left":"right"} delay={ti*0.07}>
                  <div className="skill-tool-card">
                    <span className="skill-emoji">{tool.e}</span>
                    <span className="skill-tool-name">{tool.n}</span>
                    <span className="skill-tool-level" style={{
                      color: lvColor[tool.lv],
                      background:`${lvColor[tool.lv]}18`,
                    }}>{tool.lv}</span>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        ))}

        <RevealItem dir="up" delay={0.15}>
          <div style={{
            background:"var(--bg2)",border:"1px solid var(--border)",
            borderRadius:16,padding:"26px 30px",marginTop:8,
          }}>
            <p style={{color:"var(--text2)",marginBottom:14,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>
              Also Familiar With
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
              {["OOP","Data Structures","Algorithms","Responsive Design","Version Control","JSON","JDBC","Agile","MVC"].map(tag=>(
                <span key={tag} className="skill-pill">{tag}</span>
              ))}
            </div>
          </div>
        </RevealItem>
      </div>
    </section>
  );
}