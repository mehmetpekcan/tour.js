import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import NewTour from "pages/NewTour";

import "styles/reset.css";
import "styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-tour/" element={<NewTour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
