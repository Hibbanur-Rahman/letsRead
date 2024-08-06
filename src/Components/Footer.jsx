import React from 'react'
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faInstagram, faFacebook, faXTwitter, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import{faPhone, faEnvelope, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import LetsReadImg from "../assets/images/image 2.png";

const Footer = () => {
  return (
      <div>
        <div className='w-screen  h-[450px] bg-lightPurple flex  text-white rounded-t-md'>
           <div>
           <img 
              src={LetsReadImg}
              alt='img'
              className='w-[200px] h[40px] pt-10 px-6'
             />
             <p className='px-6 pt-6'>Enroll Your Child in a Session Now.</p>
             <p className='px-6 pt-6 w-8/12'>Let's Read: Empowering young minds through literacy.</p>
             <div className='px-6 pt-6 flex gap-5'> 
             <FontAwesomeIcon icon={faFacebook} />
             <FontAwesomeIcon icon={faInstagram} />
             <FontAwesomeIcon icon={faXTwitter} />
             <FontAwesomeIcon icon={faLinkedin} />
             <FontAwesomeIcon  icon={faYoutube}/>
             </div>
           </div>
           <div>
            <h1 className='text-xl font-bold mx-6 pt-10 '>Products</h1>
            <ul  className='px-6 pt-6 cursor-pointer'>
              <li className='pt-6 w-10/12'>Let's Read Educator’s Handbook</li>
              <li className='pt-6'>Learner's Guide 1</li>
              <li className='pt-6'>Learner's Book 2</li>
              <li className='pt-6'>Learner's Guide 3</li>
            </ul>
           </div>
           <div>
           <h1 className='text-xl font-bold  mx-6 pt-10'>Programs</h1>
           <ul className="px-6 pt-6 cursor-pointer ">
            <li className='pt-6'>Level 0 Phoenic Kit </li>
            <li className='pt-6'>Level 1 Phoenic Kit </li>
            <li className='pt-6 '>Level 2 Phoenic Mastery Kit </li>
            <li className='pt-6'>Level 2 Advance Phoenic Kit </li>
           </ul>
           </div>
           <div>
             <h1 className='text-xl font-bold  mx-6 pt-10'>Company</h1>
             <ul className="px-6 pt-6 cursor-pointer ">
            <li className='pt-6'>About Us </li>
            <li className='pt-6'>Products </li>
            <li className='pt-6 '>Programs </li>
            <li className='pt-6'>Resources </li>
            <li className='pt-6'>Contact Us </li>
            <li className='pt-6'>Blogs </li>
           </ul>
           </div>
           <div>
            <h1 className='text-xl font-bold  mx-6 pt-10'>Get In Touch</h1>
             <div className='px-6 pt-12 flex gap-4 cursor-pointer' >
             <FontAwesomeIcon icon={faPhone} className='text-2xl'  />
             <p>Phone: +9056264820</p>
             </div>
             <div className='px-6 pt-12 flex gap-4' >
             <FontAwesomeIcon icon={faEnvelope} className='text-2xl cursor-pointer'  />
             <a href="sa5194007@gmail.com">sales@letsreadindia.in</a>
             </div>
             <div className='px-6 pt-12 flex gap-4' >
             <FontAwesomeIcon icon={faLocationDot} className='text-2xl cursor-pointer'  />
             <p className='w-5/12'>Kondhwa Budhrukh, Pune, Maharashtra, India-411048</p>
             </div>
             <p className='px-12 pt-6'>Monday To Friday : 8:30AM - 02:PM Saturday, Sunday:Close </p>
           </div>
           
         </div>
         <div className='w-screen h-[50px] bg-purple-900 '>
            <p className="text-white px-6 pt-2">
                All Right Reserved @LetsReadIndia
            </p>
         </div>
      </div>
  )
}

export default Footer