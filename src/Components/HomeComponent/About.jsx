import React from 'react'
import rect15Img from '/Images/Rectangle 15.png'
import rect16Img from '/Images/Rectangle 16.png'
import iconImg from '/Images/Group.png'

const About = () => {
  return (
    <>
    <div className='flex justify-center w-full mt-20'>
    <div className='w-[48%] bg-red-500 flex justify-center'>
        <img src={rect15Img} className='md:w-[70%] sm:w-[65%] md:h-[32rem] sm:h-[22rem] ml-16'></img>
        <img src={rect16Img} className='absolute md:w-[15%] sm:w-[15%] md:h-[15rem] sm:h-[9rem] md:ml-96 sm:ml-56 md:mt-80 sm:mt-56'></img>
    </div>

    <div className='w-[52%] bg-green-300'>
        <p className='md:text-[1.5rem] sm:text-[0.95rem] text-[#525FE1] font-medium '>About Us</p>
        <p className='md:text-[2rem] sm:text[1rem] text-[#4A4A4A] font-semibold w-[70%]'>Lorem ipsum is a placeholder text commonly</p>
        <p className='text-[#7A7A7A] mt-5 w-[80%] md:text-[1rem] sm:text-xs'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

        <div className='md:mt-10 sm:mt-5 flex items-start gap-5'>
        <div className='md:h-8 sm:h-6 w-14 bg-[#4739FF] rounded-full flex justify-center items-center'>
        <img src={iconImg} className='absolute w-[1.5%] '></img>
        </div>

        <div>
        <p className='text-[#525FE1] font-semibold'>Flexible Classes</p>
        <p className='text-[#7A7A7A] w-[80%] md:text-[1rem] sm:text-xs'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
           typeface without relying on meaningful content.</p>
           </div>
        </div>
        
        <div className='md:mt-10 sm:mt-5 flex items-start gap-5'>
        <div className='md:h-8 sm:h-6 w-14 bg-[#4739FF] rounded-full flex justify-center items-center'>
        <img src={iconImg} className='absolute w-[1.5%] '></img>
        </div>

        <div>
        <p className='text-[#525FE1] font-semibold'>Learn From Anywhere</p>
        <p className='text-[#7A7A7A] w-[80%] md:text-[1rem] sm:text-xs'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
           typeface without relying on meaningful content.</p>
        </div>

        </div>

    </div>
    </div>
    </>
  )
}

export default About