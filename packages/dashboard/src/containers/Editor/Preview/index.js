import Title from "components/atoms/Title";
import * as S from "./style";

function Preview() {
  return (
    <S.Preview type="transparent">
      <S.Preview.Header align="start">
        <Title level={4}>Preview</Title>
      </S.Preview.Header>
      <S.Preview.Body>Asd</S.Preview.Body>
    </S.Preview>
  );
}

export default Preview;
