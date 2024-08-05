import React from "react";
import Frame from "../assets/images/ProgFrame.png";
import ProgramCard from "./ProgramCard";
import headerDesign from '../assets/images/program-header-design.svg';

const Programs = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-auto">
        <h1 className="text-center mt-12 text-[3.2rem] leading-none font-bold m-0 p-0">Our Programs</h1>
        <div className="header-design w-full flex  justify-center flex-row m-0 p-0 relative">
          <div className="h-[3px] w-[300px] bg-pink  relative right-[-10px] top-[10px] "></div>
          <img src={headerDesign} className="h-[50px] w-[50px]  relative "/>
        </div>
        <p className="mt-12 text-center font-semibold text-4xl ">
          Your Ally for Early Academic Success
        </p>
        <div className="w-full flex items-center justify-center">
          <img src={Frame} className="mt-12  w-screen h-[650px] " alt="frame" />
          <div className="absolute z-10 flex items-center justify-center flex-col ">
            <div className="flex gap-[30px] mx-28 ">
              <ProgramCard />
              <ProgramCard />
              <ProgramCard />
              <ProgramCard />
            </div>
            <button className="bg-darkPurple px-6 py-1 text-lg  text-white font-bold rounded-lg mt-10">
              Explore Our Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Programs;
