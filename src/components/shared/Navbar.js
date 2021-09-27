import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import StyledLink from '../styledElements/Link';
import {
  maxWidthLg,
  sectionSpacingSm,
  flexAlign,
} from '../../abstracts/Mixins';
import { Button } from '../styledElements/Buttons';
import Responsive from '../../abstracts/Responsive';
import MobileMenuToggler from './MobileMenuToggler';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  ${flexAlign}
  justify-content: space-between;

  .logo {
    width: 15rem;
  }

  .left {
    ${flexAlign}
  }

  .links {
    ${flexAlign}

    ${Responsive.md`
      display: none;
    `}
  }

  .btn {
    ${Responsive.md`
      display: none;
    `}
  }
`;

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className='left'>
          <img src={logo} alt='myteam logo' className='logo' />
          <ul className='links'>
            <li>
              <StyledLink to='/'>home</StyledLink>
            </li>
            <li>
              <StyledLink to='/About'>about</StyledLink>
            </li>
          </ul>
        </div>
        <Button to='/Contact' primary={+true} className='btn'>
          contact us
        </Button>
        <MobileMenuToggler />
      </Container>
    </nav>
  );
};

export default Navbar;
