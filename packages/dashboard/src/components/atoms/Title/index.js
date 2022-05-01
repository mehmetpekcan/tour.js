import * as S from "./style";

function Title({ level, children }) {
  return (
    <S.Title level={`h${level}`}>
      <S.TitleElement as={`h${level}`}>{children}</S.TitleElement>
    </S.Title>
  );
}

export default Title;
