import styled from "styled-components";

const Card = styled.div`
  border-radius: 4px;
  width: 300px;
  background-color: var(--gray-light);
  border: 1px solid var(--gray);

  & > * {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
`;

const Header = styled.div`
  border-bottom: 1px solid var(--gray);
`;

const Body = styled.div`
  border-bottom: 1px solid var(--gray);
`;

const Footer = styled.div``;

export { Card, Header, Body, Footer };
