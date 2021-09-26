import { useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaTimes, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MicroHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';

const StyledArticle = styled.article`
  background-color: var(--sacrementoGreen);
  padding: 5rem 2rem;
  position: relative;
  height: 100%;

  &.active-article {
    background-color: var(--darkGreen);
  }

  .avatar {
    width: 10rem;
    border: 0.3rem solid var(--raptureBlue);
    border-radius: 50%;
    margin-bottom: 2rem;
  }

  .btn {
    position: absolute;
    bottom: -20%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    border: 0;
    outline: 0;
    background-color: var(--lightCoral);

    &.active-btn {
      background-color: var(--raptureBlue);
    }
  }

  .icon {
    color: var(--sacrementoGreen);
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .social {
    margin-top: 2rem;
    color: var(--white);
    font-size: var(--md);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--lightCoral);
    }
  }
`;

const Director = ({ avatar, director, role, quote }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <StyledArticle className={`${showInfo && 'active-article'}`}>
      {!showInfo ? (
        <>
          <img src={avatar} alt={director} className='avatar' />
          <MicroHeading raptureBlue>{director}</MicroHeading>
          <Paragraph sm>{role}</Paragraph>
        </>
      ) : (
        <>
          <MicroHeading raptureBlue>{director}</MicroHeading>
          <Paragraph md>{quote}</Paragraph>
          <div className='socials'>
            <a href='#!'>
              <FaTwitter className='social' />
            </a>
            <a href='#!'>
              <FaLinkedin className='social' />
            </a>
          </div>
        </>
      )}
      <button
        className={`btn ${showInfo && 'active-btn'}`}
        onClick={() => setShowInfo(!showInfo)}
      >
        {!showInfo ? <FaPlus className='icon' /> : <FaTimes className='icon' />}
      </button>
    </StyledArticle>
  );
};

export default Director;
