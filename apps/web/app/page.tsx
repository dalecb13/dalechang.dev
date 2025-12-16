import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Decorative background elements */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGradient} />
      
      {/* Navigation */}
      <nav className={styles.nav}>
        <span className={styles.navLogo}>dc.</span>
        <div className={styles.navLinks}>
          <Link href="/work">Work</Link>
          <Link href="/projects">Projects</Link>
          <a href="mailto:hello@dalechang.dev" className={styles.navCta}>Let&apos;s chat</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>
            <span className={styles.statusDot} />
            Available for opportunities
          </p>
          
          <h1 className={styles.heroTitle}>
            I build products
            <br />
            <span className={styles.heroAccent}>people actually use.</span>
          </h1>
          
          <p className={styles.heroSub}>
            Software engineer with a founder&apos;s mindset. I care about users, 
            not just code. Currently crafting delightful experiences and 
            shipping things that matter.
          </p>

          <div className={styles.heroCtas}>
            <a href="mailto:hello@dalechang.dev" className={styles.primaryBtn}>
              Let&apos;s chat
              <span className={styles.btnArrow}>→</span>
            </a>
            <Link href="/work" className={styles.secondaryBtn}>
              See my work
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.floatingCard}>
            <span className={styles.cardEmoji}>🚀</span>
            <span>Shipped 12+ products</span>
          </div>
          <div className={styles.floatingCard} style={{ animationDelay: '0.5s' }}>
            <span className={styles.cardEmoji}>💡</span>
            <span>Product-first thinking</span>
          </div>
          <div className={styles.floatingCard} style={{ animationDelay: '1s' }}>
            <span className={styles.cardEmoji}>⚡</span>
            <span>0 → 1 builder</span>
          </div>
        </div>
      </main>

      {/* Social proof / quick links */}
      <section className={styles.socialProof}>
        <p className={styles.proofLabel}>Previously shipped at</p>
        <div className={styles.proofLogos}>
          <span>Company A</span>
          <span>•</span>
          <span>Company B</span>
          <span>•</span>
          <span>Company C</span>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="https://github.com/dalechang" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/dalechang" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/dalechang" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p className={styles.footerNote}>Built with care & caffeine ☕</p>
      </footer>
    </div>
  );
}
