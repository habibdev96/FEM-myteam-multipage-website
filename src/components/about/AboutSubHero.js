import styled from 'styled-components';
import { SubHeroHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import StyledUnderline from '../styledElements/Underline';
import { twoCol, maxWidthLg, sectionSpacingLg } from '../../abstracts/Mixins';
import bgPattern from '../../assets/bg-pattern-home-4-about-3.svg';
import bgPatternTwo from '../../assets/bg-pattern-about-1-mobile-nav-1.svg';
import Responsive from '../../abstracts/Responsive';

const StyledHeader = styled.header`
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;
    width: 15%;

    ${Responsive.lg`
      width: 15%;
    `}

    ${Responsive.md`
      width: 25%;
    `}

    ${Responsive.sm`
      width: 35%;
    `}

    &--one {
      bottom: 0;
      right: 0;
    }

    &--two {
      top: 0;
      left: 0;
    }
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingLg}
  ${twoCol}

  ${Responsive.md`
    grid-template-columns: 1fr;
  `}
`;

const AboutSubHero = () => {
  return (
    <StyledHeader>
      <img src={bgPattern} alt='' className='bg-pattern bg-pattern--one' />
      <Container>
        <SubHeroHeading data-aos='fade-in'>About</SubHeroHeading>
        <div data-aos='fade-in' data-aos-delay='200'>
          <StyledUnderline lightCoral />
          <Paragraph lg>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </Paragraph>
        </div>
      </Container>
      <img src={bgPatternTwo} alt='' className='bg-pattern bg-pattern--two' />
    </StyledHeader>
  );
};

export default AboutSubHero;
