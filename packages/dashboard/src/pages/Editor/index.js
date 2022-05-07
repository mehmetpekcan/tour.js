import MainLayout from "layout/Main";
import EditorContainer from "containers/Editor";
import EditorProvider from "containers/Editor/EditorProvider";

function Home() {
  return (
    <MainLayout>
      <EditorProvider>
        <EditorContainer />
      </EditorProvider>
    </MainLayout>
  );
}

export default Home;
