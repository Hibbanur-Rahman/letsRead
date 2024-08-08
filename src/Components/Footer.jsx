import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import productSideDesign from "../assets/images/products-side-bottom-design.svg";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="Footer  flex flex-col relative mt-[250px] w-full ">
      {/* <Arc width={1980} height={500} color="#3E0085" /> */}
      <div
        className="arc absolute top-[-200px] left-[-200px] -z-[10] h-[500px] w-[130%] rounded-[100%] "
        style={{ background: "rgb(45,1,56)" }}
      ></div>
      <div
        className="w-full flex text-white px-8 gap-[50px] pb-24"
        style={{ background: "rgb(45,1,56)" }}
      >
        <div className="w-2/12">
          <img src={logo} alt="img" className="w-full h-[90px] p-0 m-0" />
          <p className="text-white mb-6  mt-6">
            Enroll Your Child in a Session now!
          </p>
          <p className="text-white mb-6 text-xl">
            Let&apos;s Read: Empowering young minds through literacy.
          </p>
          <div className=" flex gap-1">
            <div className="bg-black shadow-xl rounded-full p-3 m-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="bg-black shadow-xl rounded-full p-3 m-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="bg-black shadow-xl rounded-full p-3 m-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
            <div className="bg-black shadow-xl rounded-full p-3 m-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="bg-black shadow-xl rounded-full p-3 m-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
        <div className="w-2/12">
          <h1 className="text-3xl font-bold  ">Products</h1>
          <div className="w-[100px] h-[3px] rounded-lg mt-1 bg-yellow"></div>
          <ul className=" list-disc mt-16">
            <li className=" text-lg my-2">
              Let&apos;s Read Educator&apos;s Handbook
            </li>
            <li className=" text-lg my-2">Learner's Guide 1</li>
            <li className=" text-lg my-2">Learner's Book 2</li>
            <li className=" text-lg my-2">Learner's Guide 3</li>
          </ul>
        </div>
        <div className="w-3/12">
          <h1 className="text-3xl font-bold">Programs</h1>
          <div className="w-[100px] h-[3px] rounded-lg mt-1 bg-yellow"></div>

          <ul className=" list-disc mt-16">
            <li className="text-lg my-2">Level 0 Phoenic Kit </li>
            <li className="text-lg my-2">Level 1 Phoenic Kit </li>
            <li className="text-lg my-2 ">Level 2 Phoenic Mastery Kit </li>
            <li className="text-lg my-2">Level 2 Advance Phoenic Kit </li>
          </ul>
        </div>
        <div className="w-1/12">
          <h1 className="text-3xl font-bold">Company</h1>
          <div className="w-[100px] h-[3px] rounded-lg mt-1 bg-yellow"></div>

          <ul className="list-disc mt-16 ">
            <li className="text-lg my-2">About Us </li>
            <li className="text-lg my-2">Products </li>
            <li className="text-lg my-2 ">Programs </li>
            <li className="text-lg my-2">Resources </li>
            <li className="text-lg my-2">Contact Us </li>
            <li className="text-lg my-2">Blogs </li>
          </ul>
        </div>
        <div className="w-3/12">
          <h1 className="text-3xl font-bold">Get In Touch</h1>
          <div className="w-[150px] h-[3px] rounded-lg mt-1 bg-yellow"></div>

          <div className="mt-16 mb-4 flex gap-4 cursor-pointer">
            <FontAwesomeIcon icon={faPhone} className="text-2xl" />
            <p className="text-lg">Phone: +9056264820</p>
          </div>
          <div className="my-4 flex gap-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl cursor-pointer"
            />
            <a href="sa5194007@gmail.com" className="text-lg">sales@letsreadindia.in</a>
          </div>
          <div className="my-4 flex gap-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-2xl cursor-pointer"
            />
            <p className="w-full text-lg">
              Kondhwa Budhrukh, Pune, Maharashtra, India-411048
            </p>
          </div>
          <p className="my-4">
            Monday To Friday : 8:30AM - 02:PM Saturday, Sunday:Close{" "}
          </p>
        </div>
      </div>
      <div className="absolute left-[-70px] bottom-[0px] h-[200px] w-[200px] z-[1]">
        <img src={productSideDesign} alt="" className="w-full h-full" />
      </div>
      <div
        className="w-screen h-[50px] "
        style={{
          background:
            "linear-gradient(90deg, rgba(147,22,182,1) 0%, rgba(65,10,80,1) 100%)",
        }}
      >
        <p className="text-white px-6 pt-2">
          All Right Reserved @LetsReadIndia
        </p>
      </div>
    </div>
  );
};

export default Footer;
