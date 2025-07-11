import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>Shantanu G </div>
    <ul className={styles.navLinks}>
      <li className={styles.active}><a href="#">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#experience">About</a></li>
    </ul>
    <div className={styles.menuIcon}>
      {/* <span>&#9776;</span> Hamburger icon */}
    </div>
  </nav>
);

export default Navbar; 