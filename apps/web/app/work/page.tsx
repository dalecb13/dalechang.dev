import Link from "next/link";
import styles from "./page.module.css";

const workExperiences = [
  {
    id: 1,
    company: "Company A",
    role: "Senior Software Engineer",
    period: "2022 - Present",
    problem: "Users were abandoning the checkout flow at a 40% rate due to a clunky, slow experience.",
    action: "Led a complete redesign of the checkout system, implementing optimistic updates and reducing API calls by 60%.",
    impact: "Checkout completion increased by 35%, generating an additional $2M in annual revenue.",
    tags: ["React", "Node.js", "PostgreSQL"],
    accent: "#ff6b35",
  },
  {
    id: 2,
    company: "Company B",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    problem: "The engineering team was spending 30% of their time on repetitive deployment tasks and debugging CI failures.",
    action: "Built an internal developer platform with automated deployments, preview environments, and intelligent error reporting.",
    impact: "Reduced deployment time from 45 minutes to 5 minutes. Developer satisfaction scores increased by 50%.",
    tags: ["TypeScript", "AWS", "Docker"],
    accent: "#00d4aa",
  },
  {
    id: 3,
    company: "Company C",
    role: "Software Engineer",
    period: "2018 - 2020",
    problem: "Customer support was overwhelmed with repetitive questions that could be answered with better self-service tools.",
    action: "Designed and shipped a smart help center with AI-powered search and contextual suggestions based on user behavior.",
    impact: "Support tickets reduced by 40%. NPS score improved from 32 to 58.",
    tags: ["Python", "React", "ElasticSearch"],
    accent: "#a855f7",
  },
];

export default function Work() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} />
      
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>dc.</Link>
        <div className={styles.navLinks}>
          <Link href="/work" className={styles.active}>Work</Link>
          <Link href="/projects">Projects</Link>
          <a href="mailto:hello@dalechang.dev" className={styles.navCta}>Let&apos;s chat</a>
        </div>
      </nav>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Work Experience</h1>
          <p className={styles.subtitle}>
            Problems I&apos;ve solved and impact I&apos;ve made. Not just where I worked—what I actually did.
          </p>
        </header>

        <div className={styles.experiences}>
          {workExperiences.map((exp, index) => (
            <article 
              key={exp.id} 
              className={styles.card}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--card-accent': exp.accent 
              } as React.CSSProperties}
            >
              <div className={styles.cardHeader}>
                <div>
                  <h2 className={styles.company}>{exp.company}</h2>
                  <p className={styles.role}>{exp.role}</p>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.section}>
                  <span className={styles.label}>The Problem</span>
                  <p>{exp.problem}</p>
                </div>
                
                <div className={styles.section}>
                  <span className={styles.label}>What I Did</span>
                  <p>{exp.action}</p>
                </div>
                
                <div className={styles.section}>
                  <span className={styles.label}>The Impact</span>
                  <p className={styles.impact}>{exp.impact}</p>
                </div>
              </div>

              <div className={styles.cardFooter}>
                {exp.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Want to create impact together?</p>
        <a href="mailto:hello@dalechang.dev" className={styles.footerCta}>
          Let&apos;s chat →
        </a>
      </footer>
    </div>
  );
}

