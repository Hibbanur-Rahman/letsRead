import React from 'react'

const About = () => {
  return (
    <div>
        <h1 className='text-center mt-12 text-3xl font-bold'>About Us</h1>
        <div className='h-[2px] w-1/12 bg-red-600 mx-auto'></div>
         <div className='flex'>
            <img src='https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt="logo"
            className='w-6/12 h-[500px] pt-12 px-16 object-cover object-center overflow-hidden rounded-lg mb-4'
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
export default About