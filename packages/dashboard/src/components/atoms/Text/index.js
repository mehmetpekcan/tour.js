import * as S from "./style";

function Text({ align = "center", children, ...props }) {
  return (
    <S.Text {...props} align={align}>
      <p>{children}</p>
    </S.Text>
  );
}

export default Text;
