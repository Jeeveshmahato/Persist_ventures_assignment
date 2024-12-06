import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Graph from "./Graph";
import Tmain from "./Tmain";
import Pmain from "./Pmain";
import Features from "./Features";
import KeyFeature from "./KeyFeature";
import Steps from "./Steps";
import FAQ from "./Faq";

const Home = () => {
  return (
    <div className="relative font-DMSans bg-[#0F0F0F]s bg-white ">
      {/* Header  */}
      <Header />
      {/* <Testtwo /> */}
      {/* <Testone /> */}

      <main className="bg-[#1d1c20]s bg-white  flex flex-col justify-center items-center relative">
        {/* Hero section  */}
        <Hero />
        <KeyFeature />
        <Steps />
        {/* graph section  */}
        <Graph />

        {/* testimonials  */}
        <Tmain />
        {/* Features Section  */}
        <Features />
        {/* pricing section  */}
        <Pmain />
      </main>
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
