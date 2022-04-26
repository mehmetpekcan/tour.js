import styled, { css } from "styled-components";

const Drawer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 25rem;
  box-shadow: rgba(var(--black-blue)) 0px 8px 24px;
  padding: 16px;
  background-color: var(--black);
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
  margin-bottom: 12px;

  & > * {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 999px;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

const Close = styled.button`
  background-color: var(--red);
`;

const Minimize = styled.button`
  background-color: var(--yellow);
`;

const Introduction = styled.div`
  margin-bottom: 12px;
`;

const Title = styled.h3`
  color: var(--white);
`;

const Text = styled.p``;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: transparent;
  color: var(--white);
  padding: 16px;
  border: 1px dashed var(--gray);
`;

const Icon = styled.span`
  margin-right: 8px;
  padding-bottom: 2px;
  display: inline-flex;
  justify-content: center;
  height: 24px;
  width: 24px;
  align-items: center;
  font-size: 24px;
  line-height: 24px;
  background-color: var(--blue);
  border-radius: 999px;
`;

const Line = styled.span`
  display: inline-block;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  height: 0.5px;
  background-color: var(--white);
`;

export {
  Drawer,
  Highlighter,
  Window,
  Close,
  Minimize,
  Introduction,
  Title,
  Text,
  Button,
  Icon,
  Line,
};
