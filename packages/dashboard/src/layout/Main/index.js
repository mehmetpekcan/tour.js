import * as S from "./style";

function Main({ children }) {
  return (
    <S.Main>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </S.Main>
  );
}

export default Main;
