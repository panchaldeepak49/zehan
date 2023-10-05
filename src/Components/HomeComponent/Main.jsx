import React from 'react'
import studentImg from '/Images/studentImg.png'
import arrowImg from '/Images/arrow.png'

const Main = () => {

  return (
    <>
    <div className='flex justify-between w-full h-[34rem] bg-gradient-to-r from-red-50 via-red-300 via-red-400 via-sky-300 to-red-200 '>
        <div className='w-[60%] mt-28 ml-28'>
            <p className='xl:text-[4.5rem] lg:text-[3.35rem] md:text-[2.4rem] sm:text-[1.95rem] font-bold text-[#002B46]'>HTML, CSS <span className='text-[#525FE1]'>JavaScript </span> </p>
            <p className='xl:text-[4.5rem] lg:text-[3.35rem] md:text-[2.4rem] sm:text-[1.95rem] text-[2.4rem] font-bold text-[#002B46] md:-mt-6'>Training Program</p>
            <p className='w-[70%] sm:text-[10px] lg:text-[1rem] mt-4'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                 or a typeface without relying on meaningful content.</p>
            <img src={arrowImg} className='absolute xl:h-[50%] lg:h-[40%] md:h-[35%] sm:h-[28%] xl:ml-96 lg:ml-64 md:ml-36 sm:ml-24 xl:-mt-32 lg:-mt-8 md:-mt-8 sm:-mt-6'></img>     
        </div>

        <div className='w-[40%] flex justify-center'>
            <img src={studentImg} className='lg:h-[100%] md:h-[90%] sm:h-[70%]'></img>
        </div>
    </div>

    </>
  )
}

export default Main