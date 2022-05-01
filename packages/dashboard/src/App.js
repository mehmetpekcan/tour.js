import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home";

import "styles/reset.css";
import "styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
