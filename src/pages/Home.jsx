import React from "react";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Programs from "../Components/Programs";
import Product from "../Components/Product";
import LetsRead from "../Components/LetsRead";
import Achievement from "../Components/Achievement";

import whyDoCardImg1 from "../assets/images/why-do-card-img-1.svg";
import whyDoCardImg2 from "../assets/images/why-do-card-img-2.svg";
import whyDoCardImg3 from "../assets/images/why-do-card-img-3.svg";
import whyDoCardImg4 from "../assets/images/why-do-card-img-4.svg";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center m-0 p-0">
      <HeroSection />
      <Programs />
      <About />
      <Product />
      <Achievement />
      <LetsRead />

      {/**========= Why do =============== */}
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-3xl text-center font-semibold">
          Why do school owners, teachers,
          <br /> parents, and children love Kreedo?
        </p>
        <div className="w-full bg-[#FFFDD9] flex flex-col items-center justify-center mt-16">
          <div className="w-10/12 flex gap-[15px]   justify-between my-8">
            <div className="w-3/12 bg-white flex flex-col items-center p-5 rounded-sm shadow-lg">
              <h5 className="font-bold text-2xl">For the Child:</h5>
              <img src={whyDoCardImg1} alt="" className="h-[180px] mt-3 mb-3" />
              <p className="text-[#455A64] w-full">
                &gt;&gt; Becomes a fearless, collaborative, and engaged learner
              </p>
              <p className="text-[#455A64] w-full">
                &gt;&gt; Gains independent and confidence
              </p>
            </div>
            <div className="w-3/12 bg-white flex flex-col items-center p-5 rounded-sm shadow-lg">
              <h5 className="font-bold text-2xl">For School Owners:</h5>
              <img src={whyDoCardImg2} alt="" className="h-[180px] mt-3 mb-3" />
              <p className="text-[#455A64] w-full">
                &gt;&gt; Boosts admissions
              </p>
              <p className="text-[#455A64] w-full">
                &gt;&gt; Enhances learning outcomes
              </p>
              <p className="text-[#455A64] w-full">
                &gt;&gt; Strengthens the school's brand
              </p>
            </div>
            <div className="w-3/12 bg-white flex flex-col items-center p-5 rounded-sm shadow-lg">
              <h5 className="font-bold text-2xl">For Teachers:</h5>
              <img src={whyDoCardImg3} alt="" className="h-[180px] mt-3 mb-3" />
              <p className="text-[#455A64] w-full">
                &gt;&gt; Reduces workload with play-based learning
              </p>
              <p className="text-[#455A64] w-full">
                &gt;&gt; Offers comprehensive training
              </p>
              <p className="text-[#455A64] w-full">
                &gt;&gt; Provides ongoing mentoring and support
              </p>
            </div>
            <div className="w-3/12 bg-white flex flex-col items-center p-5 rounded-sm shadow-lg">
              <h5 className="font-bold text-2xl">For Parents:</h5>
              <img src={whyDoCardImg4} alt="" className="h-[180px] mt-3 mb-3" />
              <p className="text-[#455A64] w-full">
                &gt;&gt; Improves children's literacy and numeracy skills
              </p>
              <p className="text-[#455A64] w-full">
                &gt;&gt; Reduces the need for extra tuition or interventions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
