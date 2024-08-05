import React from "react";
import Frame from "../assets/images/ProgFrame.png";
import ProgramCard from "./ProgramCard";

const Programs = () =>{
    return(
        <div>
            <div className="relative">
                <h1 className="text-center mt-12 text-3xl font-bold">Our Programs</h1>
                <div className='h-[2px] w-1/2/12 bg-pink mx-[590px]'></div>
                <p className="mt-12 text-center font-bold text-4xl ">Your Ally for Early Academic Success</p>
                <img src={Frame} 
                className="mt-12  w-screen h-[650px] "
                alt="frame"
                />
                <div className="flex gap-[30px] absolute top-[200px] mx-28 " >
                   <ProgramCard/> 
                   <ProgramCard/> 
                   <ProgramCard/> 
                   <ProgramCard/> 
                </div>
                <button className="bg-darkPurple px-6 py-1 text-lg  text-white font-bold rounded-lg absolute top-[730px] left-[550px]">Explore Our Program</button>
            </div>
        </div>
    )
}
export default Programs;