"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Prevent body scroll when menu is open on mobile
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo} onClick={closeMenu}>
          dc.
        </Link>
        
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <Link
            href="/work"
            className={pathname === "/work" ? styles.active : ""}
            onClick={closeMenu}
          >
            Work
          </Link>
          <Link
            href="/projects"
            className={pathname === "/projects" ? styles.active : ""}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <a href="mailto:hello@dalechang.dev" className={styles.navCta} onClick={closeMenu}>
            Let&apos;s chat
          </a>
        </div>
      </nav>
      {isMenuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} />
      )}
    </>
  );
}

