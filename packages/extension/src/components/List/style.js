import styled, { css } from "styled-components";

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  overflow: hidden;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      ${Index} {
        background-color: var(--blue);
        color: var(--white);
      }

      ${Title} {
        color: var(--blue);
      }

      ${Body} {
        max-height: 100rem;
        border-color: var(--blue);
        margin-left: 11px;
        padding: 16px 0 16px 12px;
      }
    `}
`;

const Index = styled.span`
  width: 24px;
  height: 24px;
  line-height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  margin-right: 8px;
  background-color: var(--gray);
  color: var(--white);
`;

const Title = styled.h3`
  font-weight: 500;
  color: var(--gray);
`;

const Body = styled.div`
  max-height: 0;

  font-size: 14px;
  border-left: 1.5px solid var(--gray);
`;

export { List, Item, Index, Title, Body };
