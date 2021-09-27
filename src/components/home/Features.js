import styled from 'styled-components';
import {
  maxWidthLg,
  sectionSpacingLg,
  twoCol,
  sectionSpacingMd,
} from '../../abstracts/Mixins';
import StyledUnderline from '../styledElements/Underline';
import { SectionHeading } from '../styledElements/Headings';
import bgPattern from '../../assets/bg-pattern-home-3.svg';
import Feature from './Feature';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  background-color: var(--sacrementoGreen);
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;
    width: 15%;
    bottom: -1%;
    right: -7%;

    ${Responsive.lg`
      width: 20%;
    `}

    ${Responsive.sm`
      width: 25%;
    `}

    ${Responsive.xs`
      width: 30%;
    `}
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingLg}
  ${twoCol}

  ${Responsive.md`
    ${sectionSpacingMd}
    grid-template-columns: 1fr;
  `}
`;

const Features = () => {
  const { features } = useGlobalContext();

  return (
    <StyledSection>
      <Container>
        <div>
          <StyledUnderline lightCoral />
          <SectionHeading>
            Build & manage distributed teams like no one else.
          </SectionHeading>
        </div>
        <div>
          {features.map((feature) => (
            <Feature key={feature.id} {...feature} />
          ))}
        </div>
      </Container>
      <img src={bgPattern} alt='' className='bg-pattern' />
    </StyledSection>
  );
};

export default Features;
