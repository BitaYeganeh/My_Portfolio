import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.mainHeader}>
      <div className={styles.logo}>Bita Yeganeh</div>

      <button
        className={styles.menuToggle}
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        ☰
      </button>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <button
        className={styles.modeToggle}
        aria-label="Toggle dark/light mode"
        onClick={toggleMode}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export default Header;
