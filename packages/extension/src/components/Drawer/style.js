import styled, { css } from "styled-components";
import { Button as AntdButton } from "antd";

const Drawer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 25rem;
  box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.05);
  background-color: var(--white);
  transition: all 300ms;

  ${({ isVisible }) =>
    isVisible
      ? css`
          display: block;
          right: 0;
        `
      : css`
          display: none;
          right: -20rem;
        `}

  & > * {
    color: var(--gray);
  }
`;

const Highlighter = styled.span`
  display: inline-block;
  position: absolute;
  background: transparent;
  border: 2px solid blue;
  z-index: -1;
  transition: all 300ms;
`;

const Window = styled.div`
  display: flex;
  align-items: center;
`;

const Introduction = styled.div`
  margin-bottom: 12px;
`;

const Title = styled.h3`
  color: var(--black);
  font-size: 36px;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 0;
`;

const Button = styled(AntdButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--black);
  cursor: pointer;
`;

const LogoText = styled.h2`
  color: var(--black);
  margin-bottom: 0;
  margin-top: 0;
  letter-spacing: -0.9px;
`;

const NewElements = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
  Drawer,
  Highlighter,
  Window,
  Introduction,
  Title,
  Text,
  Button,
  LogoText,
  NewElements,
};
