import React from 'react'
import studentImg from '/Images/studentImg.png'
import model1 from '/Images/model1.jpeg'
import model2 from '/Images/model2.jpeg'
import arrowImg from '/Images/arrow.png'

const Main = () => {

  return (
    <>
    <div className='flex justify-between w-full h-[34rem] bg-gradient-to-r from-red-50 via-red-300 via-red-400 via-sky-300 to-red-200 '>
        <div className='w-[60%] md:mt-28 sm:mt-20 mt-16 md:ml-28 sm:ml-20 ml-5'>
            <p className='xl:text-[4.5rem] lg:text-[3.35rem] md:text-[2.4rem] sm:text-[1.95rem] text-[1.75rem] font-bold text-[#002B46]'> <span className='text-[#525FE1]'>ZEHAN </span> </p>
            <p className='xl:text-[4.5rem] lg:text-[3.35rem] md:text-[2.4rem] sm:text-[1.95rem] text-[1.75rem] font-bold text-[#002B46] md:-mt-6'>Conscious Luxory</p>
            <p className='w-[70%] sm:text-[10px] lg:text-[1rem] text-[0.7rem] mt-4'>At Zehan, we design elegant, effortless pieces that suit every occasion. All our creations are rooted in conscious luxury,
             and contemporary interpretations of craft
                 .</p>
            <img src={arrowImg} className='absolute xl:h-[50%] lg:h-[40%] md:h-[35%] sm:h-[28%] h-[22%] xl:ml-96 lg:ml-64 md:ml-36 sm:ml-24 ml-20 xl:-mt-32 lg:-mt-8 md:-mt-8 sm:-mt-6'></img>     
        </div>

        <div className='w-[40%] flex justify-center'>
            <img src={model2} alt='missing' className='lg:h-[100%] md:h-[90%] sm:h-[70%] h-[60%] mr-5'></img>
        </div>
    </div>

    </>
  )
}

export default Main