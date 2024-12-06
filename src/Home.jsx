import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Graph from "./Graph";
import Tmain from "./Tmain";
import Pmain from "./Pmain";
import Features from "./Features";


const Home = () => {
  return (
    <div className="relative font-DMSans bg-[#0F0F0F]">
      {/* Header  */}
      <div className="z-50 absolute top-0 left-0 right-0">
        <Header />
        {/* <Testtwo /> */}
        {/* <Testone /> */}
      </div>

      <main className="bg-[#1d1c20] pt-[108px] flex flex-col justify-center items-center gap-[62px] relative">
        {/* Hero section  */}
        <Hero />

        {/* graph section  */}
        <Graph />

        {/* testimonials  */}
        <Tmain />
        {/* Features Section  */}
        <Features />
        {/* pricing section  */}
        <Pmain />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
