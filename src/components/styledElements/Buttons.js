import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { textStyles } from '../../abstracts/Mixins';

const Button = styled(Link)`
  ${textStyles}
  font-size: 1.8rem;
  padding: 0.5rem 2rem;
  background-color: transparent;
  transition: var(--mainTransition);
  border-radius: var(--mainRadius);

  ${({ primary }) =>
    primary &&
    css`
      color: var(--white);
      border: 0.2rem solid var(--white);

      &:hover,
      &:focus {
        background-color: var(--white);
        color: var(--sacrementoGreen);
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      color: var(--sacrementoGreen);
      border: 0.2rem solid var(--sacrementoGreen);

      &:hover,
      &:focus {
        background-color: var(--sacrementoGreen);
        color: var(--white);
      }
    `}
`;

export default Button;
