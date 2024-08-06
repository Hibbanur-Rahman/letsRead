import React from "react";
import ProgImg from "../assets/images/Rectangle 250.png";

const ProgramCard = () => {
  return (
    <div className="w-3/12 flex items-center justify-center">
      <div className="rounded-2xl shadow bg-white flex items-center justify-center flex-col w-full pb-5">
        <div className="w-full py-2 bg-pink rounded-tl-xl rounded-tr-xl">
          <h1 className="text-center font-bold text-white">
            Level 0 Phoenic Kit
          </h1>
        </div>
        <img src={ProgImg} alt="image-prog" className="mt-1 w-full" />
        <p className="mx-2 mt-4">
          Introduce your child to the world of phonics with our Level 0 Phonics
          Kit. Packed with engaging activities, it's the perfect start to their
          reading journey.
        </p>
        <button className="mx-16 mt-6 px-3 bg-pink rounded-lg text-white py-2 ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
