import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Awards from "./pages/awards";
import Artwork from "./pages/artwork.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/artwork" element={<Artwork />} />
      </Routes>
    </>
  );
}

export default App;
