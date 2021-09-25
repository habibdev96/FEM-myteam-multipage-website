import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { textStyles } from '../../abstracts/Mixins';

const StyledLink = styled(Link)`
  ${textStyles}
  color: var(--white);
  font-size: 1.8rem;
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    color: var(--lightCoral);
  }
`;

export default StyledLink;
