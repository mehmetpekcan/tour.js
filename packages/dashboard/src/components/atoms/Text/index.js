import * as S from "./style";

function Text({ children }) {
  return (
    <S.Text>
      <p>{children}</p>
    </S.Text>
  );
}

export default Text;
