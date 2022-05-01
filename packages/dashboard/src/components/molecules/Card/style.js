import styled from "styled-components";

import Button from "components/atoms/Button";

const Card = styled.div`
  border-radius: 4px;
  width: 300px;
  background-color: var(--gray-light);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  padding: 16px;

  & > * {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.div`
  margin-bottom: 16px;
`;

const Body = styled.div``;

const Footer = styled.div`
  margin-top: 16px;

  ${Button.S.Button} {
    width: 100%;
  }
`;

export { Card, Header, Body, Footer };
