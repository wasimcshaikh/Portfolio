export const widCards = [
  { icon:"🖥️", title:"Frontend Development", color:"var(--accent)",
    items:["Building responsive UIs using React & Tailwind CSS","Creating smooth user experiences with animations","Mobile-first, cross-browser compatible designs"] },
  { icon:"⚙️", title:"Backend Development", color:"var(--a2)",
    items:["Developing secure RESTful APIs","Building scalable server-side logic with Java","Authentication, authorization & middleware"] },
  { icon:"🗄️", title:"Database & APIs", color:"var(--a3)",
    items:["Designing relational database schemas","Working with MySQL and SQL queries","Integrating third-party APIs seamlessly"] },
];

export const widDirs = ["left","up","right"];

export const techRow = [
  {e:"🌐",n:"HTML5"},{e:"🎨",n:"CSS3"},{e:"⚡",n:"JavaScript"},
  {e:"⚛️",n:"React"},{e:"💨",n:"Tailwind"},{e:"☕",n:"Java"},{e:"🐬",n:"MySQL"},{e:"🐍",n:"Python"},
];

export const skillCategories = [
  { cat:"Frontend", color:"var(--accent)", icon:"🎨",
    tools:[
      {e:"⚛️",n:"React.js",lv:"Advanced"},
      {e:"⚡",n:"JavaScript",lv:"Advanced"},
      {e:"💨",n:"Tailwind CSS",lv:"Advanced"},
      {e:"🌐",n:"HTML5",lv:"Expert"},
      {e:"🎨",n:"CSS3",lv:"Expert"},
      {e:"🔷",n:"TypeScript",lv:"Intermediate"},
    ]},
  { cat:"Backend", color:"var(--a2)", icon:"⚙️",
    tools:[
      {e:"☕",n:"Java",lv:"Advanced"},
      {e:"🐍",n:"Python",lv:"Intermediate"},
      {e:"🔌",n:"REST APIs",lv:"Advanced"},
      {e:"🔒",n:"Auth/JWT",lv:"Intermediate"},
      {e:"S",n:"Spring",lv:"Advanced"}
    ]},
  { cat:"Database", color:"var(--a3)", icon:"🗄️",
    tools:[
      {e:"🐬",n:"MySQL",lv:"Advanced"},
      {e:"📋",n:"SQL",lv:"Advanced"},
      {e:"🔗",n:"JDBC",lv:"Intermediate"},
      {e:"📐",n:"DB Design",lv:"Intermediate"},
    ]},
  { cat:"Tools & DevOps", color:"var(--a4)", icon:"🔧",
    tools:[
      {e:"🐙",n:"Git/GitHub",lv:"Intermediate"},
      {e:"💻",n:"VS Code",lv:"Expert"},
      {e:"📬",n:"Postman",lv:"Advanced"},
      {e:"⚡",n:"Maven",lv:"Advanced"},
      {e:"🐧",n:"Linux",lv:"Intermediate"},
      {e:"📦",n:"npm",lv:"Advanced"},
    ]},
];

export const lvColor = { Expert:"var(--a3)", Advanced:"var(--accent)", Intermediate:"var(--a4)" };

export const eduData = [
  {year:"2020 – 2024",degree:"Bachelor of Engineering",field:"Computer Engineering",school:"Jaihind College Of Engineering",grade:"CGPA: 7.52 / 10",icon:"🎓",color:"var(--accent)"},
  {year:"2019  ",degree:"HSC (12th Grade)",field:"Science (PCM + CS)",school:"G. R. P. Sabnis Jr. College",grade:"Percentage: 73.23%",icon:"📘",color:"var(--a2)"},
  {year:"2017  ",degree:"SSC (10th Grade)",field:"General",school:"G. R. P. Sabnis Vidyamandir",grade:"Percentage: 94.20%",icon:"📗",color:"var(--a3)"},
];

export const projects = [
  {title:"Personal Portfolio Website",type:"Personal Project",emoji:"🌐",
    desc:"Modern portfolio built with React, Tailwind CSS and smooth animations. Features dark/light mode and full responsiveness.",
    tags:["React","Tailwind","CSS3"],color:"var(--a2)"},
  {title:"Student Management System",type:"Academic Project",emoji:"📚",
    desc:"Full-stack CRUD app with Java backend, MySQL database and a clean HTML/CSS frontend.",
    tags:["Java","MySQL","JDBC"],color:"var(--a3)"},
  {title:"Weather Dashboard",type:"Personal Project",emoji:"🌤️",
    desc:"Responsive weather app fetching live data from OpenWeatherMap API with location-based search.",
    tags:["JavaScript","API","CSS3"],color:"var(--a4)"},
];

export const contactItems = [
  {icon:"📧",label:"Email",value:"shaikhwasim3010@gmail.com",href:"mailto:shaikhwasim3010@gmail.com",color:"var(--accent)"},
  {icon:"📱",label:"WhatsApp",value:"+91 8788470791",href:"https://wa.me/+918788470791?text=Hello%20Wasim!",color:"#25d366"},
  {icon:"🔗",label:"LinkedIn",value:"Wasim Shaikh",href:"https://www.linkedin.com/in/wasim-shaikh-1b8a1b24b/",color:"#0077b5"},
  {icon:"🐙",label:"GitHub",value:"Wasim Shaikh",href:"https://github.com/wasimcshaikh",color:"var(--text)"},
];

export const socials = [
  {label:"GitHub",    href:"https://github.com/wasimcshaikh",                        e:"🐙"},
  {label:"LinkedIn",  href:"https://www.linkedin.com/in/wasim-shaikh-1b8a1b24b/",                   e:"💼"},
  {label:"Instagram", href:"https://instagram.com/wasim",                     e:"📸"},
  {label:"WhatsApp",  href:"https://wa.me/918788470791?text=Hello%20Wasim!",  e:"💬"},
  {label:"Email",     href:"mailto:shaikhwasim3010@gmail.com",                        e:"📧"},
];