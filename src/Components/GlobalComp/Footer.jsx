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

   <div className='absloute -mt-52 flex lg:gap-24 md:gap-16 sm:gap-10 gap-4'>
    {/* footer part-1 */}
    <div className='ml-10'>
        <img src={hatImg} className='w-[15%]'></img>
        <p className='text-white sm:text-sm text-[0.5rem] sm:mt-5 mt-3'>Spacetotech Technologies LLPC</p>
        <p className='text-white sm:text-sm text-[0.5rem]'>C 171 sec-63 Noida Uttar</p>
        <p className='text-white sm:text-sm text-[0.5rem]'>Pradesh-201301 India </p>
        <div className='flex gap-5 sm:mt-5 mt-3'>
            <div className='sm:h-7 sm:w-7 h-4 w-4 border rounded-full flex justify-center items-center'>
            <img src={facebookImg} className='sm:w-[20%] w-[15%] sm:h-[0.8rem] h-[0.5rem] '></img>
            </div>
            <div className='sm:h-7 sm:w-7 h-4 w-4 border rounded-full flex justify-center items-center'>
            <img src={instagramImg} className='sm:w-[40%] w-[30%] sm:h-[0.9rem] h-[0.5rem]'></img>
            </div>
            <div className='sm:h-7 sm:w-7 h-4 w-4 border rounded-full flex justify-center items-center'>
            <img src={twitterImg} className='sm:w-[40%] w-[30%] sm:h-[0.9rem] h-[0.5rem]'></img>
            </div>
        </div>
    </div>

    {/* footer part-2 */}
    <div className='flex flex-col sm:gap-4 gap-2 md:ml-14 sm:ml-5 -ml-10'>
        <p className='text-white sm:text-[1.25rem] text-[0.9rem]'>Course</p>
        <p className='text-white sm:text-xs text-[0.5rem]'>UI/UX Design</p>
        <p className='text-white sm:text-xs text-[0.5rem]'>React JS</p>
        <p className='text-white sm:text-xs text-[0.5rem]'>Core Java</p>
    </div>

    {/* footer part-3 */}
    <div className='flex flex-col sm:gap-4 gap-2'>
        <p className='text-white sm:text-[1.25rem] text-[0.9rem]'>About</p>
        <p className='text-white sm:text-xs text-[0.5rem]'>About Us</p>
        <p className='text-white sm:text-xs text-[0.5rem]'>Hiring</p>
        <p className='text-white sm:text-xs text-[0.5rem]'>Privacy Policy</p>
    </div>

    {/* footer part-4 */}
    <div className='flex flex-col sm:gap-4 gap-2'>
        <p className='text-white sm:text-[1.25rem] text-[0.9rem]'>Help</p>
        <p className='text-white sm:text-xs text-[0.5rem]'>Contact Us</p>
        <p className='text-white sm:text-xs text-[0.5rem]'>FAQ</p>
    </div>
    
    {/* footer part-5 */}
    <div className='mt-5'>
        <div className='flex sm:gap-4 gap-2'>
        <img src={emailImg} className='sm:w-[12%] w-[10%] sm:h-[0.8rem] h-[0.6rem]'></img>
        <p className='text-white sm:text-xs text-[0.5rem]'>Spacetotech@gmail.com</p>
        </div>

       <div className='flex sm:gap-4 gap-2 mt-2'>
        <img src={phoneImg} className='sm:w-[12%] w-[10%] sm:h-[0.8rem] h-[0.6rem]'></img>
        <p className='text-white sm:text-xs text-[0.5rem] '>+91-8076190721</p>
       </div>
    </div>

    </div>
    </>
  )
}

export default Footer