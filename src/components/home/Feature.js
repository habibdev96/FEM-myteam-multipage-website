import styled from 'styled-components';
import { MicroHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import { flexAlign } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

const StyledArticle = styled.article`
  ${flexAlign}
  margin: 5rem 0;

  ${Responsive.xs`
    flex-direction: column;
    text-align: center;
  `}

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
