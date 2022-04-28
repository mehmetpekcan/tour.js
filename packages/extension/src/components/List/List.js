import { useState } from "react";
import { Collapse } from "antd";

import * as S from "./style";

const { Panel } = Collapse;

function List({ steps }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeActiveItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <Collapse accordion>
      {steps.map((step, index) => (
        <Panel
          header={step.title}
          key={index}
          onClick={() => changeActiveItem(index)}
        >
          <S.Body>
            <S.BodyItem>Content: {step.content}</S.BodyItem>
            <S.BodyItem>Next Button: {step.next}</S.BodyItem>
            <S.BodyItem>Prev Button: {step.prev}</S.BodyItem>
            <S.BodyItem>Finish Button: {step.finish}</S.BodyItem>
          </S.Body>
        </Panel>
      ))}
    </Collapse>
  );
}

export default List;
