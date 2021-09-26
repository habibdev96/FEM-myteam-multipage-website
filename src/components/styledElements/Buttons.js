import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { textStyles } from '../../abstracts/Mixins';

export const Button = styled(Link)`
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

export const FormButton = styled.input`
  ${textStyles}
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  padding: 1rem 2rem;
  width: 40%;
  margin-top: 2rem;
  border: 0.1rem solid var(--white);
  color: var(--white);
  border-radius: var(--mainRadius);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    background-color: var(--white);
    color: var(--sacrementoGreen);
  }
`;
