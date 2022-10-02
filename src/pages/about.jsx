import React from "react";
import { Footer } from "../components/footer/footer";
import Hero from "../components/hero/hero";
import MainAbout from "../components/about/about_main";
import { Navbar } from "../components/navbar/navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <MainAbout />
      {/* <Footer /> */}
    </>
  );
};

export default About;
