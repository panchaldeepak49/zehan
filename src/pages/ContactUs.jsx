import React from 'react'
import contactImg from '/Images/contact.png'
import successManImg from '/Images/success-man.png'

const ContactUs = () => {
  return (
    <>
    <img src={contactImg}></img>

    <div className='absolute -mt-[22%] ml-[43%]'>
    <p className='md:text-[2.2rem] sm:text-[2rem] text-white font-bold'>CONTACT US</p>
    <button className='ml-8 px-2 py-1 text-white bg-[#4739FF] rounded-md'>Home-Contact Us</button>
    </div>

    <div className='mt-10 flex'>

        <div className='w-[50%] bg-green-400 flex flex-col mt-14'>
            <div className='flex justify-evenly'>
          <input type='text' placeholder='Full Name' className='bg-red-400 w-[40%] h-[2rem] rounded-md'></input>
          <input type='text' placeholder='Email address' className='bg-red-400 w-[40%] rounded-md'></input>
          </div>
          <input type='text' placeholder='Subject' className='mt-4 ml-10 bg-red-400 w-[40%] h-[2rem] rounded-md'></input>
          <input type='text' placeholder='Message' className='mt-4 ml-10 w-[88%] h-[6rem] rounded-md'></input>
          <button className='mt-10 ml-10 bg-[#4739FF] py-2 w-[20%] text-[0.75rem] text-white rounded-md'>Send Message</button>
        </div>

        <div className='w-[50%] flex justify-center bg-red-400'>
            <img src={successManImg} className='w-[50%]'></img>
        </div>
    </div>
    </>
  )
}

export default ContactUs