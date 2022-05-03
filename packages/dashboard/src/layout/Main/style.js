import styled from "styled-components";

const Main = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 64px auto 64px;

  main,
  main > * {
    height: 100%;
  }
`;

export { Main };
