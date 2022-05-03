import styled from "styled-components";

const Input = styled.div`
  position: relative;

  & > input {
    outline: none;
    border: 1px solid var(--gray-very-light);
    padding: 12px 44px 12px 8px;
    background-color: var(--gray-light);
    color: var(--gray);
    border-radius: 4px;
    width: 100%;
  }

  & > svg {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    font-size: 24px;
  }
`;

export { Input };
