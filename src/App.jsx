import { useEffect, useRef, useState } from "react";
import "./Intro.css";

const SKILLS = [
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

// Replace this with your Cloudinary CV file URL
const CV_URL = "https://res.cloudinary.com/dn4jqqjvo/image/upload/v1784967232/Raja-Abdulrehman-CV_agdmvv.pdf";

const SCENE_DURATION = 4200;

export default function Intro() {
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
    <div className="intro-stage">
      <div className="smoke-wrap">
        <div className="puff p1" />
        <div className="puff p2" />
        <div className="puff p3" />
        <div className="puff p4" />
        <div className="puff p5" />
        <div className="puff p6" />
      </div>

      <div className="beams">
        <div className="beam b1" />
        <div className="beam b2" />
        <div className="beam b3" />
      </div>

      <div className="fog-sheet" />
      <div className="grain" />
      <div className="vignette" />

      <div className="brand-mark">Raja · Portfolio</div>

      <a
        className="cv-button"
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Download CV
      </a>

      <div className="content">
        <Scene active={current === 0}>
          <div className="eyebrow">Full-stack web developer</div>
          <div className="headline">
            Raja Abdulrehman
            <br />
            Aftab
          </div>
          <div className="subhead">MERN stack · Lahore, Pakistan</div>
        </Scene>

        <Scene active={current === 1}>
          <div className="eyebrow">What I do</div>
          <div className="headline">
            3+ years building
            <br />
            production-grade web apps
          </div>
          <div className="tagline">
            Secure REST APIs, JWT-based auth, role-based access control, and
            multi-tenant SaaS architectures — from schema design to
            deployment.
          </div>
        </Scene>

        <Scene active={current === 2}>
          <div className="eyebrow">Toolkit</div>
          <div className="headline headline-sm">Skills &amp; stack</div>
          <div className="skills-grid">
            {SKILLS.map((skill, i) => (
              <span
                key={skill}
                className="skill-pill"
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
          <div className="eyebrow">Currently building</div>
          <div className="headline">
            Multi-Tenant Academic
            <br />
            ERP SaaS Platform
          </div>
          <div className="tagline">
            35+ schemas · 25+ modules · Student, Teacher, Attendance, Fee &amp;
            Result management — with a full Software Design Document behind
            it.
          </div>
        </Scene>

        <Scene active={current === 4}>
          <div className="eyebrow">Experience</div>
          <div className="headline headline-sm">Front-End Developer</div>
          <div className="tagline">
            Live Greeter, Lahore — building responsive, accessible UI and
            integrating REST APIs alongside designers and backend engineers.
          </div>
        </Scene>

        <Scene active={current === 5}>
          <div className="eyebrow">Projects</div>
          <div className="headline headline-sm">Things I've shipped</div>
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <a
                key={project.name}
                className="project-card"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="project-name">{project.name}</span>
                <span className="project-desc">{project.description}</span>
              </a>
            ))}
          </div>
        </Scene>

        <Scene active={current === 6}>
          <div className="eyebrow">Let's build something</div>
          <div className="headline headline-md">rbg.raja123@gmail.com</div>
          <div className="divider" />
          <div className="subhead">+92 337 3157398 · Lahore, Pakistan</div>
        </Scene>
      </div>

      <div className="footer-line">
        {Array.from({ length: sceneCount }).map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Scene({ active, children }) {
  return <div className={`scene ${active ? "active" : ""}`}>{children}</div>;
}