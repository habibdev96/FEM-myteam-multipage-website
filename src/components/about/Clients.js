import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings';
import {
  maxWidthLg,
  sectionSpacingMd,
  flexAlign,
} from '../../abstracts/Mixins';
import bgPattern from '../../assets/bg-pattern-about-4.svg';
import { useGlobalContext } from '../../context';

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--sacrementoGreen);

  .bg-pattern {
    position: absolute;
    width: 10%;
    top: 0;
    left: 0;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  text-align: center;

  .clients {
    ${flexAlign}
    justify-content: space-between;
    padding: 5rem 0;
  }

  .client {
    width: 20rem;

    &:nth-child(5) {
      width: 13rem;
    }
  }
`;

const Clients = () => {
  const { clients } = useGlobalContext();

  return (
    <StyledSection>
      <img src={bgPattern} alt='' className='bg-pattern' />
      <Container>
        <SectionHeading>Some of our clients</SectionHeading>
        <div className='clients'>
          {clients.map((client) => (
            <img
              key={client.id}
              src={client.logo}
              alt={client.company}
              className='client'
            />
          ))}
        </div>
      </Container>
    </StyledSection>
  );
};

export default Clients;
