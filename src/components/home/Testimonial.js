import styled from 'styled-components';
import quoteIcon from '../../assets/icon-quotes.svg';
import Paragraph from '../styledElements/Paragraphs';
import { MicroHeading } from '../styledElements/Headings';
import Responsive from '../../abstracts/Responsive';

const StyledArticle = styled.article`
  position: relative;
  margin: 0 5rem;

  ${Responsive.sm`
    margin: 0 1rem;
  `}

  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }

  .icon {
    position: absolute;
    width: 10%;
    top: 50%;
    left: 60%;
    z-index: 1;

    ${Responsive.sm`
      width: 30%;
    `}
  }

  .quote {
    padding-bottom: 1rem;
  }

  .about {
    padding: 2rem 0;
  }

  .avatar {
    width: 10rem;
    border: 0.3rem solid var(--raptureBlue);
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
    z-index: 5;
  }
`;

const Testimonial = ({ quote, user, role, avatar }) => {
  return (
    <StyledArticle>
      <img src={quoteIcon} alt='' className='icon' />
      <blockquote className='quote'>
        <Paragraph md>{quote}</Paragraph>
      </blockquote>
      <div className='about'>
        <MicroHeading raptureBlue>{user}</MicroHeading>
        <Paragraph sm>{role}</Paragraph>
      </div>
      <img src={avatar} alt={user} className='avatar' />
    </StyledArticle>
  );
};

export default Testimonial;
