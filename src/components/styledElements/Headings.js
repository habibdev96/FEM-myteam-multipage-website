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

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 4.8rem;
  color: var(--white);

  span {
    color: var(--raptureBlue);
  }

  ${({ dark }) => dark && `color: var(--sacrementoGreen)`};
`;

export const MicroHeading = styled.h3`
  ${headingStyles}
  font-size: 1.8rem;

  ${({ lightCoral }) => lightCoral && `color: var(--lightCoral)`};
  ${({ raptureBlue }) => raptureBlue && `color: var(--raptureBlue)`};
`;
