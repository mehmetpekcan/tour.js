import styled, { css } from "styled-components";

const CommonCSS = css`
  & > a {
    display: flex;
    justify-content: center;
    font-weight: 500;
  }
`;

const PrimaryCSS = css`
  & > a {
    border: 1px solid var(--blue);
    border-radius: 4px;
    text-decoration: none;
    color: var(--white);
    background-color: var(--blue);
    padding: 12px 36px;
    transition: all 300ms;

    &:hover {
      background-color: transparent;
      color: var(--blue);
    }
  }
`;

const DefaultCSS = css`
  & > a {
    border: 1px solid var(--black);
    border-radius: 4px;
    text-decoration: none;
    color: var(--black);
    padding: 12px 36px;
    background-color: var(--gray-light);
    transition: all 300ms;

    &:hover {
      background-color: var(--black);
      color: var(--gray-light);
    }
  }
`;

const LinkCSS = css`
  & > a {
    border: 1px solid var(--black);
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
  ${CommonCSS}
  ${({ type }) => LinkType[type]}
`;

export { Button };
