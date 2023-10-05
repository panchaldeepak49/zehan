import React from 'react'
import contactImg from '/Images/contact.png'
import successManImg from '/Images/success-man.png'

const ContactUs = () => {
  return (
    <>
    <img src={contactImg}></img>

    <div className='mt-10 flex'>

        <div className='w-[50%] bg-green-400 flex flex-col'>
          <input type='text' placeholder='Full Name'></input>
          <input type='text' placeholder='Email address'></input>
          <input type='text' placeholder='Subject'></input>
          <input type='text' placeholder='Message'></input>
        </div>

        <div className='w-[50%] flex justify-center bg-red-400'>
            <img src={successManImg} className='w-[50%]'></img>
        </div>
    </div>
    </>
  )
}

export default ContactUs