import React from 'react'
import rectangleFooterImg from '/Images/Rectangle 32.png'
import hatImg from '/Images/iconImg.png'
import facebookImg from '/Images/facebook.png'
import instagramImg from '/Images/instagram.png'
import twitterImg from '/Images/twitter.png'
import emailImg from '/Images/email.png'
import phoneImg from '/Images/phone.png'

const Footer = () => {

    const imgClassName =
    window.location.pathname === '/'
      ? 'mt-20 w-full h-[20rem]'
      : 'mt-20 w-full h-[20rem]';

   // -mt-20
  return (
    <>
     <img src={rectangleFooterImg} className={imgClassName}></img>

   <div className='absloute -mt-52 flex lg:gap-24 md:gap-16 sm:gap-10'>
    {/* footer part-1 */}
    <div className='ml-10'>
        <img src={hatImg} className='w-[15%]'></img>
        <p className='text-white text-sm mt-5'>Spacetotech Technologies LLPC</p>
        <p className='text-white text-sm'>C 171 sec-63 Noida Uttar</p>
        <p className='text-white text-sm'>Pradesh-201301 India </p>
        <div className='flex gap-5 mt-5'>
            <div className='h-7 w-7 border rounded-full flex justify-center items-center'>
            <img src={facebookImg} className='w-[20%] h-[0.8rem] '></img>
            </div>
            <div className='h-7 w-7 border rounded-full flex justify-center items-center'>
            <img src={instagramImg} className='w-[40%] h-[0.9rem]'></img>
            </div>
            <div className='h-7 w-7 border rounded-full flex justify-center items-center'>
            <img src={twitterImg} className='w-[40%] h-[0.9rem]'></img>
            </div>
        </div>
    </div>

    {/* footer part-2 */}
    <div className='flex flex-col gap-4 md:ml-14 sm:ml-5'>
        <p className='text-white sm:text-[1.25rem]'>Course</p>
        <p className='text-white text-xs'>UI/UX Design</p>
        <p className='text-white text-xs'>React JS</p>
        <p className='text-white text-xs '>Core Java</p>
    </div>

    {/* footer part-3 */}
    <div className='flex flex-col gap-4'>
        <p className='text-white sm:text-[1.25rem]'>About</p>
        <p className='text-white text-xs'>About Us</p>
        <p className='text-white text-xs'>Hiring</p>
        <p className='text-white text-xs'>Privacy Policy</p>
    </div>

    {/* footer part-4 */}
    <div className='flex flex-col gap-4'>
        <p className='text-white sm:text-[1.25rem]'>Help</p>
        <p className='text-white text-xs'>Contact Us</p>
        <p className='text-white text-xs'>FAQ</p>
    </div>
    
    {/* footer part-5 */}
    <div className='mt-5'>
        <div className='flex gap-4'>
        <img src={emailImg} className='w-[12%] h-[0.8rem]'></img>
        <p className='text-white text-xs'>Spacetotech@gmail.com</p>
        </div>

       <div className='flex gap-4 mt-2'>
        <img src={phoneImg} className='w-[12%] h-[0.8rem]'></img>
        <p className='text-white text-xs '>+91-8076190721</p>
       </div>
    </div>

    </div>
    </>
  )
}

export default Footer