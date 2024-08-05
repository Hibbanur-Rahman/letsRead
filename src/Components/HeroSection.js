import React from "react";
import { useState } from "react";
import HeroPng from "../assets/images/letsread.png";
import Enquire from "../pages/Enquire";




const HeroSection = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <div>
     
      <img 
       src={HeroPng}
       alt="img"
      />
      <div className="absolute top-[200px] left-[100px]">
        <h1 className="text-white text-4xl font-bold w-5/12">We Prepare To Ignite The Joy Of <span className="text-yellow-300">Reading</span></h1>
        <p className="text-white text-lg w-7/12 mt-3">Reading kits offer families with young children the tools and information to help inspire a. passion for reading in their homes.</p>
        <button
          onClick={toggleModal}
         className='bg-yellow px-4 py-2 mt-4  rounded-lg font-bold'>Enquire Now
         </button>
      </div>
      {
         modal && (
          <Enquire />
         )
      }
         
    </div>
  );
};
export default HeroSection;