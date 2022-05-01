import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "pages/Home";
import NewTourPage from "pages/NewTour";
import EditorPage from "pages/Editor";

import "styles/reset.css";
import "styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-tour" element={<NewTourPage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
