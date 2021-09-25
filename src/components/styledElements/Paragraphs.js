import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Paragraph = styled.p`
  ${textStyles}
  color: var(--white);

  ${({ lg }) => lg && `font-size: 1.8rem`}
`;

export default Paragraph;
