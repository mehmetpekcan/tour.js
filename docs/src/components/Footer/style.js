import styled from 'styled-components';

const Footer = styled.footer`
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-right: var(--gap);
  }
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavItem = styled.div`
  margin-left: var(--gap-m);
`;

export { Footer, Navigation, NavItem };
