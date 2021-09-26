import styled from 'styled-components';
import quoteIcon from '../../assets/icon-quotes.svg';
import Paragraph from '../styledElements/Paragraphs';
import { MicroHeading } from '../styledElements/Headings';

const StyledArticle = styled.article`
  position: relative;

  .icon {
    position: absolute;
    width: 20%;
    top: -10%;
    left: 40%;
    z-index: 1;
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
