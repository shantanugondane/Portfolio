import React from 'react';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>
        Skills<span className={styles.purpleDot}>.</span>
      </h2>
      <div className={styles.grid}>
        <div>
          <h3 className={styles.category}>Web Design</h3>
          <ul className={styles.list}>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>Wireframing</li>
            <li>User Research</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.category}>Frontend</h3>
          <ul className={styles.list}>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.category}>Backend</h3>
          <ul className={styles.list}>
            <li>NodeJs</li>
            <li>MondoDB</li>
            <li>ExpressJS</li>
            <li>Vercel</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.category}>Soft Skills</h3>
          <ul className={styles.list}>
            <li>Effective communication</li>
            <li>Collaboration</li>
            <li>Commitment</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 