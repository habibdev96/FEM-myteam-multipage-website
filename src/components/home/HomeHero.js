import styled from 'styled-components';
import { HeroHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import StyledUnderline from '../styledElements/Underline';
import { maxWidthLg, twoCol, sectionSpacingLg } from '../../abstracts/Mixins';
import heroPatternOne from '../../assets/bg-pattern-home-1.svg';
import heroPatternTwo from '../../assets/bg-pattern-home-2.svg';

const StyledHeader = styled.header`
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;

    &--one {
      width: 20%;
      top: 0;
      left: -10%;
      z-index: 5;
    }

    &--two {
      width: 20%;
      right: 10%;
      bottom: 0;
    }
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingLg}
  ${twoCol}
  position: relative;
  z-index: 10;
`;

const HomeHero = () => {
  return (
    <StyledHeader>
      <img src={heroPatternOne} alt='' className='bg-pattern bg-pattern--one' />
      <Container>
        <HeroHeading>
          Find the best <span>talent</span>
        </HeroHeading>
        <div>
          <StyledUnderline raptureBlue />
          <Paragraph lg>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </Paragraph>
        </div>
      </Container>
      <img src={heroPatternTwo} alt='' className='bg-pattern bg-pattern--two' />
    </StyledHeader>
  );
};

export default HomeHero;
