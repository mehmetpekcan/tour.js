import Craft from "./Craft";
import Flows from "./Flows";
import Preview from "./Preview";
import { useEditorContext } from "./EditorProvider";

import * as S from "./style";

function Editor() {
  const { draftTour, tours, setTours } = useEditorContext();

  const handleOnSave = () => {
    let newTour = { id: Math.floor(Math.random() * 1000) };

    for (const field in draftTour) {
      if (draftTour[field].isActive) {
        const fieldEl = document.querySelector(draftTour[field].selector);
        newTour = { ...newTour, [field]: fieldEl.innerText };
      }
    }

    setTours([...tours, newTour]);
  };

  const handleRemoveTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <S.Editor>
      <Craft />
      <Preview onSave={handleOnSave} />
      <Flows onRemove={handleRemoveTour} />
    </S.Editor>
  );
}

export default Editor;
