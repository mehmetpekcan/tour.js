import styled from "styled-components";

const Title = styled.div`
  & > h1 {
    font-size: 48px;
    margin-bottom: 8px;
  }

  & > h2 {
    font-size: 36px;
    margin-bottom: 4px;
  }

  & > h3 {
    font-size: 24px;
  }

  & > h4 {
    font-size: 18px;
  }
`;

const TitleElement = styled.span``;

export { Title, TitleElement };
