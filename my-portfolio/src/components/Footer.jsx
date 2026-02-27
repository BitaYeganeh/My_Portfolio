import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created @ 2025 —{" "}
        <a
          href="https://github.com/BitaYeganeh"
          className={styles.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check my GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
