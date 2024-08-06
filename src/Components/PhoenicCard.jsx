import React from 'react'
import { NavLink } from 'react-router-dom';
import Rectangle18 from "../assets/images/Rectangle 18.png";

const PhoenicCard = () => {
  return (
    <div>
        <div className='w-[400px] h-[300px] bg-pink rounded-3xl overflow-hidden '>
           <img 
            src={Rectangle18}
             alt=''
           />
                <NavLink to="/PhoenicKit" className="text-white flex mt-4 justify-center  hover:underline " >Level 0 Phonics Kit</NavLink>
        </div>
    </div>
  )
}
export default PhoenicCard;
