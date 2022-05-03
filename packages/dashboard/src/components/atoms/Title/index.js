import * as S from "./style";

function Title({ level, children, ...props }) {
  return (
    <S.Title level={`h${level}`} {...props}>
      <S.TitleElement as={`h${level}`}>{children}</S.TitleElement>
    </S.Title>
  );
}

Title.S = S;
export default Title;
