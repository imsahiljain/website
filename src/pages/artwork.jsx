import React from "react";
import { Navbar } from "../components/navbar/navbar";
import MainArtwork from "../components/art/artwork_main";
import { Helmet } from "react-helmet";

const Artwork = () => {
  return (
    <>
      <Helmet>
        <title>Sahil Jain | Artwork</title>
        <meta
          name="description"
          content="Hi, I'm Sahil, a developer, basketball player and an artist. I'm a 16 y/o high school senior at Montfort School in Delhi."
        />
      </Helmet>
      <Navbar />
      <MainArtwork />
    </>
  );
};

export default Artwork;
