import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Learnify',
    description: 'Learnify is a smart placement preparation and learning platform designed to streamline student upskilling.',
    image: '/learnify1.png',
    link: '/projects/taskflow',
  },
  {
    title: 'LegAIly',
    description: 'LegAIly bridges the gap between legal practice and modern AI solutions.',
    image: '/legaai1.png',
    link: '/projects/ecocart',
  },
  {
    title: 'NextGen police complaint system',
    description: 'The NextGen Police Complaint System revolutionizes the traditional complaint filing process by leveraging blockchain technology.',
    image: '/next1.png',
    link: '/projects/eventplanner',
  },
  {
    title: 'AyurLeaf AI',
    description: 'AyurLeaf AI is an innovative platform that combines deep learning with traditional Ayurvedic knowledge to provide accurate identification and information about medicinal plants.',
    image: '/leaf1.png',
    link: '/projects/foodiefinder',
  },
];

const Projects = () => (
  <section id="projects" className={styles.projectsSection}>
    <h2 className={styles.title}>
      Projects<span className={styles.purpleDot}>.</span>
    </h2>
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default Projects; 