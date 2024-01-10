import React from 'react'
import model1 from '/Images/model1.jpeg'
import model2 from '/Images/model2.jpeg'
import model3 from '/Images/model3.jpeg'
import model4 from '/Images/model4.jpeg'
import model5 from '/Images/model5.jpeg'
import model6 from '/Images/model6.jpeg'
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
        <p className='mt-5 md:w-[50%] sm:w-[55%] text-center md:text-[1rem] sm:text-[0.75rem] text-[0.75rem] text-[#4A4A4A]'>
        Look out for Indian staples like salwar suits, sarees, kurtas, and lehengas or experiment with a range of fusion separates.
        Indigenous craftsmanship and age-old techniques of embroidery.</p>
    </div>
    
    <div className='flex justify-center'>
    <div className='grid grid-cols-4 sm:gap-4 gap-2 mt-10 w-[80%]'>
       
       <div className='flex flex-col sm:gap-6 gap-2 h-[20rem]'>
         <img src={model1} className='h-full rounded-md'></img>
         </div>

         <div className='flex flex-col sm:gap-6 gap-2 h-[20rem]'>
         <img src={model3} className='h-full rounded-md' ></img>
         </div>

        
         <div className='flex flex-col sm:gap-6 gap-2 h-[20rem]'>
         <img src={model4}  className='h-full rounded-md'></img>
         </div>
         
         <div className='flex flex-col sm:gap-6 gap-2 h-[20rem]'>
         <img src={model5} className='h-full rounded-md'></img>
         </div>
    </div>
    </div>
    </>
  )
}

export default TopCategories