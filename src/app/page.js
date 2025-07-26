import EnhancedHero from '../../components/EnhancedHero';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
// import Skills from '../../components/Skills';
import MyStory from '../../components/MyStory';

export default function Home() {
  return (
    <>
      <EnhancedHero />
      <Projects />
      <Experience />
      <MyStory />
    </>
  );
}
