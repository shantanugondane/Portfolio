'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    company: 'InternPe ',
    role: 'Artificial Intelligence and Machine Learning Intern',
    companyUrl: 'https://internpe.in/',
    dates: 'Jan 2024 – Feb 2024',
    details: [
      'Developed and deployed four end-to-end ML/DL projects including Diabetes Prediction, Car Price Estimation, and Breast Cancer Classification using Python, TensorFlow, and Keras, achieving high model accuracy',
      'Created interactive data apps with Streamlit to visualize model performance and insights; applied data preprocessing, feature engineering, and model evaluation using NumPy and pandas.',
    ],
  },
  {
    company: 'CFPL',
    role: 'Frontend Developer',
    // companyUrl: 'https://microsoft.com',
    dates: 'Februery 2023 – August 2023',
    details: [
      ' Spearheaded development of telecom infrastructure platform using React.js/Vite/Tailwind CSS, implementing responsive designs that boosted mobile engagement by 45% and reduced load times by 30% across 500+ daily visitors.',
      'Developed 20+ reusable components using React hooks and Context API, achieving 35% faster development cycles; implemented GitHub Actions CI/CD pipeline with 98% test coverage, reducing deployment time by 40%.',
    ],
  },
  {
    company: 'MCT’s RGIT ',
    role: 'Frontend Developer',
    companyUrl: 'https://www.mctrgit.ac.in/',
    dates: 'Februery 2022 – March 2022',
    details: [
      ' Designed and developed a full-stack faculty feedback system using React.js and MongoDB, implementing secure login/signup and an admin dashboard that improved user engagement and reduced manual data entry by 80%.',
      'The traditional pen-and-paper feedback method with a digital solution, increasing data collection efficiency by 70% and enabling real-time insights for over 200+ student feedback entries.',
    ],
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const listRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  useEffect(() => {
    if (listRef.current) {
      // Only consider li elements, not all children
      const liElements = Array.from(listRef.current.querySelectorAll('li'));
      const activeItem = liElements[selected];
      if (activeItem) {
        setIndicatorStyle({
          top: activeItem.offsetTop,
          height: activeItem.offsetHeight,
        });
      }
    }
  }, [selected]);

  const exp = experiences[selected];

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.title}>
        Experience<span className={styles.purpleDot}>.</span>
      </h2>
      <div className={styles.content}>
        <div className={styles.companyListWrapper} style={{ position: 'relative' }}>
          {/* Indicator is now outside the ul */}
          <div
            className={styles.indicator}
            style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
          />
          <ul className={styles.companyList} ref={listRef}>
            {experiences.map((item, idx) => (
              <li
                key={item.company}
                className={selected === idx ? styles.active : ''}
                onClick={() => setSelected(idx)}
              >
                {item.company}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.details}>
          <h3 className={styles.role}>
            {exp.role} {exp.companyUrl && (<a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className={styles.companyName}>@ {exp.company}</a>)}
          </h3>
          <p className={styles.dates}>{exp.dates}</p>
          <ul className={styles.bullets}>
            {exp.details.map((point, i) => (
              <li key={i} className={styles.bullet}>
                <span className={styles.check}>✔</span> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 