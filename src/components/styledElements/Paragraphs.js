import styled, { css } from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Paragraph = styled.p`
  ${textStyles}
  color: var(--white);
  position: relative;
  z-index: 5;

  ${({ lg }) => lg && `font-size: 1.8rem`}
  ${({ md }) => md && `font-size: 1.5rem`}
  ${({ sm }) =>
    sm &&
    css`
      font-size: 1.4rem;
      font-weight: 500;
      font-style: italic;
    `}
`;

export default Paragraph;
