import styled, { css } from "styled-components";

import Button from "components/atoms/Button";

const Card = styled.div`
  border-radius: 4px;
  width: 300px;
  padding: 16px;

  ${({ type }) =>
    type !== "transparent" &&
    css`
      background-color: var(--gray-light);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
    `}

  & > * {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Header = styled.div`
  margin-bottom: 16px;
  text-align: ${({ align = "center" }) => align};
`;

const Body = styled.div``;

const Footer = styled.div`
  align-items: center;
  margin-top: 16px;

  ${Button.S.Button} {
    width: 100%;
  }
`;

export { Card, Header, Body, Footer };
