import Title from "components/atoms/Title";
import Text from "components/atoms/Text";
import Button from "components/atoms/Button";
import Card from "components/molecules/Card";
import Image from "components/atoms/Image";

import TestImage from "assets/images/test.png";

import * as S from "./style";

function NewTour() {
  return (
    <S.NewTour>
      <Title level={1}>Select Tour Type</Title>
      <Text align="center">
        Help users understand unknown on unfamiliar objects that aren't
        described directly in the user interface.
      </Text>
      <S.Cards>
        {[1, 2, 3].map((_, index) => (
          <Card key={index}>
            <Card.Header>
              <Title level={4}>Tooltip Modal</Title>
            </Card.Header>
            <Card.Body>
              <Image src={TestImage} />
              <Text align="center">
                Regular tooltips when you want to offer contextual information.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Button type="primary" href="/tour-editor?type=modal">
                Select
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </S.Cards>
    </S.NewTour>
  );
}

export default NewTour;
