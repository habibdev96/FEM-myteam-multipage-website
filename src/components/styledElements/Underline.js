import styled from 'styled-components';

const StyledUnderline = styled.div`
  height: 0.5rem;
  width: 10%;
  margin-bottom: 5rem;

  ${({ raptureBlue }) => raptureBlue && `background-color: var(--raptureBlue)`}
  ${({ lightCoral }) => lightCoral && `background-color: var(--lightCoral)`}
`;

export default StyledUnderline;
