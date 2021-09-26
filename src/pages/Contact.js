import ContactSection from '../components/contact/ContactSection';
import { useGlobalContext } from '../context';

const Contact = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <main>
      <ContactSection />
    </main>
  );
};

export default Contact;
