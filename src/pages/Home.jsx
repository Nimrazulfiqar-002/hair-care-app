import React from "react";
import HairProblemSelector from "../components/HairProblemSelector";
import HeroSection from "../components/Herosection";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <HeroSection/>
        <div className="min-h-screen flex items-center justify-center bg-green-50 pb-10">
          <HairProblemSelector />
        </div>
        <Footer/>
    </>
       
  );
};

export default Home;
