import EnhancedHero from '../../components/EnhancedHero';
import GlobalBackground from '../../components/GlobalBackground';
import EnhancedProjects from '../../components/EnhancedProjects';
import EnhancedExperience from '../../components/EnhancedExperience';
// import Skills from '../../components/Skills';
import EnhancedMyStory from '../../components/EnhancedMyStory';

export default function Home() {
  return (
    <>
      <GlobalBackground />
      <EnhancedHero />
      <EnhancedProjects />
      <EnhancedExperience />
      <EnhancedMyStory />
    </>
  );
}
