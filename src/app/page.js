import styles from './Hero.module.css';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
// import Skills from '../../components/Skills';
// import MyStory from '../../components/MyStory';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.left}>
          <p className={styles.greeting}>Hey, I&apos;m Shantanu <span className={styles.wave}>👋</span></p>
          <h1 className={styles.headline}>
            <span className={styles.purple}>Full</span>Stack<br />
            Developer
          </h1>
          <p className={styles.description}>
            I&apos;m a Fullstack developer based in Mumbai, I&apos;ll help you build beautiful websites your users will love.
          </p>
          <div className={styles.buttons}>
            <a href="mailto:shantanugondane44@gmail.com" className={styles.primary}>Get In Touch</a>
            <button className={styles.secondary}>Browse Projects</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.profileWrapper}>
            <Image src="/shantanu.jpeg" alt="Profile" className={styles.profileImg} width={256} height={256} />
          </div>
        </div>
      </section>
      <Projects />
      <Experience />
      {/* <Skills />
      <MyStory /> */}
    </>
  );
}
