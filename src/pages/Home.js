import HomeHero from '../components/home/HomeHero';
import Features from '../components/home/Features';
import { useGlobalContext } from '../context';

const Home = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <HomeHero />
      <main>
        <Features />
      </main>
    </>
  );
};

export default Home;
