import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import StyledLink from '../styledElements/Link';
import {
  maxWidthLg,
  sectionSpacingSm,
  flexAlign,
  textStyles,
} from '../../abstracts/Mixins';
import { FaFacebook, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import Tag from './Tag';
import Responsive from '../../abstracts/Responsive';

const StyledFooter = styled.footer`
  background-color: var(--darkGreen);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  ${flexAlign}
  justify-content: space-between;
  flex-wrap: wrap;

  ${Responsive.lg`
    justify-content: center;
  `}

  .left {
    ${flexAlign}

    ${Responsive.sm`
      flex-direction: column; 
    `}
  }

  .links {
    ${flexAlign}
  }

  .contact {
    display: flex;
    flex-direction: column;
    margin-left: 5rem;

    ${Responsive.md`
      margin-left: 0;
    `}

    li {
      ${textStyles}
      font-size: 1.5rem;
      color: var(--white);
      opacity: 0.7;
    }
  }

  .socials {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    margin-bottom: 6rem;

    ${Responsive.lg`
      justify-content: center;
    `}
  }

  .social {
    font-size: var(--md);
    color: var(--white);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--lightCoral);
    }
  }

  .copyright {
    ${textStyles}
    font-size: 1.5rem;
    color: var(--white);
    opacity: 0.7;

    ${Responsive.sm`
      text-align: center;
    `}
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className='left'>
          <div>
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
          <ul className='contact'>
            <li>987 Hillcrest Lane</li>
            <li>Irvine, CA</li>
            <li>California 92714</li>
            <li>Call Us: 949-833-7432</li>
          </ul>
        </div>
        <div className='right'>
          <div className='socials'>
            <a href='#!'>
              <FaFacebook className='social' />
            </a>
            <a href='#!'>
              <FaPinterestSquare className='social' />
            </a>
            <a href='#!'>
              <FaTwitter className='social' />
            </a>
          </div>
          <p className='copyright'>Copyright 2021. All Rights Reserved</p>
        </div>
      </Container>
      <Tag />
    </StyledFooter>
  );
};

export default Footer;
