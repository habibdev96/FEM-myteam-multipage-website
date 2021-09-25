import styled from 'styled-components';

const StyledUnderline = styled.div`
  height: 0.5rem;
  width: 10%;

  ${({ raptureBlue }) => raptureBlue && `background-color: var(--raptureBlue)`}
`;

export default StyledUnderline;
