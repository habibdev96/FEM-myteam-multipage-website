import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings';
import { Button } from '../styledElements/Buttons';
import {
  sectionSpacingMd,
  maxWidthSm,
  flexAlign,
} from '../../abstracts/Mixins';
import bgPattern from '../../assets/bg-pattern-home-6-about-5.svg';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--lightCoral);

  .bg-pattern {
    position: absolute;
    width: 20%;
    bottom: 0;
    left: 0;

    ${Responsive.sm`
      width: 40%;
    `}
  }
`;

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthSm}
  ${flexAlign}
  justify-content: space-between;
  flex-wrap: wrap;

  ${Responsive.md`
    text-align: center;
    justify-content: center;
  `}
`;

const Cta = () => {
  return (
    <StyledSection>
      <img src={bgPattern} alt='' className='bg-pattern' />
      <Container>
        <SectionHeading dark>Ready to get started?</SectionHeading>
        <Button secondary={+true} to='/Contact'>
          contact us
        </Button>
      </Container>
    </StyledSection>
  );
};

export default Cta;
