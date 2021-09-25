import { useGlobalContext } from '../context';

const Contact = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return <div>contact page</div>;
};

export default Contact;
