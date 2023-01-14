import React from "react";
import { Footer } from "../components/footer/footer";
import Hero from "../components/hero/hero";
import { Navbar } from "../components/navbar/navbar";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sahil Jain | Home</title>
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
