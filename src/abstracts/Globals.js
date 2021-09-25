import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  :root {
    /* colors */
    --white: hsl(0, 0%, 100%);
    --midnightGreen: hsl(186, 98%, 17%);
    --lightCoral: hsl(0, 87%, 73%);
    --raptureBlue: hsl(179, 42%, 63%);
    --policeBlue: hsl(187, 41%, 29%);
    --jungleGreen: hsl(186, 100%, 14%);
    --sacrementoGreen: hsl(186, 96%, 10%);
    --darkGreen: hsl(186, 100%, 8%);
    
    /* radius */
    --mainRadius: 5rem;

    /* grid gap */
    --gap: 5rem; 
      
    /* shadows */
    --mainShadow: 0.1rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);

    /* transitions */
    --mainTransition: all 0.3s ease-in-out;

    /* font sizes */
    --xxl: 4.5rem;
    --xl: 4rem;
    --lg: 3.5rem;
    --md: 3rem;
    --sm: 2.5rem;
    --xs: 2rem;
    --xxs: 1.6rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
    font-family: 'Livvic', sans-serif;
    background-color: var(--midnightGreen);
    color: var(--white);
  }

  img {
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export default Globals;
