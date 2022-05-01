import styled from "styled-components";

const Text = styled.div`
  display: flex;
  max-width: 100%;
  text-align: ${({ align = "start" }) => align};
`;

export { Text };
