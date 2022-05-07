import { createContext, useContext, useState } from "react";
import { Tooltip } from "@tour.js/core";

const EditorContext = createContext();

const initialTour = {
  selector: "body",
  title: "Publish your changes",
  content:
    "Your colleagues will see the changes you made as soon as you publish them.",
  next: "Next Tip",
  prev: "Prev Tip",
  finish: "Finish",
  skip: "Skip",
};

function EditorProvider({ children }) {
  const [tours, setTours] = useState([]);
  const [draftTour, setDraftTour] = useState({
    selector: {
      value: initialTour.selector,
      selector: "input",
    },
    title: {
      value: initialTour.title,
      isDisabled: false,
      isActive: true,
      selector: `.${Tooltip.constant.TITLE.class}`,
    },
    content: {
      value: initialTour.content,
      isDisabled: false,
      isActive: true,
      selector: `.${Tooltip.constant.CONTENT.class}`,
    },
    next: {
      value: initialTour.next,
      isDisabled: false,
      isActive: true,
      selector: `.${Tooltip.constant.NEXT_BUTTON.class}`,
    },
    prev: {
      value: initialTour.prev,
      isDisabled: false,
      isActive: false,
      selector: `.${Tooltip.constant.PREV_BUTTON.class}`,
    },
    finish: {
      value: initialTour.finish,
      isDisabled: false,
      isActive: false,
      selector: `.${Tooltip.constant.FINISH_BUTTON.class}`,
    },
    skip: {
      value: initialTour.skip,
      isActive: false,
      isDisabled: true,
      // selector: `.${Tooltip.constant.SKIP.selector}`
    },
  });

  const changeActiveState = (field) => {
    setDraftTour({
      ...draftTour,
      [field]: {
        ...draftTour[field],
        isActive: !draftTour[field].isActive,
      },
    });
  };

  const changeDraftValue = (field, newValue) => {
    draftTour[field].set(newValue);
  };

  return (
    <EditorContext.Provider
      value={{
        draftTour,
        changeDraftValue,
        changeActiveState,
        tours,
        setTours,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export const useEditorContext = () => {
  const context = useContext(EditorContext);

  return context;
};

export default EditorProvider;
