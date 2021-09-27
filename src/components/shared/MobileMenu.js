import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
import { sectionSpacingSm } from '../../abstracts/Mixins';
import StyledLink from '../styledElements/Link';
import { Button } from '../styledElements/Buttons';
import bgPattern from '../../assets/bg-pattern-about-1-mobile-nav-1.svg';
import Responsive from '../../abstracts/Responsive';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  height: 100vh;
  width: 100vw;

  @media (min-width: 800px) {
    display: none;
  }
`;

const StyledMobileMenu = styled.aside`
  background-color: var(--midnightGreen);
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50vw;
  z-index: 3000;

  ${Responsive.sm`
    width: 75%;
  `}

  ${Responsive.xs`
    width: 85%;
  `}

  @media (min-width: 800px) {
    display: none;
  }

  .top {
    ${sectionSpacingSm}
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .toggle {
    background: transparent;
    outline: 0;
    border: 0;
  }

  .icon {
    color: var(--white);
    font-size: var(--lg);
  }

  .info {
    text-align: center;

    li {
      margin: 2.5rem 0;
    }
  }

  .link {
    font-size: 2.2rem;
  }

  .btn {
    padding: 1.5rem 2rem;
  }

  .bg-pattern {
    width: 75%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const MobileMenu = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  if (isSidebarOpen) {
    return (
      <Overlay onClick={() => setIsSidebarOpen(false)}>
        <StyledMobileMenu>
          <div className='top'>
            <button className='toggle' onClick={() => setIsSidebarOpen(false)}>
              <FaTimes className='icon' />
            </button>
          </div>
          <ul className='info'>
            <li>
              <StyledLink
                to='/'
                className='link'
                onClick={() => setIsSidebarOpen(false)}
              >
                home
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to='/About'
                className='link'
                onClick={() => setIsSidebarOpen(false)}
              >
                about
              </StyledLink>
            </li>
            <Button
              to='/Contact'
              className='btn'
              primary={+true}
              onClick={() => setIsSidebarOpen(false)}
            >
              Schedule a Demo
            </Button>
          </ul>
          <img src={bgPattern} alt='' className='bg-pattern' />
        </StyledMobileMenu>
      </Overlay>
    );
  } else {
    return null;
  }
};

export default MobileMenu;
