import styled from 'styled-components';
import { SectionHeading, MicroHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import { sectionSpacingLg, maxWidthLg, threeCol } from '../../abstracts/Mixins';
import quoteIcon from '../../assets/icon-quotes.svg';
import bgPatternOne from '../../assets/bg-pattern-home-4-about-3.svg';
import bgPatternTwo from '../../assets/bg-pattern-home-5.svg';
import { useGlobalContext } from '../../context';

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;
    width: 15%;

    &--one {
      top: 0;
      left: 0;
    }

    &--two {
      bottom: 0;
      right: 0;
    }
  }
`;

const Container = styled.div`
  ${sectionSpacingLg}
  ${maxWidthLg}
  text-align: center;

  .testimonials {
    ${threeCol}
    padding: 5rem 0;
  }

  .testimonial {
    position: relative;
  }

  .icon {
    position: absolute;
    width: 20%;
    top: -10%;
    left: 40%;
    z-index: 1;
  }

  .quote {
    padding-bottom: 1rem;
  }

  .about {
    padding: 2rem 0;
  }

  .avatar {
    width: 10rem;
    border: 0.3rem solid var(--raptureBlue);
    border-radius: 50%;
  }
`;

const Testimonials = () => {
  const { testimonials } = useGlobalContext();

  return (
    <StyledSection>
      <img src={bgPatternOne} alt='' className='bg-pattern bg-pattern--one' />
      <Container>
        <SectionHeading>
          Delivering real results for top companies. <br /> Some of our{' '}
          <span>success stories.</span>
        </SectionHeading>
        <div className='testimonials'>
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className='testimonial'>
              <img src={quoteIcon} alt='' className='icon' />
              <blockquote className='quote'>
                <Paragraph md>{testimonial.quote}</Paragraph>
              </blockquote>
              <div className='about'>
                <MicroHeading raptureBlue>{testimonial.user}</MicroHeading>
                <Paragraph sm>{testimonial.role}</Paragraph>
              </div>
              <img
                src={testimonial.avatar}
                alt={testimonial.user}
                className='avatar'
              />
            </article>
          ))}
        </div>
      </Container>
      <img src={bgPatternTwo} alt='' className='bg-pattern bg-pattern--two' />
    </StyledSection>
  );
};

export default Testimonials;
