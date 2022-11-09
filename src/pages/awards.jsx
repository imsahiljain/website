import React from "react";
import { Navbar } from "../components/navbar/navbar";
import MainAwards from "../components/awards/awards_main";
import { Helmet } from "react-helmet";

const Awards = () => {
  return (
    <>
      <Helmet>
        <title>Sahil Jain | Awards</title>
        <meta
          name="description"
          content="Hi, I'm Sahil, a developer, basketball player and an artist. I'm a 16 y/o high school senior at Montfort School in Delhi."
        />
      </Helmet>
      <Navbar />
      <MainAwards />
    </>
  );
};

export default Awards;
