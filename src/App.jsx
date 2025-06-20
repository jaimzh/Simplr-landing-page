import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import SeeSimplrInAction from "./components/SeeSimplrInAction";
import Reviews from "./components/Reviews";
import Price from "./components/Price";
import Faq from "./components/Faq";

import Footer from "./components/Footer";
import TrySimplr from "./components/TrySimplr";


function App() {



  
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <SeeSimplrInAction />
        <Reviews />
        <Price />
        <Faq />
        <TrySimplr/>
      </main>

      <Footer />
    </>
  );
}

export default App;
