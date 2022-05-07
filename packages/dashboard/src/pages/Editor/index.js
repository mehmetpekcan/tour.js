import { useEffect } from "react";
import Tour from "@tour.js/core";

import MainLayout from "layout/Main";
import EditorContainer from "containers/Editor";
import EditorProvider from "containers/Editor/EditorProvider";

const editorTourSteps = [
  {
    selector: "#selector-input",
    title: "Add target element 🚀",
    content:
      "You can type your target element selector here like #text, .input",
    finish: "Finish the tour",
  },
  {
    selector: "#type-section",
    title: "Change type of step 🚀",
    content: "You can change the type of step",
  },
  {
    selector: "#text-field-section",
    title: "Add text fields 🚀",
    content: "You can add or remove text fields from here",
  },
  {
    selector: "#buttons-section",
    title: "Buttons 🚀",
    content: "You can configure buttons of the step",
  },
  {
    selector: "#preview-section",
    title: "Preview 🚀",
    content: "You can preview your step constantly",
  },
  {
    selector: "#tooltip-wrapper",
    title: "Customize 🚀",
    content:
      "You can customize any of the field by just clicking and changing the content of it",
  },
];

let tour = new Tour({ steps: editorTourSteps });

function Home() {
  useEffect(() => {
    tour.start();
  }, []);

  return (
    <MainLayout>
      <EditorProvider>
        <EditorContainer />
      </EditorProvider>
    </MainLayout>
  );
}

export default Home;
