import React from "react";
import Kitpng from "../assets/images/Level1Kit.png";
import PhoenicTab from "../Components/PhoenicTab";

const PhoenicKit = () => {   
 return (
    <div>
         <div>
       <div className="w-[1000px] h-[100px]  bg-pink rounded-[50px] absolute top-[500px] mx-36  ">
        <p className="py-4 px-12 w-11/12 text-[24px] font-jost text-white">
         Fostering a lifelong passion for reading in young minds through our comprehensive Foundation Program.
        </p>
      </div>
      <img
        src={Kitpng}
        alt="products-photo"
        className="w-screen h-[479px] object-cover object-center overflow-hidden"
      />
       </div>
       <div className="mt-24">
             <h1 className="text-center text-xl font-bold"><span className="text-pink">Discover Let's Read: </span>The Fun Way To Learn English Phonics</h1>
             <p className=" text-center">Engaging activities for children <span className="text-pink"> aged 3-4 </span>to master phonics effortlessly.</p>
       </div>
        <div className="mt-12">
           <PhoenicTab />
        </div>
    </div>
 )

}


export default PhoenicKit;