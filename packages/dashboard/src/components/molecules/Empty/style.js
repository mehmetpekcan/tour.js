import styled from "styled-components";

const Empty = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > :nth-child(1) {
    margin-bottom: 24px;
  }

  & > :nth-child(2) {
    margin-bottom: 8px;
  }
`;

export { Empty };
