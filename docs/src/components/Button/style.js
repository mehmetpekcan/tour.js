import styled, { css } from 'styled-components';

const buttonKind = {
  default: css`
    color: var(--gray);
    background-color: transparent;
    border: 1px solid var(--gray);
    padding: 8px 24px;

    &:hover {
      color: var(--white);
      border-color: var(--white);
    }
  `,
  primary: css`
    color: var(--black);
    background-color: var(--white);
    border: 1px solid var(--white);
    padding: 0 24px;

    &:hover {
      color: var(--white);
      background-color: var(--black);
    }
  `,
  link: css`
    color: var(--gray);
    height: 100%;

    &:hover {
      color: var(--white);
    }
  `,
};

const common = css`
  appearance: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 500;
  border-radius: 6px;
  font-size: 1rem;
  flex-shrink: 0;
  margin: 0;
  transition: all 0.2s ease;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

const Link = styled.a`
  ${common};
  ${({ kind }) => buttonKind[kind]};
`;

const Button = styled.button`
  ${common};
  ${({ kind }) => buttonKind[kind]};
  min-width: 200px;
  height: 48px;
`;

const IconWrapper = styled.div`
  margin-right: var(--gap-sm);
`;

export { Button, Link, IconWrapper };
