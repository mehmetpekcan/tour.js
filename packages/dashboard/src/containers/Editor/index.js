import EditorProvider from "./EditorProvider";
import Craft from "./Craft";
import Flows from "./Flows";
import Preview from "./Preview";

import * as S from "./style";

function Editor() {
  const handleButtonAdd = (type) => {
    console.log("Add button ", type);
  };

  return (
    <S.Editor>
      <EditorProvider>
        <Craft handleButtonAdd={handleButtonAdd} />
        <Preview />
        <Flows />
      </EditorProvider>
    </S.Editor>
  );
}

export default Editor;
