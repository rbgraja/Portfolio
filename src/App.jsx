import React ,{ useState, useEffect } from 'react'
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & close icons
// Place your PDF in /public so Vite serves it at the site root
const resumeUrl = 'https://res.cloudinary.com/dn4jqqjvo/image/upload/v1765872530/Raja-Abdulrehman_macndj.pdf'
const profileImage =
  'data:image/png;base64,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'

const projects = [
  {
    title: 'Rabiit E-commerse',
    summary: 'A complete e-commerce platform with an admin dashboard to manage products, track revenue, monitor orders, and handle all site operations efficiently. Built for seamless management and real-time insights.',
    tech: ['React', 'Express.js', 'Node.js', 'MongoDB','Cloudinary','Vercel','Tailwind CSS','Redux Toolkit'],
    link: 'https://rabbit-dja4.vercel.app/',
    image: 'https://rabbit-dja4.vercel.app/assets/rabbit-hero-DBA8qmWF.webp',
  },
   {
    title: 'Ladylike Dresses',
    summary: 'A modern fashion-focused frontend website designed to showcase women’s dresses with an elegant and visually engaging UI.',
    tech: [
      'Next.js',
      'Tailwind CSS',
      'SEO Optimization',
      'Responsive Design',
      'Vercel'
    ],
    link: 'https://ladydresses.vercel.app/',
    image: 'https://ladydresses.vercel.app/banner.webp',
  },
  {
    title: 'R&S Movers',
    summary: 'A professional movers and logistics website presenting services, locations, and contact information clearly.',
    tech: [
      'Next.js',
      'Tailwind CSS',
      'Form Handling',
      'Responsive Design',
      'Vercel'
    ],
    link: 'https://rsmovers.vercel.app/',
    image: 'https://nayakam.com/wp-content/uploads/2020/09/Packers-and-movers.jpg',
  },



]

const skills = [
  {
    title: 'Frontend',
    items: [
      'React',
      'JavaScript (ES6+)',
      'Next.js (basic)',
      'Redux Toolkit (basic)',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'UI Implementation'
    ]
  },
  {
    title: 'Backend',
    items: [
      'Node.js (basic)',
      'Express.js (basic)',
      'MongoDB (basic)',
      'REST API integration',
      'Mongoose (basic)'
    ]
  },
  {
    title: 'Cloud & Deployment',
    items: [
      'Vercel',
      'Netlify',
      'Cloudinary',
      'Basic Deployment & Environment Setup'
    ]
  },
  {
    title: 'Development Tools',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'NPM',
      'Postman (basic)'
    ]
  },
  {
    title: 'Best Practices',
    items: [
      'Clean Code Principles',
      'Component Reusability',
      'Basic Performance Optimization',
      'Debugging Basics'
    ]
  }
];


const experiences = [ 
  {
    role: 'Frontend Developer',
    company: 'Live Admin',
    period: '2022 — Till now',
    description:
      'Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React.Ensured cross-browser compatibility and optimized website performance.Applied UI/UX principles to deliver intuitive user experiences.Conducted debugging and testing to enhance functional'
  },

]

const services = [
  {
    title: 'MERN Application Development',
    detail: 'Frontend-focused MERN applications with clean architecture, scalable components, and modern UI practices.'
  },
  {
    title: 'Application Support & Maintenance',
    detail: 'Ongoing support, bug fixes, performance improvements, and feature enhancements after deployment.'
  },
  {
    title: 'UI Enhancement & Redesign',
    detail: 'Improving existing interfaces with better layouts, responsiveness, and user experience.'
  },
  {
    title: 'Integration & API Handling',
    detail: 'Smooth integration of third-party APIs and backend services into frontend applications.'
  },
  {
    title: 'Performance Optimization',
    detail: 'Optimizing load times, improving Core Web Vitals, and ensuring smooth application performance.'
  }
];


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 py-6 lg:gap-16 lg:px-0">
      <header   className={`card sticky top-4 z-20 flex items-center justify-between gap-4 px-5 py-3 transition-colors duration-300 ${
     isScrolled ? "bg-transparent" : "bg-white shadow-sm"
  }`}
