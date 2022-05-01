import styled from "styled-components";

const NewTour = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-top: 32px;

  & > * {
    flex: 1;
  }
`;

export { NewTour, Cards };
