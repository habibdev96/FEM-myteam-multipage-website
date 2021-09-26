import styled from 'styled-components';
import { textStyles, headingStyles } from '../../abstracts/Mixins';
import logo from '../../assets/logo/habibdevgif.gif';

const StyledTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;

  .heading {
    ${textStyles};
    color: var(--white);
    text-align: center;
    font-size: var(--xxs);
  }

  .link {
    ${headingStyles};
    color: var(--lightCoral);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .tag-logo {
    width: 5rem;
  }
`;

const Tag = () => {
  return (
    <StyledTag>
      <h3 className='heading'>
        project for{' '}
        <a
          href='https://www.frontendmentor.io/challenges/myteam-multipage-website-mxlEauvW'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          frontend mentor
        </a>{' '}
        coded by{' '}
        <a
          href='https://github.com/habibdev96'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          habibdev{' '}
        </a>
      </h3>
      <img src={logo} alt='logo' className='tag-logo' />
    </StyledTag>
  );
};

export default Tag;
