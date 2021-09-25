import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import StyledLink from '../styledElements/Link';
import {
  maxWidthLg,
  sectionSpacingSm,
  flexAlign,
} from '../../abstracts/Mixins';
import Button from '../styledElements/Buttons';

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
        <Button primary={+true}>contact us</Button>
      </Container>
    </nav>
  );
};

export default Navbar;
