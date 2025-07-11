import React from 'react';
import styles from './ProjectCard.module.css';
import Image from 'next/image';

const ProjectCard = ({ title, description, image, link }) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <Image src={image} alt={title} width={400} height={220} className={styles.image} />
    </div>
    <div className={styles.info}>
      <div className={styles.titleRow}>
        <span className={styles.title}>{title}</span>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <img src="/right-arrow-next-svgrepo-com.svg" alt="Open" className={styles.icon} />
        </a>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

export default ProjectCard; 