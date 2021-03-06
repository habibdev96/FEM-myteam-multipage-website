import styled, { css } from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-size: 10rem;
  color: var(--white);
  width: 90%;

  ${Responsive.lg`
    font-size: 6.4rem;
  `}

  span {
    color: var(--lightCoral);
  }
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 4.8rem;
  position: relative;
  z-index: 5;
  color: var(--white);

  ${Responsive.md`
    font-size: 3.2rem;
  `}

  span {
    color: var(--raptureBlue);
  }

  ${({ dark }) => dark && `color: var(--sacrementoGreen)`};
`;

export const SubHeroHeading = styled(SectionHeading)`
  font-size: 6.4rem;

  ${({ contact }) =>
    contact &&
    css`
      font-size: 3.2rem;
      color: var(--lightCoral);
      padding: 2rem 0;
    `}
`;

export const MicroHeading = styled.h3`
  ${headingStyles}
  font-size: 1.8rem;
  position: relative;
  z-index: 5;

  ${({ lightCoral }) => lightCoral && `color: var(--lightCoral)`};
  ${({ raptureBlue }) => raptureBlue && `color: var(--raptureBlue)`};
`;
