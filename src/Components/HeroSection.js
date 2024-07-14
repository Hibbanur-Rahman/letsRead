import React from "react";

const HeroSection = () => {
  return (
    <div className="flex ">
      <div className="bg-purple-900 w-7/12 h-[60vh] mx-16 my-8">
        <h1 className="pt-20 px-12 text-4xl text-white font-bold w-7/12">We Prepare To Ignite The Joy of <span className="text-yellow-300">Reading</span> </h1>
        <p className=" pt-6 px-12 text-lg text-white w-9/12">
          Our vision is to be the source for childhood learning on the internet
          available from anywhere and without charge.
        </p>
        <button className='bg-yellow-300 px-4 py-2 ml-12  mx-6 rounded-lg font-bold mt-6'>Enquire Now</button>
      </div>
            <img
              src="https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg" 
              alt="logo"
              className=" w-4/12 h-[70vh] rounded-full absolute object-cover object-center overflow-hidden right-16 pt-6"
              />
    </div>
  );
};
export default HeroSection;