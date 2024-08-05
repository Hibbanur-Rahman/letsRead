import React from 'react'
import {NavLink} from "react-router-dom";
import LetsReadImg from "../assets/images/image 2.png";

const Header = () => {
  return (
        <nav className="bg-white p-2  ">
            <div className='flex justify-between items-center'>
             <img 
              src={LetsReadImg}
              alt='img'
              className='w-[150px] h[40px]'
             />
            <nav className=' flex gap-6 items-center'>
                <NavLink to="/" className="text-lg text-pink underline font-bold">Home</NavLink>
                <NavLink to="/about" className="text-lg font-bold">About Us</NavLink>
                <NavLink to="/products" className="text-lg font-bold">products</NavLink>
                <NavLink to="/programs" className="text-lg font-bold">programs</NavLink>
                <NavLink to="/resources" className="text-lg font-bold">Resources</NavLink>
                <NavLink to="/faq" className="text-lg font-bold">FAQ</NavLink>
                <button className='bg-yellow px-4 py-2 ml-12  mx-6 rounded-lg font-bold'>Explore Now</button>
            </nav>
            </div> 
        </nav>
  )
}
export default Header;