import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import Text from "components/atoms/Text";

import EmptyImage from "assets/images/test.png";

import * as S from "./style";

function Empty() {
  return (
    <S.Empty>
      <Image src={EmptyImage} alt="No data, empty." />
      <Text>You don't have any Tour yet.</Text>
      <Button href="/create-tour/">Create Tour</Button>
    </S.Empty>
  );
}

export default Empty;
