import React from 'react'
import rect8Img from '/Images/Rectangle 8.png'
import rect9Img from '/Images/Rectangle 9.png'
import rect14Img from '/Images/Rectangle 14.png'
import rect12Img from '/public/Images/Rectangle 12.png'
import rect10Img from '/public/Images/Rectangle 10.png'
import rect11Img from '/public/Images/Rectangle 11.png'
import rect13Img from '/public/Images/Rectangle 13.png'

const TopCategories = () => {
  return (
    <>
    <div className='flex flex-col items-center mt-10'>
        <p className='md:text-[4rem] sm:text-[3rem] text-[#525FE1] font-semibold '>Top Categories</p>
        <p className='mt-5 md:w-[50%] sm:w-[55%] text-center md:text-[1rem] sm:text-[0.75rem] text-[0.75rem] text-[#4A4A4A]'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.</p>
    </div>
    
    <div className='flex justify-center'>
    <div className='grid grid-cols-4 sm:gap-4 gap-2 mt-10 w-[80%]'>
       
       <div className='flex flex-col sm:gap-6 gap-2'>
         <img src={rect8Img} ></img>
         <img src={rect10Img} ></img>
         </div>
         <div className='flex flex-col sm:gap-6 gap-2'>
         <img src={rect9Img} ></img>
         <img src={rect11Img} ></img>
         </div>
         <img src={rect14Img} className='h-[100%]'></img>
         <div className='flex flex-col sm:gap-6 gap-2'>
         <img src={rect12Img} ></img>
         <img src={rect13Img} ></img>
         </div>
    </div>
    </div>
    </>
  )
}

export default TopCategories