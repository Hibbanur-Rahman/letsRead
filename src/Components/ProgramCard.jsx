import React from "react";

const ProgramCard = ({ image, levelHead, desc }) => {
  return (
    <div className="w-3/12 flex items-center justify-center">
      <div className="rounded-2xl shadow bg-white flex flex-col justify-between items-center w-full h-[500px] pb-5">
        <div className="w-full py-2 bg-pink rounded-tl-xl rounded-tr-xl">
          <h1 className="text-center font-bold text-white">{levelHead}</h1>
        </div>
        <img src={image} alt="image-prog" className="mt-1 w-full h-[250px]" />
        <p className="mx-2 mt-4 flex-grow">{desc}</p>
        <button className="mx-16 mt-6 px-3 bg-pink rounded-lg text-white py-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
