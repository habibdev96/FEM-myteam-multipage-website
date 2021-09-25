import { css } from 'styled-components';

const breakpoints = {
  xs: '380px',
  sm: '610px',
  md: '800px',
  lg: '1050px',
  xxl: '1200px',
};

const Responsive = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default Responsive;
