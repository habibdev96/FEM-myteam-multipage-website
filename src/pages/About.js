import { useGlobalContext } from '../context';
import AboutSubHero from '../components/about/AboutSubHero';

const About = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <AboutSubHero />
    </>
  );
};

export default About;
