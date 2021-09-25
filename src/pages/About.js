import { useGlobalContext } from '../context';

const About = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return <div>about page</div>;
};

export default About;
