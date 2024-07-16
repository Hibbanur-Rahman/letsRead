const About = () => {
  return (
    <div>
       <div>
        <div className="w-[1000px] h-[100px]  bg-red-600 rounded-[50px] absolute top-[500px] mx-36 flex items-center justify-between ">
          <p className="py-4 px-12 w-9/12 text-[18px] font-jost">
          In this digital age when children are inclined towards screens, our program gives the option of socializing and learning to read through play.
          </p>
          <button className='bg-yellow-300 px-4 py-2 mr-10 rounded-lg font-bold'>About Us</button>
        </div>
        <img src="https://s3-alpha-sig.figma.com/img/9fcf/3f3c/c03dd9f27b440a3875a1d985ec8af184?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZRDcV7YbqIHyyf-BWyxGV9S3hC5XmXCkenBk~dHSHv-KZoIq4XsBtaVmgxe0xDjBC5ivoaWMojJdDViFWtyf4xt0pvZycWYpgm5RYuBC1x8zm7INB7hScrgApJd6tgsvXgLEW8kbVgQ4RCMArQIgfVf1t80hYujGUCuyDEUrKuJXfFGubBYnRJ6nfg~MHH9osfmuY~Ib7s0fEXo8kIOQZTOQSnGX9eerjBVV-AbKhVV6rw-3nluJK5C55mTEv6brIfhrTQ-qzRlcHLyNH0wMbSYKu9P-mp52tmymCht4bDPB11uT6buopn27qe-ZVISCQ4iA~XyeAmDWXnPNpAM0A__"
        alt="aboutimg"
        className="w-screen h-[479px] object-cover object-center overflow-hidden"
        />
       </div>

         <div className='flex mt-12'>
            <img src='https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt="logo"
            className='w-[450px] h-[250px] pt-12 px-16 object-cover object-center overflow-hidden rounded-lg mb-4'
            />
            <div className='pt-12 w-6/12 '>
                <h3 className='text-lg font-bold w-6/12 '>
                  In this digital area when children are inclined towards screens, our programs give the option of socializing and learning to read through play.
                </h3>
                <p className='pt-4 w-8/12'>lets read takes young learner on an exciting journey from beginner to proficient reader through engaging games and playful activities.our books and system are designed to boost confidence and self esteem.fostering a love for reading from an early age. The handsome nature of our prgram encourage physical environment, communiction and collabration providing a unique learning experience that goes beyond screen. </p>
            <button className='bg-purple-900 px-4 py-2  rounded-lg font-bold mt-6'>read more</button>
            </div>
         </div>
    </div>
  )
}
export default About;