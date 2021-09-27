import styled from 'styled-components';
import { HeroHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import StyledUnderline from '../styledElements/Underline';
import {
  maxWidthLg,
  twoCol,
  sectionSpacingLg,
  sectionSpacingMd,
} from '../../abstracts/Mixins';
import heroPatternOne from '../../assets/bg-pattern-home-1.svg';
import heroPatternTwo from '../../assets/bg-pattern-home-2.svg';
import Responsive from '../../abstracts/Responsive';

const StyledHeader = styled.header`
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;

    &--one {
      width: 15%;
      top: 0;
      left: -5%;
      z-index: 5;

      ${Responsive.lg`
        width: 25%;
      `}

      ${Responsive.sm`
        width: 40%;
      `}
    }

    &--two {
      width: 20%;
      right: 10%;
      bottom: 0;

      ${Responsive.lg`
        width: 40%;
      `}
    }
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingLg}
  ${twoCol}
  position: relative;
  z-index: 10;

  ${Responsive.md`
  grid-template-columns: 1fr;
  ${sectionSpacingMd}
  `}
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
