import React from 'react'
import Frame65 from "../assets/images/Frame 65.png";
import Vector from "../assets/images/Vector.png";

const ProductCard = () => {
  return (
    <div>
        <div className='w-[250px] h-[520px]  mt-12 mb-12 rounded-xl overflow-hidden border-[2px] border-black'>
                  <img
                   src={Frame65}
                   alt='frame'
                   className='object-cover object-bottom'
                   />
                   <div className='w-[250]px h-[350px] bg-purple-800 rounded-t-3xl relative top-[-20px] '>
                    <img
                     src={Vector}
                     alt='vector'
                     className='w-[40px] h-[40px] mx-auto pt-4 object-center  '
                     />
                     <h1 className='mt-4 mx-2 text-white text-xl'>Let's Read Educator's Handbook</h1>
                     <p className='mt-4 mx-2 text-white w-10/12'>Our Let's Read Educator's Handbook is your ultimate guide to teaching phonics skills effectively. Thank you for choosing Let's Read!</p>
                     <button className="bg-yellow-300 px-8 py-2 mr-10 rounded-lg font-bold mt-3 ml-12">
                         Shop Now
                        </button>
                   </div>
                </div>
    </div>
  )
}

export default ProductCard