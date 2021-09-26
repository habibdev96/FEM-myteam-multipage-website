import styled from 'styled-components';
import { MicroHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import { flexAlign } from '../../abstracts/Mixins';

const StyledArticle = styled.article`
  ${flexAlign}
  margin: 5rem 0;

  .icon {
    width: 15rem;
  }
`;

const Feature = ({ icon, title, description }) => {
  return (
    <StyledArticle>
      <img src={icon} alt={title} className='icon' />
      <div>
        <MicroHeading lightCoral>{title}</MicroHeading>
        <Paragraph md>{description}</Paragraph>
      </div>
    </StyledArticle>
  );
};

export default Feature;
