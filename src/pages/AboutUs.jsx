import React from 'react'
import mainImg from '/Images/about.png'
import teachImg from '/Images/Rectangle 56.png'
import howTeachImg from '/Images/Group 61.png'


const AboutUs = () => {
  return (
    <>
    <img src={mainImg}></img>

    <div className='absolute sm:-mt-[14%] -mt-[16%] ml-[43%]'>
    <p className='sm:text-[2.2rem] text-[1.5rem] text-white font-bold'>ABOUT US</p>
    <button className='ml-[6%] px-2 py-1 sm:text-[1rem] text-[0.75rem] text-white bg-[#4739FF]'>Home-About Us</button>
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
            <img src={teachImg} className='absolute w-[30%] md:h-[14rem] sm:h-[10rem] h-[8rem]'></img>

            <div className='md:h-64 sm:h-48 h-40 lg:w-[28rem] sm:w-[30rem] w-[50%] border-4 border-[#4739FF] xl:ml-80 lg:ml-68 md:ml-60 sm:ml-48 ml-[30%]'>
            <p className='lg:text-[1.5rem] md:text-[1.25rem] sm:text-[1rem] text-[#4A4A4A] font-semibold lg:ml-24 md:ml-20 sm:ml-12 ml-[17%] sm:mt-7 mt-4'>Student Guidance</p>
            <p className='lg:text-sm md:text-xs sm:text-[0.6rem] text-[0.6rem] text-[#4A4A4A] lg:ml-24 md:ml-20 sm:ml-12 ml-[17%] sm:mt-2 '>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document 
                or a typeface without relying on meaningful content. </p>
            <button className='lg:ml-24 md:ml-20 ml-[17%] lg:px-6 md:px-4 sm:px-3 px-2 md:py-2 sm:py-1 py-0.5 bg-[#4739FF] lg:mt-10 md:mt-8 sm:mt-5 mt-3 rounded-md md:text-[1rem] sm:text-xs text-[0.5rem] text-white'>Read more</button>
            </div>
            <img src={howTeachImg} className='md:w-[28%] sm:w-[20%] w-[20%] md:h-24 sm:h-12 h-10 md:ml-10 sm:ml-5'></img>
        </div>

    </div>
    </div>
    </>
  )
}

export default AboutUs