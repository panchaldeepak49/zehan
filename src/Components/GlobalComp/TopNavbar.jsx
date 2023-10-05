import React from 'react'
import iconImg from '/Images/iconImg.png'
import { useNavigate } from 'react-router-dom'

const TopNavbar = () => {

  const navigate = useNavigate();
  
  return (
    <>
    <div className='w-full h-20 bg-gradient-to-r from-red-100 via-red-200 via-blue-200 to-red-200 flex justify-between items-center'>
        <img src={iconImg} className='h-20 ml-20'></img>
        <div className='flex gap-10 mr-10 font-semibold'>
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