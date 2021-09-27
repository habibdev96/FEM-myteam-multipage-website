import styled from 'styled-components';
import Responsive from '../../abstracts/Responsive';

const StyledUnderline = styled.div`
  height: 0.5rem;
  width: 10%;
  margin-bottom: 5rem;

  ${Responsive.md`
    width: 20%;
  `}

  ${Responsive.sm`
    width: 30%;
  `}

  ${({ raptureBlue }) => raptureBlue && `background-color: var(--raptureBlue)`}
  ${({ lightCoral }) => lightCoral && `background-color: var(--lightCoral)`}
`;

export default StyledUnderline;
