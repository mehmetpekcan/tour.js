import styled, { css } from 'styled-components';

const buttonKind = {
  default: css`
    color: var(--gray);
    background-color: transparent;
    border: 1px solid var(--gray);

    &:hover {
      color: var(--white);
      border-color: var(--white);
    }
  `,
  primary: css`
    color: var(--black);
    background-color: var(--white);
    border: 1px solid var(--white);

    &:hover {
      color: var(--white);
      background-color: var(--black);
    }
  `,
};

const Button = styled.button`
  appearance: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 500;
  width: 100%;
  min-width: 200px;
  height: 50px;
  padding: 0 25px 0 25px;
  border-radius: 6px;
  font-size: 1rem;
  flex-shrink: 0;
  margin: 0;
  transition: all 0.2s ease;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  ${({ kind }) => {
    console.log('kind ', kind);

    return buttonKind[kind];
  }}
`;

const IconWrapper = styled.div`
  margin-right: var(--gap-sm);
`;

export { Button, IconWrapper };
