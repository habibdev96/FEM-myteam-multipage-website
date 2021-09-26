import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings';
import { maxWidthLg, sectionSpacingLg, threeCol } from '../../abstracts/Mixins';
import Director from './Director';
import bgPatternOne from '../../assets/bg-pattern-about-2-contact-1.svg';
import bgPatternTwo from '../../assets/bg-pattern-home-4-about-3.svg';
import { useGlobalContext } from '../../context';

const StyledSection = styled.section`
  position: relative;
  background-color: var(--jungleGreen);
  overflow: hidden;

  .bg-pattern {
    position: absolute;

    &--one {
      top: 0;
      left: -7%;
      width: 15%;
    }

    &--two {
      bottom: 0;
      right: 0;
      width: 10%;
    }
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingLg}
  text-align: center;

  .directors {
    ${threeCol}
    padding: 10rem 0;
  }
`;

const Directors = () => {
  const { directors } = useGlobalContext();

  return (
    <StyledSection>
      <img src={bgPatternOne} alt='' className='bg-pattern bg-pattern--one' />
      <Container>
        <SectionHeading>Meet the directors</SectionHeading>
        <div className='directors'>
          {directors.map((director) => (
            <Director key={director.id} {...director} />
          ))}
        </div>
      </Container>
      <img src={bgPatternTwo} alt='' className='bg-pattern bg-pattern--two' />
    </StyledSection>
  );
};

export default Directors;
