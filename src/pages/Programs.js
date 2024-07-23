import React from 'react'
import programs from "../assets/images/Frame 128.png";
import PhoenicCard from '../Components/PhoenicCard';
import rectangle from "../assets/images/Rectangle 243.png";


const Programs = () => {
  return (
    <div> 
       <div>
       <div className="w-[1000px] h-[100px]  bg-red-600 rounded-[50px] absolute top-[500px] mx-36  ">
        <p className="py-4 px-12 w-11/12 text-[24px] font-jost text-white">
         Fostering a lifelong passion for reading in young minds through our comprehensive Foundation Program.
        </p>
      </div>
      <img
        src={programs}
        alt="products-photo"
        className="w-screen h-[479px] object-cover object-center overflow-hidden"
      />
       </div>
        <div>
        <img 
          src={rectangle}
          alt='retangle'
          className='mb-24'
         />
         <div className='flex justify-center flex-wrap gap-y-8 gap-x-8 mx-4 absolute top-[700px]'>
          <PhoenicCard />
          <PhoenicCard />
          <PhoenicCard />
          <PhoenicCard />
         </div>
        
        </div>

    </div>
  )
}

export default Programs