import styled from 'styled-components';
import { SubHeroHeading } from '../styledElements/Headings';
import {
  sectionSpacingMd,
  maxWidthLg,
  twoCol,
  flexAlign,
} from '../../abstracts/Mixins';
import ContactForm from './ContactForm';
import Paragraph from '../styledElements/Paragraphs';
import bgPatternOne from '../../assets/bg-pattern-about-2-contact-1.svg';
import bgPatternTwo from '../../assets/bg-pattern-contact-2.svg';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;
    width: 18%;

    ${Responsive.sm`
      width: 25%;
    `}

    ${Responsive.xs`
      width: 35%;
    `}

    &--one {
      top: 0;
      left: -10%;
    }

    &--two {
      bottom: 0;
      right: -10%;
    }
  }
`;

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  ${twoCol}

  ${Responsive.md`
    grid-template-columns: 1fr;
  `}
  

  .contact-info {
    ${flexAlign}
    gap: 3rem;
    margin: 2rem 0;
  }

  .icon {
    width: 10rem;
  }
`;

const ContactSection = () => {
  const { contactInfo } = useGlobalContext();

  return (
    <StyledSection>
      <img src={bgPatternOne} alt='' className='bg-pattern bg-pattern--one' />
      <Container>
        <div>
          <SubHeroHeading>Contact</SubHeroHeading>
          <SubHeroHeading contact>Ask us about</SubHeroHeading>
          {contactInfo.map((item) => (
            <article key={item.id} className='contact-info'>
              <img src={item.icon} alt='icon' className='icon' />
              <Paragraph lg>{item.description}</Paragraph>
            </article>
          ))}
        </div>
        <ContactForm />
      </Container>
      <img src={bgPatternTwo} alt='' className='bg-pattern bg-pattern--two' />
    </StyledSection>
  );
};

export default ContactSection;
