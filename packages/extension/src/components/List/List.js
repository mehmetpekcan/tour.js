import { useState } from "react";

import * as S from "./style";

function List({ steps }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeActiveItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <S.List>
      {steps.map((step, index) => (
        <S.Item
          key={index}
          isActive={activeIndex === index}
          onClick={() => changeActiveItem(index)}
        >
          <S.Title>
            <S.Index>{index + 1}</S.Index>
            {step.title}
          </S.Title>
          <S.Body>
            Content: {step.content}
            <br />
            Next Button: {step.next}
            <br />
            Prev Button: {step.prev}
            <br />
            Finish Button: {step.finish}
          </S.Body>
        </S.Item>
      ))}
    </S.List>
  );
}

export default List;
