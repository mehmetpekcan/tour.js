import { createContext, useContext, useState } from "react";

const EditorContext = createContext();

function EditorProvider({ children }) {
  const [selector, setSelector] = useState();
  const [title, setTitle] = useState("Publish your changes");
  const [content, setContent] = useState(
    "Your colleagues will see the changefs you made as soon as you publish them."
  );
  const [next, setNext] = useState("Next Tip");
  const [prev, setPrev] = useState("Prev Tip");
  const [finish, setFinish] = useState("Finish");
  const [skip, setSkip] = useState("Skip");

  const [draftTour, setDraftTour] = useState({
    selector: {
      value: selector,
      set: setSelector,
    },
    title: {
      value: title,
      set: setTitle,
      isActive: true,
    },
    content: {
      value: content,
      set: setContent,
      isActive: true,
    },
    next: {
      value: next,
      set: setNext,
      isActive: true,
    },
    prev: {
      value: prev,
      set: setPrev,
      isActive: false,
    },
    finish: {
      value: finish,
      set: setFinish,
      isActive: false,
    },
    skip: {
      value: skip,
      set: setSkip,
      isActive: false,
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

  const changeValue = (field, newValue) => {
    draftTour[field].set(newValue);
  };

  return (
    <EditorContext.Provider
      value={{
        draftTour,
        setDraftTour,
        changeValue,
        changeActiveState,
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
