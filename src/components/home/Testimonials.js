import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings';
import {
  sectionSpacingLg,
  maxWidthLg,
  twoCol,
  threeCol,
} from '../../abstracts/Mixins';
import bgPatternOne from '../../assets/bg-pattern-home-4-about-3.svg';
import bgPatternTwo from '../../assets/bg-pattern-home-5.svg';
import Testimonial from './Testimonial';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;
    width: 15%;

    ${Responsive.lg`
      width: 25%;
    `}

    ${Responsive.md`
      width: 35%;
    `}

    ${Responsive.sm`
      width: 40%;
    `}

    ${Responsive.xs`
      width: 50%;
    `}

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
    padding: 10rem 0;

    ${Responsive.lg`
      ${twoCol}
      justify-content: center;
    `}

    ${Responsive.sm`
      grid-template-columns: 1fr;
      padding: 5rem 0;
    `}
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
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Container>
      <img src={bgPatternTwo} alt='' className='bg-pattern bg-pattern--two' />
    </StyledSection>
  );
};

export default Testimonials;
