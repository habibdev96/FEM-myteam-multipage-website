import HomeHero from '../components/home/HomeHero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Cta from '../components/shared/Cta';
import { useGlobalContext } from '../context';

const Home = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <HomeHero />
      <main>
        <Features />
        <Testimonials />
        <Cta />
      </main>
    </>
  );
};

export default Home;
