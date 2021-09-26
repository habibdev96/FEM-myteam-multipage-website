import { useGlobalContext } from '../context';
import AboutSubHero from '../components/about/AboutSubHero';
import Directors from '../components/about/Directors';
import Clients from '../components/about/Clients';

const About = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <AboutSubHero />
      <main>
        <Directors />
        <Clients />
      </main>
    </>
  );
};

export default About;
