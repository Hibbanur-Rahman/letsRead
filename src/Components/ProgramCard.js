import React from "react";
import ProgImg from "../assets/images/Rectangle 250.png";

const ProgramCard = () => {
  return (
    <div>
      <div className="w-[250px] h-[450px]  rounded-2xl shadow">
        <div className="w-[250px] h-[30px] bg-pink rounded-tl-xl rounded-tr-xl">
          <h1 className="text-center font-bold">Level 0 Phoenic Kit</h1>
        </div>
        <img 
        src={ProgImg}
        alt="image-prog"
        className="mt-1 "
         />
        <p className="mx-2 mt-4">
          Introduce your child to the world of phonics with our Level 0 Phonics
          Kit. Packed with engaging activities, it's the perfect start to their
          reading journey.
        </p>
        <button className="mx-16 mt-6 px-2 bg-pink rounded-lg">Read More</button>
      </div>
    </div>
  );
};

export default ProgramCard;
