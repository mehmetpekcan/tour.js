import * as S from "./style";

function Main({ children }) {
  return (
    <S.Main>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </S.Main>
  );
}

export default Main;
