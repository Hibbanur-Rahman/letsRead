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

import testimonialHeaderDesign from "../assets/images/testimonial-header-design.svg";
import testimonialBg from "../assets/images/testimonial-bg.svg";
import quote from "../assets/images/quote-img.svg";
import profileImg1 from "../assets/images/profile-img-1.jpg";
import profileImg2 from "../assets/images/profile-img-2.jpg";

import yellowStar from "../assets/images/yellow-star.svg";
// import purpleStar from "../assets/images/purple-star.svg";
import redStar from "../assets/images/red-star.svg";

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
      <div className="w-full flex flex-col items-center justify-center mt-16">
        <p className="text-3xl text-center font-semibold mb-10">
          Why do school owners, teachers,
          <br /> parents, and children love Kreedo?
        </p>
        <div className="w-full bg-[#FFFDD9] flex flex-col items-center justify-center mt-16">
          <div className="w-10/12 flex gap-[15px]   justify-between my-16">
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
                &gt;&gt; Strengthens the school&apos;s brand
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
                &gt;&gt; Improves children&apos;s literacy and numeracy skills
              </p>
              <p className="text-[#455A64] w-full">
                &gt;&gt; Reduces the need for extra tuition or interventions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/**========= Testimonial =============== */}
      <div
        className="w-full flex flex-col items-center justify-center pt-16 bg-[#FFF5F5] bg-cover relative"
        style={{ backgroundImage: `url(${testimonialBg})` }}
      >
        <div className="absolute top-[-50px] left-[-50px] h-[150px] w-[150px]">
          <img src={yellowStar} alt="star" className="h-full w-full" />
        </div>
        <h1 className="text-center text-4xl md:text-5xl font-bold leading-none m-0 p-0">
          TESTIMONIALS
        </h1>
        <div className="flex justify-center items-center relative w-full m-0 p-0">
          <div className="relative top-[-10px] right-[-48px] h-[3px] w-[390px] bg-pink"></div>
          <img
            src={testimonialHeaderDesign}
            className="relative h-[50px] w-[90px] top-[-13px] right-[-40px]"
            alt="header design"
          />
        </div>
        <p className="text-xl text-center font-semibold">
          See what people say about our company
        </p>

        <div className="w-9/12 flex gap-[20px]  justify-center mt-20 mb-20">
          <div className="w-4/12 bg-darkPurple h-auto relative rounded-2xl justify-between p-10 flex flex-col items-center ">
            <img
              src={quote}
              alt=""
              className="absolute top-[-30px] h-[60px] w-[60px] left-[25px]"
            />
            <div className="flex flex-col items-center">
              <div className="profile rounded-full m-0 p-0 w-[90px] h-[90px] overflow-hidden">
                <img src={profileImg1} alt="" className="w-full h-full" />
              </div>
              <p className="text-white mt-8">
                Let&apos;s read really helped my students build clarity of
                sounds and gaining confidence in blending and segment. The
                hands-on activities got my students curious for learning
              </p>
            </div>
            <div className="mt-8">
              <p className="text-white font-bold text-xl text-center">
                Harshita Doe
              </p>
              <p className="text-white text-xl font-semibold text-center">
                Teachforindia <span className="text-yellow">Fellow</span>
              </p>
            </div>
          </div>
          <div className="w-4/12 bg-darkPurple h-auto relative rounded-2xl justify-between p-10 flex flex-col items-center ">
            <img
              src={quote}
              alt=""
              className="absolute top-[-30px] h-[60px] w-[60px] left-[25px]"
            />
            <div className="flex flex-col items-center">
              <div className="profile rounded-full m-0 p-0 w-[90px] h-[90px] overflow-hidden">
                <img src={profileImg2} alt="" className="w-full h-full" />
              </div>
              <p className="text-white mt-8">
                The &apos;Let&apos;s Read&apos; materials have been an
                invaluable asset in my classroom. Their impact has been
                especially profound for students facing learning challenges. The
                interactive and engaging nature of the activities has been a
                source of joy for all students, fostering a fun-filled approach
                to reading and comprehension.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-white font-bold text-xl text-center">
                Muhammed Hasil
              </p>
              <p className="text-white text-xl font-semibold text-center">
                Teach For <span className="text-yellow">India</span>
              </p>
            </div>
          </div>
          <div className="w-4/12 bg-darkPurple h-auto relative rounded-2xl justify-between p-10 flex flex-col items-center ">
            <img
              src={quote}
              alt=""
              className="absolute top-[-30px] h-[60px] w-[60px] left-[25px]"
            />
            <div className="flex flex-col items-center">
              <div className="profile rounded-full m-0 p-0 w-[90px] h-[90px] overflow-hidden">
                <img src={profileImg1} alt="" className="w-full h-full" />
              </div>
              <p className="text-white mt-8">
                Thanks to Let&apos;s Read, learning English as a language has
                become engaging, joyful, and highly effective for the students.
                I wholeheartedly recommend the Let&apos;s Read program to any
                educator seeking to revolutionize literacy instruction and make
                a lasting impact in their classrooms.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-white font-bold text-xl text-center">
                Harshita Doe
              </p>
              <p className="text-white text-xl font-semibold text-center">
                RAABTA{" "}
                <span className="text-yellow">
                  School Transformation Program
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-70px] right-[-70px] h-[150px] w-[150px]">
          <img src={redStar} alt="star" className="h-full w-full" />
        </div>
      </div>

      {/**========= Frequently Asked question =============== */}
      <div className="w-full flex flex-col items-center justify-center mt-16">
        <h1 className="text-center text-4xl md:text-5xl font-bold leading-none m-0 p-0">
          Frequently Asked Questions
        </h1>
        <div className="flex justify-center items-center relative w-full m-0 p-0">
          <div className="relative top-[-10px] right-[-48px] h-[3px] w-[490px] bg-pink"></div>
          <img
            src={testimonialHeaderDesign}
            className="relative h-[50px] w-[90px] top-[-13px] right-[-40px]"
            alt="header design"
          />
        </div>

        <p className="">Get Answers to Your Common Queries. How does Le</p>
      </div>
    </div>
  );
};
export default Home;
