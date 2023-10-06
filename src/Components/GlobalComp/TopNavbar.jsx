import React from 'react'
import iconImg from '/Images/iconImg.png'
import { useNavigate } from 'react-router-dom'

const TopNavbar = () => {

  const navigate = useNavigate();
  
  return (
    <>
    <div className='w-full h-20 bg-gradient-to-r from-red-100 via-red-200 via-blue-200 to-red-200 flex sm:justify-between sm:items-center 
    max-[650px]:flex-col max-[650px]:items-start'>
        <img src={iconImg} className='md:h-20 sm:h-16 h-12 sm:ml-20 ml-5'></img>

        <div className=' flex gap-10  mr-10 font-semibold max-[650px]:flex-col max-[650px]:w-20 max-[650px]:h-80 max-[650px]:bg-red-400
         max-[650px]:z-10 max-[650px]:mt-[1rem] max-[650px]:mr-[85%] max-[650px]:rounded-md'>
            <p onClick={()=>navigate('/')}>Home</p>
            <p onClick={()=>navigate('/aboutUs')}>About Us</p>
            <p onClick={()=>navigate('/courses')}>Courses</p>
            <p onClick={()=>navigate('/hiring')}>Hiring</p>
            <p onClick={()=>navigate('/contactUs')}>Contact Us</p>
        </div>
    </div>
    </>
  )
}

export default TopNavbar