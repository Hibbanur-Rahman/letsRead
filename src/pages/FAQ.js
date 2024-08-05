import React from "react";
import FaqImg from "../assets/images/faq.png";
import FaqImg2 from "../assets/images/faq2.png";
import AccordionUse from "../Components/AccordianUsage";


const FAQ = () => {
  return (
    <div>
      <div>
        <div className="w-[1000px] h-[100px]  bg-pink rounded-[50px] absolute top-[500px] mx-36  ">
          <div className="p-4">
            <h1 className="text-center text-white text-xl font-bold">
              Frequently Asked Question{" "}
            </h1>
            <p className="text-center text-gray-800 font-bold">
              Fostering a lifelong passion for reading in young minds through
              our comprehensive Foundation Program.
            </p>
          </div>
        </div>
        <img src={FaqImg} alt="faq" />
      </div>
        <div className="mt-24 mb-24 flex gap-[60px]" >
          <img 
          src={FaqImg2}    
          alt="img"
          className="h-[460px] w-[400px]"
          />
        <AccordionUse />
        </div>
    </div>
  );
};
export default FAQ;