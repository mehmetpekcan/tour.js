import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import Text from "components/atoms/Text";

import EmptyFallbackImage from "assets/images/test.png";

import * as S from "./style";

function Empty({ image, text, button = null }) {
  return (
    <S.Empty>
      <Image src={image || EmptyFallbackImage} alt="No data, empty." />
      <Text>{text}</Text>
      {button && <Button href={button.href}>{button.text}</Button>}
    </S.Empty>
  );
}

export default Empty;
