import styled from 'styled-components';
import { SubHeroHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import StyledUnderline from '../styledElements/Underline';
import { twoCol, maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import bgPattern from '../../assets/bg-pattern-about-1-mobile-nav-1.svg';

const StyledHeader = styled.header`
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;
    width: 10%;
    bottom: 0;
    right: -5%;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  ${twoCol}
`;

const AboutSubHero = () => {
  return (
    <StyledHeader>
      <Container>
        <SubHeroHeading>About</SubHeroHeading>
        <div>
          <StyledUnderline lightCoral />
          <Paragraph lg>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </Paragraph>
        </div>
      </Container>
      <img src={bgPattern} alt='' className='bg-pattern' />
    </StyledHeader>
  );
};

export default AboutSubHero;
