import React from 'react'

import Rectangle18 from "../assets/images/Rectangle 18.png";

const PhoenicCard = () => {
  return (
    <div>
        <div className='w-[400px] h-[300px] bg-pink-700 rounded-3xl overflow-hidden '>
           <img 
            src={Rectangle18}
             alt='image'
           />
           <p className='text-white text-center pt-4'>Level 0 Phonics Kit</p>
        </div>
    </div>
  )
}
export default PhoenicCard