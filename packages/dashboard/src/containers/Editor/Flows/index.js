import Title from "components/atoms/Title";
import Card from "components/molecules/Card";

import { useEditorContext } from "../EditorProvider";

import * as S from "./style";

function Flows() {
  const { tours } = useEditorContext();

  return (
    <S.Flows type="transparent">
      <Card.Header align="start">
        <Title level={4}>Flows</Title>
      </Card.Header>
      <Card.Body>
        {tours.length > 0 ? (
          tours.map((tour, index) => (
            <S.Flow key={tour.id}>
              <S.FlowOrder>{index}</S.FlowOrder>
              <S.FlowTitle level={5}>{tour.title}</S.FlowTitle>
            </S.Flow>
          ))
        ) : (
          <div>No flow added yet</div>
        )}
      </Card.Body>
    </S.Flows>
  );
}

export default Flows;
