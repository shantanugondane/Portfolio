import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <nav className={styles.navLinks}>
          <a href="#" className={styles.active}>Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className={styles.center}>
        <h3 className={styles.cta}>Interested in working together<span className={styles.purple}>?</span></h3>
        <div className={styles.buttons}>
          <button className={styles.primary}>Get In Touch</button>
          <button className={styles.secondary}>Browse Projects</button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/shantanu.spaceship/?igsh=ZW1qN3g4bWtoNnQ2&utm_source=qr#"><Image src="/instagram-svgrepo-com.svg" alt="Instagram" width={26} height={26} /></a>
          <a href="https://www.linkedin.com/in/shantanu-gondane-46456822b/"><Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={26} height={26} /></a>
          <a href="https://github.com/shantanugondane"><Image src="/github-svgrepo-com.svg" alt="GitHub" width={26} height={26} /></a>
          <a href="https://dribbble.com/shantanugondane"><Image src="/dribbble-svgrepo-com.svg" alt="Dribbble" width={26} height={26} /></a>
        </div>
        <div className={styles.copyright}>
          ©2023 All Rights Reserved.<br />
          Made with <span className={styles.purple}>💜</span> by Shnatnu Gondane
        </div>
      </div>
    </footer>
  );
} 