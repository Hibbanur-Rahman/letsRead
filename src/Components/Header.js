import React from 'react'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
        <nav className="bg-white-200 p-2  border border-black-100 ">
            <div className='flex justify-between items-center'>
            <h1 className='text-xl font-bold text-orange-600 mx-6'>Let's Read</h1>
            <nav className=' flex gap-6 items-center'>
                <NavLink to="/" className="text-lg font-bold">Home</NavLink>
                <NavLink to="/about" className="text-lg font-bold">About Us</NavLink>
                <NavLink to="/products" className="text-lg font-bold">products</NavLink>
                <NavLink to="/programs" className="text-lg font-bold">programs</NavLink>
                <NavLink to="/resources" className="text-lg font-bold">Resources</NavLink>
                <NavLink to="/faq" className="text-lg font-bold">FAQ</NavLink>
                <button className='bg-yellow-300 px-4 py-2 ml-12  mx-6 rounded-lg font-bold'>Explore Now</button>
            </nav>
            </div>
        </nav>
  )
}
export default Header;