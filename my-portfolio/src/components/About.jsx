import React from "react";
import styles from "./About.module.css";
import profileImage from "../assets/CVimage.jpeg";
const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>

      <div className={styles.container}>
        {/* Profile Image + Typewriter */}
        <div className={styles.profileWrapper}>
          <img
            src={profileImage}
            alt="Bita Yeganeh Profile"
            className={styles.profileImage}
          />
          <p className={styles.typewriter}>
            Full-Stack Enthusiast & Code Explorer
          </p>
        </div>

        {/* Text */}
        <div className={styles.text}>
          <p>
            I am a dedicated and curious web development student at{" "}
            <span className={styles.bold}>Business College Helsinki</span>,
            building strong foundations in both front-end and full-stack
            development.
          </p>

          <p>
            My skills include{" "}
            <strong>
              HTML, CSS, JavaScript, React, WordPress, UI/UX design, and
              software testing
            </strong>
            . I enjoy turning ideas into clean, responsive, and user-friendly
            digital experiences.
          </p>

          <p>
            I thrive in collaborative environments — whether it's pair
            programming, planning UI layouts, or debugging together. I love
            learning by doing and continuously improving my workflow.
          </p>

          <p>
            As I grow in my journey, I’m excited to deepen my expertise in{" "}
            <strong>
              React, Git workflows, accessibility, and modern industry best
              practices
            </strong>
            . My ultimate goal is to build meaningful, well-designed products
            that make people’s lives easier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
