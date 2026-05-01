import useReveal from "../hooks/useReveal";
import RevealItem from "./RevealItem";
import { contactItems, socials } from "../constants/data";

export default function Contact() {
  const [titleRef, titleVis] = useReveal();

  return (
    <section id="contact" style={{padding:"100px clamp(20px,8vw,120px)",background:"var(--bg2)",position:"relative",overflow:"hidden"}}>
      <div className="mesh-bg">
        <div className="mesh-orb" style={{width:500,height:500,bottom:"-20%",left:"-10%",background:"var(--accent)",opacity:.07}} />
        <div className="mesh-orb" style={{width:400,height:400,top:"-10%",right:"-5%",background:"var(--a2)",opacity:.07}} />
      </div>

      <div style={{maxWidth:860,margin:"0 auto",position:"relative",zIndex:1}}>
        <div ref={titleRef} style={{
          textAlign:"center",marginBottom:60,
          transition:"opacity .7s, transform .7s",
          opacity: titleVis ? 1 : 0,
          transform: titleVis ? "none" : "translateY(40px)",
        }}>
          <span className="code-badge" style={{marginBottom:16,display:"inline-block"}}>🤝 Let's Connect</span>
          <h2 className="section-title">Contact <span className="grad-text">Me</span></h2>
          <p style={{color:"var(--text2)",marginTop:14,fontSize:15,maxWidth:460,margin:"14px auto 0"}}>
            Open to internships, full-time roles & freelance projects. Let's build something great!
          </p>
        </div>

        <div className="contact-grid" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:13,marginBottom:44}}>
          {contactItems.map((c,i)=>(
            <RevealItem key={i} dir={i%2===0?"left":"right"} delay={i*0.1}>
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div style={{width:44,height:44,borderRadius:12,background:`${c.color}18`,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>
                  {c.icon}
                </div>
                <div>
                  <div style={{fontSize:11,color:"var(--text2)",fontWeight:600,textTransform:"uppercase",letterSpacing:1}}>{c.label}</div>
                  <div style={{fontSize:14,fontWeight:700,marginTop:2,color:c.color}}>{c.value}</div>
                </div>
                <div style={{marginLeft:"auto",color:"var(--text2)",fontSize:18}}>→</div>
              </a>
            </RevealItem>
          ))}
        </div>

        <div style={{textAlign:"center",marginBottom:44}}>
          <p style={{color:"var(--text2)",marginBottom:18,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>
            Find Me Online
          </p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            {socials.map((s,i)=>(
              <RevealItem key={s.label} dir="scale" delay={0.3+i*0.08}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" title={s.label}>
                  <span style={{fontSize:20}}>{s.e}</span>
                </a>
              </RevealItem>
            ))}
          </div>
        </div>

        <RevealItem dir="up" delay={0.5}>
          <div style={{
            textAlign:"center",
            background:"linear-gradient(135deg,rgba(108,99,255,0.12),rgba(255,107,157,0.12))",
            border:"1px solid rgba(108,99,255,0.25)",
            borderRadius:22,padding:"42px 32px",
          }}>
            <h3 style={{fontSize:22,fontWeight:800,marginBottom:8}}>Ready to work together? 🚀</h3>
            <p style={{color:"var(--text2)",marginBottom:26,fontSize:15}}>Drop me a message and I'll get back to you within 24 hours.</p>
            <a href="mailto:shaikhwasim3010@gmail.com" className="btn-primary" style={{textDecoration:"none",display:"inline-flex"}}>
              📧 Send an Email
            </a>
          </div>
        </RevealItem>
      </div>
      <style>{`@media(max-width:480px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}