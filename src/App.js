import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Artwork = lazy(() => import("./pages/artwork.jsx"));
function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artwork" element={<Artwork />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
