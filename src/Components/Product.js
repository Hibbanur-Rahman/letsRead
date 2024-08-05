import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div>
      <div>
        <h1 className="text-center mt-12 text-3xl font-bold">Our Products</h1>
        <div className="h-[2px] w-1/12 bg-red-600 mx-auto"></div>
        <p className="mx-auto text-center text-xl font-bold mt-8 w-6/12">
          Explore our wide range of products designed to meet your needs. Find
          the perfect solution for you with just a few clicks.
        </p>
        <div className="flex justify-center align-center gap-[30px]">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </div>
      </div>
    </div>
  );
};

export default Product;
