import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-size: 10rem;
  color: var(--white);
  width: 90%;

  span {
    color: var(--lightCoral);
  }
`;
