import styled from 'styled-components';

const Header = styled.header`
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
    margin-right: var(--gap-m);
  }
`;

export { Header, Navigation, NavItem };
