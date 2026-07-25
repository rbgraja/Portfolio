import { useEffect, useRef, useState } from "react";

const SKILLS = [
  "HTML",
  "CSS",
  "BOOTSTRAP",
  "JQUERY",
  "React.js",
  "Next.js",
  "PostgreSql",
  "TypeScript",
  "Node.js & Express",
  "MongoDB",
  "JWT & RBAC",
  "Tailwind CSS",
  "REST APIs",
  "Multi-Tenant Architecture",
];

const PROJECTS = [
  {
    name: "FreeSekho",
    description: "Notes & lectures sharing platform",
    url: "https://www.freesekho.com/",
  },
  {
    name: "Rabbit",
    description: "E-commerce / store app",
    url: "https://rabbit-dja4.vercel.app/",
  },
];

const CV_URL =
  "https://res.cloudinary.com/dn4jqqjvo/image/upload/v1784967232/Raja-Abdulrehman-CV_agdmvv.pdf";

const SCENE_DURATION = 4200;

export default function App() {
  const [current, setCurrent] = useState(0);
  const sceneCount = 7;
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sceneCount);
    }, SCENE_DURATION);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden font-['Inter'] bg-[radial-gradient(ellipse_at_50%_25%,#171a1f_0%,#0c0d10_50%,#050506_100%)]">
      {/* smoke layer */}
      <div className="absolute -inset-[10%] blur-[55px] opacity-95">
        <div className="absolute rounded-full mix-blend-screen w-[62vw] h-[62vw] -left-[18vw] -top-[14vw] bg-[radial-gradient(circle,rgba(110,122,145,0.4),rgba(110,122,145,0)_70%)] animate-[drift1_24s_ease-in-out_infinite]" />
        <div className="absolute rounded-full mix-blend-screen w-[58vw] h-[58vw] -right-[22vw] top-[4vh] bg-[radial-gradient(circle,rgba(70,80,100,0.38),rgba(70,80,100,0)_70%)] animate-[drift2_30s_ease-in-out_infinite]" />
        <div className="absolute rounded-full mix-blend-screen w-[52vw] h-[52vw] left-[6vw] -bottom-[28vh] bg-[radial-gradient(circle,rgba(140,150,165,0.28),rgba(140,150,165,0)_70%)] animate-[drift3_36s_ease-in-out_infinite]" />
        <div className="absolute rounded-full mix-blend-screen w-[44vw] h-[44vw] right-[2vw] -bottom-[20vh] bg-[radial-gradient(circle,rgba(232,181,99,0.12),rgba(232,181,99,0)_70%)] animate-[drift4_42s_ease-in-out_infinite]" />
        <div className="absolute rounded-full mix-blend-screen w-[46vw] h-[46vw] left-[30vw] -top-[20vh] bg-[radial-gradient(circle,rgba(90,100,120,0.3),rgba(90,100,120,0)_70%)] animate-[drift5_28s_ease-in-out_infinite]" />
        <div className="absolute rounded-full mix-blend-screen w-[38vw] h-[38vw] right-[25vw] -bottom-[10vh] bg-[radial-gradient(circle,rgba(160,168,180,0.22),rgba(160,168,180,0)_70%)] animate-[drift6_34s_ease-in-out_infinite]" />
      </div>

      {/* moving fog sheet */}
      <div className="absolute -inset-y-[20%] -inset-x-[50%] blur-[20px] opacity-70 bg-[repeating-linear-gradient(100deg,rgba(255,255,255,0)_0%,rgba(200,205,215,0.05)_8%,rgba(255,255,255,0)_16%)] animate-[fogMove_50s_linear_infinite]" />

      {/* light beams */}
      <div className="absolute inset-0 opacity-45 pointer-events-none">
        <div className="absolute -top-[20%] w-[14vw] h-[140%] left-[12%] origin-top rotate-[8deg] bg-[linear-gradient(180deg,rgba(232,181,99,0.14),rgba(232,181,99,0)_75%)] animate-[sway_14s_ease-in-out_infinite]" />
        <div className="absolute -top-[20%] w-[14vw] h-[140%] left-[45%] origin-top -rotate-[6deg] bg-[linear-gradient(180deg,rgba(232,181,99,0.14),rgba(232,181,99,0)_75%)] animate-[sway_14s_ease-in-out_infinite] [animation-delay:3s]" />
        <div className="absolute -top-[20%] w-[14vw] h-[140%] left-[72%] origin-top rotate-[10deg] bg-[linear-gradient(180deg,rgba(232,181,99,0.14),rgba(232,181,99,0)_75%)] animate-[sway_14s_ease-in-out_infinite] [animation-delay:6s]" />
      </div>

      {/* film grain */}
      <div
        className="absolute inset-0 opacity-55 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
        }}
      />

      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,0,0,0)_38%,rgba(0,0,0,0.6)_100%)]" />

      <div className="absolute top-0 inset-x-0 z-[6] flex items-center justify-between gap-3 px-[5vw] py-[3.5vh]">
        <div className="font-['Space_Grotesk'] font-medium text-[10px] sm:text-[13px] tracking-[0.15em] sm:tracking-[0.3em] uppercase text-white/55 whitespace-nowrap">
          Raja · Portfolio
        </div>

        <a
          className="font-['Inter'] font-medium text-[11px] sm:text-[13px] tracking-wide text-[#0c0d10] bg-[#e8b563] border border-[#e8b563] px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full no-underline whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,181,99,0.35)]"
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download CV
        </a>
      </div>

      <div className="relative z-[5] w-full h-full flex items-center justify-center text-center px-[6vw]">
        <Scene active={current === 0}>
          <div className="font-['Inter'] font-medium text-[15px] tracking-[0.35em] uppercase text-[#e8b563] mb-6 opacity-90">
            Full-stack web developer
          </div>
          <div className="font-['Space_Grotesk'] font-bold text-[clamp(32px,6vw,72px)] leading-[1.05] text-[#f3efe7] tracking-tight max-w-[16ch]">
            Raja Abdulrehman
            <br />
            Aftab
          </div>
          <div className="font-['Space_Grotesk'] text-[clamp(16px,2.1vw,26px)] text-[#b9bec7] mt-6 max-w-[38ch] leading-relaxed">
            MERN stack · Lahore, Pakistan
          </div>
        </Scene>

        <Scene active={current === 1}>
          <div className="font-['Inter'] font-medium text-[15px] tracking-[0.35em] uppercase text-[#e8b563] mb-6 opacity-90">
            What I do
          </div>
          <div className="font-['Space_Grotesk'] font-bold text-[clamp(32px,6vw,72px)] leading-[1.05] text-[#f3efe7] tracking-tight max-w-[16ch]">
            3+ years building
            <br />
            production-grade web apps
          </div>
          <div className="font-['Inter'] text-[clamp(15px,1.7vw,20px)] text-[#c7cbd3] max-w-[44ch] leading-[1.75] mt-4">
            Secure REST APIs, JWT-based auth, role-based access control, and
            multi-tenant SaaS architectures — from schema design to
            deployment.
          </div>
        </Scene>

        <Scene active={current === 2}>
          <div className="font-['Inter'] font-medium text-[15px] tracking-[0.35em] uppercase text-[#e8b563] mb-6 opacity-90">
            Toolkit
          </div>
          <div className="font-['Space_Grotesk'] font-bold text-[clamp(26px,4vw,44px)] leading-[1.05] text-[#f3efe7] tracking-tight">
            Skills &amp; stack
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-[640px] mt-9">
            {SKILLS.map((skill, i) => (
              <span
                key={skill}
                className="font-['Inter'] font-medium text-[clamp(12px,1.3vw,15px)] text-[#e9e5da] border border-[#e8b56359] bg-white/[0.03] px-4 py-2 rounded-full opacity-0 translate-y-2 animate-[pillIn_0.6s_ease_forwards]"
                style={{
                  animationDelay: `${i * 0.12}s`,
                  animationPlayState: current === 2 ? "running" : "paused",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </Scene>

        <Scene active={current === 3}>
          <div className="font-['Inter'] font-medium text-[15px] tracking-[0.35em] uppercase text-[#e8b563] mb-6 opacity-90">
            Currently building
          </div>
          <div className="font-['Space_Grotesk'] font-bold text-[clamp(32px,6vw,72px)] leading-[1.05] text-[#f3efe7] tracking-tight max-w-[16ch]">
            Multi-Tenant Academic
            <br />
            ERP SaaS Platform
          </div>
          <div className="font-['Inter'] text-[clamp(15px,1.7vw,20px)] text-[#c7cbd3] max-w-[44ch] leading-[1.75] mt-4">
            35+ schemas · 25+ modules · Student, Teacher, Attendance, Fee &amp;
            Result management — with a full Software Design Document behind
            it.
          </div>
        </Scene>

        <Scene active={current === 4}>
          <div className="font-['Inter'] font-medium text-[15px] tracking-[0.35em] uppercase text-[#e8b563] mb-6 opacity-90">
            Experience
          </div>
          <div className="font-['Space_Grotesk'] font-bold text-[clamp(26px,4vw,44px)] leading-[1.05] text-[#f3efe7] tracking-tight">
            Front-End Developer
          </div>
          <div className="font-['Inter'] text-[clamp(15px,1.7vw,20px)] text-[#c7cbd3] max-w-[44ch] leading-[1.75] mt-4">
            Live Greeter, Lahore — building responsive, accessible UI and
            integrating REST APIs alongside designers and backend engineers.
          </div>
        </Scene>

        <Scene active={current === 5}>
          <div className="font-['Inter'] font-medium text-[15px] tracking-[0.35em] uppercase text-[#e8b563] mb-6 opacity-90">
            Projects
          </div>
          <div className="font-['Space_Grotesk'] font-bold text-[clamp(26px,4vw,44px)] leading-[1.05] text-[#f3efe7] tracking-tight">
            Things I've shipped
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-[640px] mt-9">
            {PROJECTS.map((project) => (
              <a
                key={project.name}
                className="flex flex-col items-start gap-1.5 min-w-[220px] text-left no-underline border border-[#e8b5634d] bg-white/[0.03] rounded-[14px] px-5 py-4 transition-all duration-300 hover:border-[#e8b563b3] hover:bg-white/[0.06] hover:-translate-y-1"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-['Space_Grotesk'] font-medium text-[17px] text-[#f3efe7]">
                  {project.name}
                </span>
                <span className="font-['Inter'] text-[13px] text-[#b9bec7]">
                  {project.description}
                </span>
              </a>
            ))}
          </div>
        </Scene>

        <Scene active={current === 6}>
          <div className="font-['Inter'] font-medium text-[15px] tracking-[0.35em] uppercase text-[#e8b563] mb-6 opacity-90">
            Let's build something
          </div>
          <div className="font-['Space_Grotesk'] font-bold text-[clamp(28px,4.5vw,48px)] leading-[1.05] text-[#f3efe7] tracking-tight">
            rbg.raja123@gmail.com
          </div>
          <div className="w-12 h-px my-6 bg-[linear-gradient(90deg,transparent,#e8b563,transparent)]" />
          <div className="font-['Space_Grotesk'] text-[clamp(16px,2.1vw,26px)] text-[#b9bec7] max-w-[38ch] leading-relaxed">
            +92 337 3157398 · Lahore, Pakistan
          </div>
        </Scene>
      </div>

      <div className="absolute bottom-[6vh] left-0 right-0 z-[6] flex justify-center gap-2.5">
        {Array.from({ length: sceneCount }).map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full border-none p-0 cursor-pointer transition-all duration-300 ${
              i === current ? "bg-[#e8b563] scale-[1.4]" : "bg-white/[0.18]"
            }`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Scene({ active, children }) {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center w-full px-[6vw] transition-all duration-[1100ms] ease-in-out ${
        active
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-6 scale-[0.98] pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
}