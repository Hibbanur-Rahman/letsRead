import React from "react";
import Frame from "../assets/images/ProgFrame.png";
import ProgramCard from "./ProgramCard";
import headerDesign from "../assets/images/program-header-design.svg";
import star from "../assets/images/star.svg";

const Programs = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold leading-none m-0 p-0">
          Our Programs
        </h1>
        <div className="flex justify-center items-center relative w-full m-0 p-0">
          <div className="relative top-[-10px] right-[-10px] h-[3px] w-[300px] bg-pink"></div>
          <img
            src={headerDesign}
            className="relative h-[50px] w-[50px]"
            alt="header design"
          />
        </div>
        <p className="mt-12 text-center font-semibold text-2xl md:text-4xl">
          Your Ally for Early Academic Success
        </p>
        <div
          className="flex justify-center items-center w-full pt-8 mt-8 bg-cover"
          style={{ backgroundImage: `url(${Frame})` }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="flex gap-8 md:gap-12 lg:gap-[30px] mx-6 md:mx-12 lg:mx-28">
              <ProgramCard />
              <ProgramCard />
              <ProgramCard />
              <ProgramCard />
            </div>
            <div className="box-design h-[170px] w-[170px] bg-[rgba(255,234,127,255)] rounded-3xl rotate-45 right-[-50%] top-[-100px] relative -z-10"></div>
            <button className="relative top-[-100px] bg-darkPurple text-white font-bold text-lg px-6 py-1 rounded-lg">
              Explore Our Program
            </button>
          </div>
        </div>
        <div className="relative top-[-70px] left-[-70px] h-[150px] w-[150px]">
          <img src={star} alt="star" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Programs;
