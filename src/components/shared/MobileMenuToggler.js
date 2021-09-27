import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const Button = styled.button`
  display: none;
  background: transparent;
  outline: 0;
  border: 0;
  z-index: 2000;

  ${Responsive.md`
    display: block;
  `}

  .icon {
    color: var(--white);
    font-size: var(--lg);
  }
`;

const MobileMenuToggler = () => {
  const { setIsSidebarOpen } = useGlobalContext();

  return (
    <Button onClick={() => setIsSidebarOpen(true)}>
      <FaBars className='icon' />
    </Button>
  );
};

export default MobileMenuToggler;
