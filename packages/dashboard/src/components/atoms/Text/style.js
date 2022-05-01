import styled from "styled-components";

const Text = styled.div`
  display: flex;
  width: 65ch;
  max-width: 100%;
  text-align: ${({ align = "start" }) => align};
`;

export { Text };
