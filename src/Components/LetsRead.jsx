import React from "react";
import letsReadContentBg from "../assets/images/letsRead-bg.png";

import letsReadIcon1 from "../assets/images/letsRead-icon-1.svg";
import letsReadIcon2 from "../assets/images/letsRead-icon-2.svg";
import letsReadIcon3 from "../assets/images/letsRead-icon-3.svg";
import letsReadIcon4 from "../assets/images/letsRead-icon-4.svg";
import letsReadIcon5 from "../assets/images/letsRead-icon-5.svg";

import yellowStar from "../assets/images/yellow-star.svg";
import purpleStar from "../assets/images/purple-star.svg";
const LetsRead = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-16 relative">
      <h1 className="text-center text-3xl font-semiBold text-black">
        The{" "}
        <span className="text-darkPurple underline font-bold">LETS READ</span>{" "}
        helps your child develope
      </h1>
      <div className="absolute top-[-20px] left-[-50px] h-[150px] w-[150px]">
        <img src={yellowStar} alt="star" className="h-full w-full" />
      </div>
      <div
        className="flex flex-col items-center justify-center w-full  bg-cover "
        // style={{ backgroundImage: `url(${letsReadContentBg})` }}
      >
        <img src={letsReadContentBg} alt="" className="w-full" />
        <div className="flex w-full items-center justify-center absolute">
          <div className="w-2/12 flex flex-col items-center justify-center">
            <img src={letsReadIcon1} alt="" className="" />
            <p className="text-xl font-bold mt-3">Linguistic Skills</p>
          </div>
          <div className="w-2/12 flex flex-col items-center justify-center">
            <img src={letsReadIcon2} alt="" className="" />
            <p className="text-xl font-bold mt-3">Linguistic Skills</p>
          </div>
          <div className="w-2/12 flex flex-col items-center justify-center">
            <img src={letsReadIcon3} alt="" className="" />
            <p className="text-xl font-bold mt-3">Linguistic Skills</p>
          </div>
          <div className="w-2/12 flex flex-col items-center justify-center">
            <img src={letsReadIcon4} alt="" className="" />
            <p className="text-xl font-bold mt-3">Linguistic Skills</p>
          </div>
          <div className="w-2/12 flex flex-col items-center justify-center">
            <img src={letsReadIcon5} alt="" className="" />
            <p className="text-xl font-bold mt-3">Linguistic Skills</p>
          </div>
        </div>
        <div className="absolute bottom-[-70px] right-[-70px] h-[150px] w-[150px]">
          <img src={purpleStar} alt="star" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default LetsRead;
