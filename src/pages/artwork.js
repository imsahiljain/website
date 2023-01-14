import React from "react";
import { Navbar } from "../components/navbar/navbar";
import MainArtwork from "../components/art/artwork_main";
import Head from "next/head";

const Artwork = () => {
  return (
    <>
      <Head>
        <title>Sahil Jain | Artwork</title>
      </Head>
      <Navbar />
      <MainArtwork />
    </>
  );
};

export default Artwork;
