import React from 'react'
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faPersonDress, faPeopleGroup, faStreetView} from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div>
        <h1 className='text-center mt-12 text-3xl font-bold'>Our Achievements</h1>
        <div className='h-[2px] w-2/12 bg-red-600 mx-auto'></div>
            
        <div className='mt-6 flex justify-center'>
             <div className='w-[220px] h-[120px] bg-purple-900 mx-16 p-2 rounded-lg'>
                 <div className='flex justify-between'>
                 <p className='text-2xl text-white font-bold'>1%</p>
                 < FontAwesomeIcon icon ={faPersonDress} className="fa-2xl text-white" />
                 </div>
                 <p className='text-white text-center pt-10 font-bold'>Successfull Trainings</p>
             </div> 
             <div className='w-[220px] h-[120px] bg-purple-900 mx-16 p-2 rounded-lg'>
                 <div className='flex justify-between'>
                 <p className='text-2xl text-white font-bold'>1</p>
                 < FontAwesomeIcon icon ={faPeopleGroup} className="fa-2xl text-white" />
                 </div>
                 <p className='text-white text-center pt-10 font-bold'>Dedicated Team Members</p>
             </div> 
             <div className='w-[220px] h-[120px] bg-purple-900 mx-16 p-2 rounded-lg'>
                 <div className='flex justify-between'>
                 <p className='text-2xl text-white font-bold'>1000</p>
                 < FontAwesomeIcon icon ={faStreetView} className="fa-2xl text-white" />
                 </div>
                 <p className='text-white text-center pt-10 font-bold'>People Reached</p>
             </div> 
        </div>
    </div>
  )
}

export default Card