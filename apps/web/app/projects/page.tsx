import Link from "next/link";
import styles from "./page.module.css";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A real-time collaborative whiteboard for remote teams. Built because I was frustrated with existing tools being too slow.",
    why: "Wanted to learn WebSocket architecture and real-time sync algorithms.",
    tech: ["Next.js", "Socket.io", "Redis"],
    link: "#",
    emoji: "🎨",
  },
  {
    id: 2,
    title: "Budget Buddy",
    description: "Personal finance tracker with AI-powered insights. Categorizes expenses automatically and predicts monthly spending.",
    why: "I needed a simpler alternative to complex budgeting apps.",
    tech: ["React Native", "Python", "OpenAI"],
    link: "#",
    emoji: "💰",
  },
  {
    id: 3,
    title: "DevLog",
    description: "A CLI tool that automatically generates changelogs from git commits using AI. Saves hours of documentation work.",
    why: "Writing changelogs is tedious. Let machines do it.",
    tech: ["Go", "OpenAI API", "Git"],
    link: "#",
    emoji: "📝",
  },
  {
    id: 4,
    title: "Focusmate",
    description: "A minimal Pomodoro timer with ambient sounds and focus statistics. Helps track productive hours over time.",
    why: "Built this for myself during a productivity deep-dive.",
    tech: ["Svelte", "Web Audio API"],
    link: "#",
    emoji: "⏱️",
  },
  {
    id: 5,
    title: "API Playground",
    description: "Interactive API documentation tool that lets users test endpoints directly in the browser with live responses.",
    why: "Wanted to make API docs more engaging for developers.",
    tech: ["TypeScript", "Monaco Editor", "Hono"],
    link: "#",
    emoji: "🔌",
  },
  {
    id: 6,
    title: "Color Palette AI",
    description: "Generate beautiful color palettes from text descriptions. Uses AI to understand mood and context.",
    why: "A weekend project that got 500+ stars on GitHub.",
    tech: ["React", "Tailwind", "Replicate"],
    link: "#",
    emoji: "🌈",
  },
];

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} />
      
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>dc.</Link>
        <div className={styles.navLinks}>
          <Link href="/work">Work</Link>
          <Link href="/projects" className={styles.active}>Projects</Link>
          <a href="mailto:hello@dalechang.dev" className={styles.navCta}>Let&apos;s chat</a>
        </div>
      </nav>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Side Projects</h1>
          <p className={styles.subtitle}>
            Things I build for fun, to learn, or because they should exist. 
            Proof that I can go from 0 → 1.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <a 
              key={project.id} 
              href={project.link}
              className={styles.card}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className={styles.emoji}>{project.emoji}</span>
              
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDesc}>{project.description}</p>
              
              <p className={styles.why}>
                <span className={styles.whyLabel}>Why I built it:</span> {project.why}
              </p>
              
              <div className={styles.tech}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techTag}>{t}</span>
                ))}
              </div>
              
              <span className={styles.viewLink}>
                View project <span className={styles.arrow}>→</span>
              </span>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Have an idea? Let&apos;s build something together.</p>
        <a href="mailto:hello@dalechang.dev" className={styles.footerCta}>
          Get in touch →
        </a>
      </footer>
    </div>
  );
}

