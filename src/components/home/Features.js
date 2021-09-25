import styled from 'styled-components';
import {
  maxWidthLg,
  sectionSpacingLg,
  twoCol,
  flexAlign,
} from '../../abstracts/Mixins';
import StyledUnderline from '../styledElements/Underline';
import { SectionHeading } from '../styledElements/Headings';
import { MicroHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import bgPattern from '../../assets/bg-pattern-home-3.svg';
import { useGlobalContext } from '../../context';

const StyledSection = styled.section`
  background-color: var(--sacrementoGreen);
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;
    width: 15%;
    bottom: 0;
    right: -5%;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingLg}
  ${twoCol}

  .feature {
    ${flexAlign}
    margin: 5rem 0;
  }

  .icon {
    width: 15rem;
  }
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
            <article key={feature.id} className='feature'>
              <img src={feature.icon} alt={feature.title} className='icon' />
              <div>
                <MicroHeading lightCoral>{feature.title}</MicroHeading>
                <Paragraph md>{feature.description}</Paragraph>
              </div>
            </article>
          ))}
        </div>
      </Container>
      <img src={bgPattern} alt='' className='bg-pattern' />
    </StyledSection>
  );
};

export default Features;
