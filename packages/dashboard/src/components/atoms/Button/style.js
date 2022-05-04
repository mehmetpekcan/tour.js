import styled, { css } from "styled-components";

const CommonCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;

  & > a,
  & > button {
    position: relative;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    height: 100%;
    width: 100%;
    gap: 4px;
  }
`;

const PrimaryCSS = css`
  & > a,
  & > button {
    border: 1px solid var(--blue);
    border-radius: 4px;
    text-decoration: none;
    color: var(--white);
    background-color: var(--blue);
    padding: 12px 36px;
    box-shadow: 0 5px 10px var(--blue-light);
    transition: all 300ms;

    &:hover {
      background-color: transparent;
      color: var(--blue);
    }
  }
`;

const DefaultCSS = css`
  & > a,
  & > button {
    border: 1px solid var(--gray-very-light);
    border-radius: 4px;
    text-decoration: none;
    color: var(--gray);
    padding: 12px 36px;
    background-color: var(--gray-light);
    transition: all 300ms;

    &:hover {
      background-color: var(--gray-very-light);
    }
  }
`;

const LinkCSS = css`
  & > a,
  & > button {
    border: 1px solid var(--gray);
    border-radius: 4px;
    color: var(--blue);
  }
`;

const LinkType = {
  primary: PrimaryCSS,
  default: DefaultCSS,
  link: LinkCSS,
};

const Button = styled.div`
  ${CommonCSS};
  ${({ type }) => LinkType[type]};
`;

const Icon = styled.span`
  svg {
    width: 24px;
    height: 24px;
  }
`;

export { Button, Icon };
