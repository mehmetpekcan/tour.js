import * as S from "./style";

function Image({ src, alt }) {
  return (
    <S.Image>
      <img src={src} alt={alt} />
    </S.Image>
  );
}

export default Image;
