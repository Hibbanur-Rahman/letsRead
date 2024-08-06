import childPhoto from "../assets/images/about-img.png";
import childPhoto2 from "../assets/images/Frame 121.png";
import childPhoto3 from "../assets/images/Frame 126.png";


const About = () => {
  return (
    <div>
      <div>
        <div className="w-[1000px] h-[100px]  bg-pink rounded-[50px] absolute top-[500px] mx-36 flex items-center justify-between ">
          <p className="py-4 px-12 w-9/12 text-[18px] font-jost text-white">
            In this digital age when children are inclined towards screens, our
            program gives the option of socializing and learning to read through
            play.
          </p>
          <button 
           className="bg-yellow px-4 py-2 mr-10 rounded-lg font-bold">
            About Us
          </button>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/9fcf/3f3c/c03dd9f27b440a3875a1d985ec8af184?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZRDcV7YbqIHyyf-BWyxGV9S3hC5XmXCkenBk~dHSHv-KZoIq4XsBtaVmgxe0xDjBC5ivoaWMojJdDViFWtyf4xt0pvZycWYpgm5RYuBC1x8zm7INB7hScrgApJd6tgsvXgLEW8kbVgQ4RCMArQIgfVf1t80hYujGUCuyDEUrKuJXfFGubBYnRJ6nfg~MHH9osfmuY~Ib7s0fEXo8kIOQZTOQSnGX9eerjBVV-AbKhVV6rw-3nluJK5C55mTEv6brIfhrTQ-qzRlcHLyNH0wMbSYKu9P-mp52tmymCht4bDPB11uT6buopn27qe-ZVISCQ4iA~XyeAmDWXnPNpAM0A__"
          alt="aboutimg"
          className="w-screen h-[479px] object-cover object-center overflow-hidden"
        />
      </div>

      <div className="flex mt-12">
        <img
          src={childPhoto}
          alt="logo"
          className="w-6/12 h-[500px] pt-12 px-16 object-cover object-top overflow-hidden rounded-lg mb-4 "
        />
        <div className="pt-12 w-6/12 ">
          <h3 className="text-xl font-bold w-6/12 ">
            In this digital area when children are inclined towards screens, our
            programs give the option of socializing and learning to read through
            play.
          </h3>
          <p className="pt-4 w-8/12">
            lets read takes young learner on an exciting journey from beginner
            to proficient reader through engaging games and playful
            activities.our books and system are designed to boost confidence and
            self esteem.fostering a love for reading from an early age. The
            handsome nature of our prgram encourage physical environment,
            communiction and collabration providing a unique learning experience
            that goes beyond screen.{" "}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-3xl font-bold text-center">
          Empowering Early Literacy
        </h1>
        <p className="mt-6 pl-20 text-lg">
          Let's Read takes young learners on an exciting journey from beginner
          to proficient readers through engaging games and playful activities.
          Our books and games are designed to boost confidence and self-esteem,
          fostering a love for reading from an early age. The hands-on nature of
          our program encourages physical movement, communication, and
          collaboration, providing a unique learning experience that goes beyond
          screens.
        </p>
      </div>
      <div className="flex mt-12 justify-between">
        <div className="pt-12 w-6/12 ">
          <h1 className="text-3xl font-bold pl-20  ">Why Let's Read</h1>
          <p className="pl-20 pt-12">
            While many schools in India rely on foreign-designed reading
            programs, Let's Read stands out as a well-researched, culturally
            relevant program tailored specifically for the Indian context. With
            relatable words and pictures, we facilitate a smooth transition from
            the mother tongue to English, ensuring meaningful learning
            experiences for all children.
          </p>
          <p className="pl-20 pt-12">
            From low-income schools to affluent communities, Let's Read has
            consistently delivered positive results. Our structured approach has
            proven effective in teaching English to non-native speakers, making
            literacy accessible to all.
          </p>
          <p className="pl-20 pt-12">
            Through fun activities, we address the challenges of the digital
            age, empowering educators, parents, and caregivers to support early
            literacy development. Our hands-on approach offers a balanced
            alternative to digital learning, nurturing holistic growth in
            children.
          </p>
        </div>
        <img
          src={childPhoto2}
          alt="logo"
          className="w-5/12 h-[500px] pt-12 px-16 object-cover object-top overflow-hidden rounded-lg mb-4 "
        />
      </div>

      <div className="mt-16">
        <h1 className="text-3xl font-bold pl-20">Salient Features</h1>
        <div className="w-[230px] h-[2px] bg-black ml-20"></div>
         <ul className="pr-6">
          <li className="pl-20 pt-2 ">
          Holistic Approach: Seamlessly integrates play-based reading,
          interactive experiences, and captivating learning materials to
          accommodate diverse learning preferences.
          </li>
          <li className="pl-20 pt-1">
          Play Phonics: Develops
          expertise in letter-sound relationships, decoding, and word
          construction through an engaging kinesthetic phonics curriculum.
          </li>
          <li className="pl-20 pt-1 ">
          Cognitive Stimulation: Activities and games foster higher-order
          thinking skills, ensuring steady progress in reading proficiency.
          </li>
          <li className="pl-20 pt-1 ">
          Preschool Literacy Audit: Assists schools in implementing effective
          literacy strategies to boost literacy rates.
          </li>
          <li className="pl-20 pt-1 ">
          Reading Age Tool: Tracks
          each child's reading age, enabling schools to monitor and improve
          literacy standards over time.
          </li>
          <li className="pl-20 pt-1 ">
          Parental Engagement: Equips parents with
          resources and guidance to actively participate in their child’s
          literacy journey. Educator’s Companion: Provides pre-primary teachers
          with comprehensive support for classroom differentiation and targeted
          intervention.
          </li>
         </ul>
      </div>
        <div className="flex justify-between mt-2">
           <img 
            src={childPhoto3}
           alt="logo"
           className=""
           />
           <div>
            <h1 className="text-3xl text-end font-bold pr-32">
              Equity in Education
            </h1>
            {/* <div className="w-[230px] h-[2px] bg-black "></div> */}

            <p className="w-10/12 text-end pt-8"> 
            LET’S READ promotes equity in education by serving both low-income and affluent schools, with activities tailored to meet the diverse needs of all children. Our kinesthetic activities support the literacy learning of neurodivergent children, fostering self-correction and emotional development.
            </p>
            <h1  className="text-3xl text-end font-bold pr-32 pt-8">
              Learning Through Fun and Friendship
            </h1>
            <p className="w-10/12 text-end pt-8">
            Research shows that children are naturally drawn to reading when books reflect their lives and culture. Let's Read celebrates the joy of reading by offering stories and characters that resonate with young readers, fostering a lifelong love for learning and friendship.
            </p>
           </div>
        </div>
    </div>
  );
};
export default About;