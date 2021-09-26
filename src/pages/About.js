import { useGlobalContext } from '../context';
import AboutSubHero from '../components/about/AboutSubHero';
import Directors from '../components/about/Directors';

const About = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <AboutSubHero />
      <main>
        <Directors />
      </main>
    </>
  );
};

export default About;
