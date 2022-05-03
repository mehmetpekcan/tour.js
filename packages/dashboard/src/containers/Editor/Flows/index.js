import Title from "components/atoms/Title";
import Card from "components/molecules/Card";

import * as S from "./style";

function Flows() {
  return (
    <S.Flows type="transparent">
      <Card.Header align="start">
        <Title level={4}>Flows</Title>
      </Card.Header>
      <Card.Body>
        <S.Flow>
          <S.FlowOrder>1</S.FlowOrder>
          <S.FlowTitle level={5}>Flow Title</S.FlowTitle>
        </S.Flow>
        <S.Flow>
          <S.FlowOrder>2</S.FlowOrder>
          <S.FlowTitle level={5}>Flow Title</S.FlowTitle>
        </S.Flow>
      </Card.Body>
    </S.Flows>
  );
}

export default Flows;
