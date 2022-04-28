import * as S from "./style";

function Container({ children }) {
  return (
    <S.Row>
      <S.Col span={20} offset={2}>
        {children}
      </S.Col>
    </S.Row>
  );
}

export default Container;
