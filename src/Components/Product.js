import React from "react";
import ProductCard from "./ProductCard";
import headerDesign from "../assets/images/program-header-design.svg";
import productImg1 from "../assets/images/product-img-1.png";
import productImg2 from "../assets/images/product-img-2.png";
import productImg3 from "../assets/images/product-img-3.png";
import productImg4 from "../assets/images/product-img-4.png";

import productCardIcon1 from '../assets/images/product-card-icon-1.svg'
import productCardIcon2 from '../assets/images/product-card-icon-2.svg'
import productCardIcon3 from '../assets/images/product-card-icon-3.svg'
import productCardIcon4 from '../assets/images/product-card-icon-4.svg'

const Product = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1 className="text-center text-4xl md:text-5xl font-bold leading-none m-0 p-0">
        Our Products
      </h1>
      <div className="flex justify-center items-center relative w-full m-0 p-0">
        <img
          src={headerDesign}
          className="relative h-[50px] w-[50px]"
          alt="header design"
        />
        <div className="relative top-[-10px]  h-[3px] w-[300px] bg-pink"></div>
      </div>
      <div className="h-[2px] w-1/12 bg-red-600 mx-auto"></div>
      <p className="mx-auto text-center text-xl font-regular  mt-8 w-6/12">
        Explore our wide range of products designed to meet your needs. Find the
        perfect solution for you with just a few clicks.
      </p>
      <div className="flex justify-center align-center gap-[15px] w-10/12 mt-10">
        <ProductCard
          image={productImg1}
          heading="Let's Read Educator's Handbook"
          desc="Our Let's Read Educator's Handbook is your ultimate guide to teaching phonics skills effectively. Thank you for choosing Let's Read!"
          icon={productCardIcon1}
       />
        <ProductCard
          image={productImg2}
          heading="Learner’s Guide 1"
          desc="Our Let's Read Learner's Guide 1 is your ultimate guide to teaching phonics skills effectively. Thank you for choosing Let's Read!"
          icon={productCardIcon2}

        />
        <ProductCard
          image={productImg3}
          heading="Learner’s Book 2: A Vibrant Journey into Phonics Sounds for Young Minds"
          desc="Learner’s book 2 provides invaluable guidance in teaching phonics skills to young learners."
          icon={productCardIcon3}

        />
        <ProductCard
          image={productImg4}
          heading="Learner's Guide 3"
          desc="Discover Phonics Mastery with Learner's Guide Book 3"
          icon={productCardIcon4}

        />
      </div>
    </div>
  );
};

export default Product;
