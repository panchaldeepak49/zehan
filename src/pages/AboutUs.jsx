import React from 'react'
import mainImg from '/Images/about.png'
import teachImg from '/Images/Rectangle 56.png'
import howTeachImg from '/Images/Group 61.png'


const AboutUs = () => {
  return (
    <>
    <img src={mainImg}></img>

    <div className='absolute -mt-[14%] ml-[43%]'>
    <p className='text-[2.2rem] text-white font-bold'>ABOUT US</p>
    <button className='ml-4 px-2 py-1 text-white bg-[#4739FF]'>Home-About Us</button>
    </div>

    <div className='flex justify-center'>
    <div className='w-[80%] flex flex-col items-start justify-center'>
        <p className='text-[2rem] text-[#002B46] font-semibold mt-5'>About</p>
        <p className='text-[2rem] text-[#002B46] font-semibold -mt-2'>The Training Institute</p>
        <p className='text-[#4A4A4A] mt-5 text-sm'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
         typeface without relying on meaningful content.Lorem ipsum is a placeholder text commonly used to demonstrate
         the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder 
         text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
         Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying
        on meaningful content.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface 
        without relying on meaningful content.</p>

        <div className='mt-14 w-full flex items-center '>
            <img src={teachImg} className='absolute w-[30%] md:h-[14rem] sm:h-[10rem]'></img>
            <div className='md:h-64 sm:h-48 md:w-[28rem] sm:w-[30rem] border-4 border-[#4739FF] md:ml-80 sm:ml-48'>
            <p className='md:text-[1.5rem] sm:text-[1rem] text-[#4A4A4A] font-semibold md:ml-24 sm:ml-14 mt-7'>Student Guidance</p>
            <p className='md:text-sm sm:text-xs text-[#4A4A4A] md:ml-24 sm:ml-14 mt-2'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document 
                or a typeface without relying on meaningful content. </p>
            <button className='ml-24 md:px-6 sm:px-3 md:py-2 sm:py-1 bg-[#4739FF] md:mt-10 sm:mt-5 rounded-md md:text-[1rem] sm:text-xs text-white'>Read more</button>
            </div>
            <img src={howTeachImg} className='md:w-[28%] sm:w-[20%] md:h-24 sm:h-12 md:ml-10 sm:ml-5'></img>
        </div>

    </div>
    </div>
    </>
  )
}

export default AboutUs