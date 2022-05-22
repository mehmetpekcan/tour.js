import styled from 'styled-components';

const Footer = styled.footer`
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavItem = styled.div`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export { Footer, Navigation, NavItem };
