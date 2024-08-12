import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import LetsReadImg from "../assets/images/image 2.png";

const Header = () => {
  const location = useLocation();
  return (
    <nav className="bg-white p-2  flex justify-center items-center w-full">
      <div className="flex justify-between items-center w-full px-6">
        <img src={LetsReadImg} alt="img" className="w-[200px] h[40px]" />
        <nav className=" flex gap-6 items-center">
          <NavLink to="/" className={`text-lg font-bold ${location.pathname==='/'?'text-pink underline':''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={`text-lg font-bold ${location.pathname==='/about'?'text-pink underline':''}`}>
            About Us
          </NavLink>
          <NavLink to="/products" className={`text-lg font-bold ${location.pathname==='/products'?'text-pink underline':''}`}>
            Products
          </NavLink>
          <NavLink to="/programs" className={`text-lg font-bold ${location.pathname==='/programs'?'text-pink underline':''}`}>
            Programs
          </NavLink>
          <NavLink to="/resources" className={`text-lg font-bold ${location.pathname==='/resources'?'text-pink underline':''}`}>
            Resources
          </NavLink>
          <NavLink to="/faq" className={`text-lg font-bold ${location.pathname==='/faq'?'text-pink underline':''}`}>
            FAQ
          </NavLink>
          <button
            className=" px-4 py-2 ml-12  mx-6 rounded-lg font-bold"
            style={{
              background:
                "linear-gradient(60deg, rgba(255,226,89,1) 0%, rgba(255,167,81,1) 100%)",
            }}
          >
            Enquire Now
          </button>
        </nav>
      </div>
    </nav>
  );
};
export default Header;
