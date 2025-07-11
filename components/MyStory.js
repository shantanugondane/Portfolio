import React from 'react';
import styles from './MyStory.module.css';

export default function MyStory() {
  return (
    <section className={styles.storySection}>
      <h2 className={styles.title}>
        My Story<span className={styles.purpleDot}>.</span>
      </h2>
      <div className={styles.text}>
      <p>My journey as a front-end developer began during my time at <span className={styles.purple}>RGIT</span>, where I discovered a passion for building intuitive web experiences.</p>
<p>After a few academic projects and internships, I started working as a front-end developer at <span className={styles.purple}>Communicore Fiberinfra</span>, where I led the development of responsive interfaces using React, Vite, and Tailwind CSS.</p>
<p>Driven to explore further, I transitioned into the world of AI at <span className={styles.purple}>InternPe</span>, where I worked on impactful ML projects using Python, TensorFlow, and Streamlit.</p>
<p>My <span className={styles.purple}>projects</span> like Learnify, LegAIly, and AyurLeaf AI helped me blend AI and front-end seamlessly, earning recognition at hackathons and within the developer community.</p>
<p>These opportunities fueled my passion for tech and learning. I now focus on building innovative, real-world solutions—and you know what? I love what I do! <span className={styles.purple}>💜</span></p>
      </div>
    </section>
  );
} 