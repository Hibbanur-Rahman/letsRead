import React from "react";
import { useState } from "react";
import HeroPng from "../assets/images/letsread.png";
import Enquire from "../pages/Enquire";

const HeroSection = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <img src={HeroPng} alt="img" className="w-full" />

      <div className="absolute top-[260px] left-[200px]">
        <h1 className="text-white text-5xl font-bold">We Prepare To Ignite </h1>
        <h1 className="text-white text-5xl font-bold mt-4">
          The Joy of <span className="text-yellow ">Reading</span>
        </h1>
        <p className="text-white text-lg w-7/12 mt-5">
          Reading kits offer families with young children the tools and
          information to help inspire a. passion for reading in their homes.
        </p>
        <p className="text-white text-2xl w-7/12 mt-5">555+ Schools  &gt;&gt; 500+ Teachers  &gt;&gt; 5000+ Childrens </p>
        <button
          onClick={toggleModal}
          className="bg-yellow px-4 py-2 mt-4  rounded-lg font-bold"
        >
          Enquire Now
        </button>
      </div>
      {modal && <Enquire />}
    </div>
  );
};
export default HeroSection;