>
      {/* Left: profile */}
      <div className="flex items-center gap-3">
        <img
          src={profileImage}
          alt="Raja AbdulRehman headshot"
          className="h-16 w-16 rounded-2xl object-cover"
        />
        <div>
          <div className="text-sm font-semibold text-slate-900">Raja AbdulRehman</div>
          <div className="text-xs font-medium text-slate-500">Junior MERN Developer</div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden sm:flex items-center gap-3 text-sm font-semibold text-slate-600">
        <a className="rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-700" href="#projects">Projects</a>
        <a className="rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-700" href="#about">About</a>
        <a className="rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-700" href="#services">Services</a>
        <a className="rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-700" href="#contact">Contact</a>
      </nav>

      {/* Book a call button */}
      <a
        className="hidden sm:inline-block rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
        href="#contact"
      >
        Book a call
      </a>

      {/* Mobile menu button */}
      <button
        className="sm:hidden text-slate-700 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-5 gap-2 sm:hidden">
          <a className="w-full rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-700" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a className="w-full rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-700" href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a className="w-full rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-700" href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a className="w-full rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-700" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md" href="#contact" onClick={() => setIsOpen(false)}>
            Book a call
          </a>
        </div>
      )}
    </header>

        <section className="card grid gap-8 p-7 lg:grid-cols-[1.2fr,0.8fr]" id="home">
  <div className="flex flex-col gap-5">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
      Available for full-time & freelance
    </p>

    <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[42px]">
      Building modern web applications with the <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">MERN</span> stack.
    </h1>

    <p className="text-base leading-relaxed text-slate-600">
      I create responsive, clean, and user-friendly frontend interfaces while handling backend APIs to deliver complete web solutions. This portfolio highlights my sample projects, technical skills, and experience—use it to showcase your work effectively.
    </p>

    <div className="flex flex-wrap gap-3">
      <a
        className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-[1px]"
        href="#projects"
      >
        View projects
      </a>
       <a
         className="rounded-xl border border-blue-100 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-[1px]"
         href={resumeUrl} target="_blank" rel="noreferrer"
         download
       >
        Download resume
      </a>
    </div>

    <div className="grid gap-3 sm:grid-cols-3">
      {[
        { value: '5+', label: 'MERN projects completed' },
        { value: '4 yrs', label: 'Experience in web development' },
        { value: '100%', label: 'Committed to learning & growth' },
      ].map((item) => (
        <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div className="text-lg font-bold text-slate-900">{item.value}</div>
          <div className="text-sm text-slate-500">{item.label}</div>
        </div>
      ))}
    </div>
  </div>

    <div className="card flex flex-col gap-4 p-5">
     <img
       src={profileImage}
       alt="Raja AbdulRehman headshot"
       className="h-16 w-16 rounded-2xl object-cover"
     />

    <div>
      <h3 className="text-lg font-semibold text-slate-900">Raja AbdulRehman</h3>
      <p className="text-sm text-slate-500">Junior MERN Developer</p>
    </div>

    <div className="flex flex-wrap gap-2">
      {['React', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((pill) => (
        <span key={pill} className="pill">
          {pill}
        </span>
      ))}
    </div>

    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <strong className="text-sm text-slate-900">What I do</strong>
      <p id="about" className="mt-2 text-sm text-slate-600">
        Build responsive frontends, develop backend APIs, and deliver complete MERN applications with clean architecture and maintainable code.
      </p>
    </div>
  </div>
</section>


        <section className="card grid gap-6 p-7 md:grid-cols-2 items-start" >
  <div className="flex flex-col gap-4">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
      About
    </p>

    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
      Building reliable, scalable, and user-focused web applications.
    </h2>

    <p className="text-base leading-relaxed text-slate-600">
      I am a MERN stack developer with experience in building both frontend and
      backend components of modern web applications. I focus on creating clean,
      scalable user interfaces while developing reliable backend APIs and data
      flows.
      <br /><br />
      My approach emphasizes maintainable architecture, performance
      optimization, and secure API integration. From application development to
      post-launch support and maintenance, I ensure long-term stability and
      smooth scalability aligned with business objectives.
    </p>
  </div>

  <div className="grid gap-3">
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
      Experince
    </p>

    {experiences.map((exp) => (
      <article
        key={exp.company}
        className="rounded-xl border border-slate-200 bg-slate-50 p-4"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              {exp.role}
            </h3>
            <p className="text-sm text-slate-500">{exp.company}</p>
          </div>

          <span className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            {exp.period}
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-600">
          {exp.description}
        </p>
      </article>
    ))}
  </div>
</section>


        <section className="card p-7" id="skills">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Skills</p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Core capabilities</h2>
              <p className="text-sm text-slate-600">
  These are the technologies, tools, and workflows I use to build and manage my projects.
</p>
            </div>
            <a className="text-sm font-semibold text-blue-700" href="#contact">
              Let&apos;s work together →
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{skill.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span  key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p id="projects"></p>
        </section>

        <section className="card p-7" >
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Selected Work</p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Project highlights</h2>
              Explore some of my projects below. Each includes live links and a brief overview of the features and functionalities I implemented.

            </div>
            <a className="text-sm font-semibold text-blue-700" href="#contact">
              Request a walkthrough →
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                <div
                  className="h-40 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.55), rgba(0,0,0,0.15)), url(${project.image})`,
                  }}
                />
                <div className="flex flex-col gap-3 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                    <a className="text-sm font-semibold text-blue-700" href={project.link} target="_blank" rel="noreferrer">
                      View project
                    </a>
                  </div>
                  <p className="text-sm text-slate-600">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p id="services"></p> </section>

        <section className="card p-7" >
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Services</p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Ways I can help</h2>
            <p className="text-sm text-slate-600">
  Here you can explore the services, projects, and solutions I provide.
</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.detail}</p>
                <a className="mt-3 inline-flex text-sm font-semibold text-blue-700" href="#contact">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="card flex flex-col gap-4 p-7 lg:flex-row lg:items-center lg:justify-between" id="contact">
          <div className="flex-1 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Let&apos;s build something impactful.</h2>
            <p className="text-sm text-slate-600">
            Feel free to reach out using the contact details below. I respond within one business day.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Email</div>
                <div className="text-sm font-semibold text-slate-900">rbg.raja123@gmail.com</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Phone Number</div>
                <div className="text-sm font-semibold text-slate-900">03373157398</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Location</div>
                <div className="text-sm font-semibold text-slate-900">Remote · Open to travel</div>
              </div>
            </div>
          </div>
          <a
            className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-[1px]"
          href="mailto:rbg.raja123@gmail.com"
          >
            Email me
          </a>
        </section>

        <footer className="mb-6 flex flex-col items-start justify-between gap-3 text-sm text-slate-500 sm:flex-row">
  <div>
    <div className="font-semibold text-slate-800">Raja AbdulRehman</div>
    <div className="text-slate-500">Junior MERN Developer · Portfolio Starter</div>
  </div>
  <div className="flex gap-3 font-semibold text-slate-700">
    <span>Email: rbg.raja123@gmail.com</span>
    <span>Number: 03373157398</span>
  </div>
</footer>

      </div>
    </div>



  )
}

