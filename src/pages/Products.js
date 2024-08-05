import React from "react";
import products from "../assets/images/products.png";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div className="w-[1000px] h-[100px]  bg-pink rounded-[50px] absolute top-[500px] mx-36 ">
        <p className="py-4 px-12 w-11/12 text-[24px] font-jost text-white">
          Explore our wide range of products designed to meet your needs. Find
          the perfect solution for you with just a few clicks.
        </p>
      </div>
      <img
        src={products}
        alt="products-photo"
        className="w-screen h-[479px] object-cover object-center overflow-hidden"
      />
      <div className="mt-24 mx-12">
        <div className="flex gap-4 font-bold">
          <Link to="#" className="text-pink underline">
            All
          </Link>
          <Link to="#">Books</Link>
        </div>
         <div className="flex justify-between">
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         </div>
      </div>
    </div>
  );
};

export default Products;
