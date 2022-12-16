import React from "react";
import { Navbar } from "../components/navbar/navbar";
import MainArtwork from "../components/art/artwork_main";
import { Helmet } from "react-helmet";

const Artwork = () => {
  return (
    <>
      <Helmet>
        <title>Sahil Jain | Artwork</title>
      </Helmet>
      <Navbar />
      <MainArtwork />
    </>
  );
};

export default Artwork;
