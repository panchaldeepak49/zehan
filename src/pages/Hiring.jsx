import React from 'react'
import hiringImg from '/Images/hiring.png'

const Hiring = () => {
  return (
    <>
     <img src={hiringImg}></img>

     <div className='flex'>

        <div className='w-[50%] bg-red-400 flex flex-col justify-center'>
            <p className='ml-20 -mt-12 text-[2rem] font-semibold'>Get First Dibs.</p>
            <p className='ml-20 mt-5 text-md w-[80%]'>Copy Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.</p>
        </div>

        <div className='w-[50%] bg-green-400 flex flex-col'>
            <label className='mt-5'>Your Name*</label>
            <input type='text' className='w-[80%] h-[2rem] rounded-md'></input>
            <label className='mt-5'>Your Email*</label>
            <input type='email' className='w-[80%] h-[2rem] rounded-md'></input>
            <label className='mt-5'>Contact number*</label>
            <input type='number' className='w-[80%] h-[2rem] rounded-md'></input>
            <label className='mt-5'>Upload Resume* (PDF/Word)</label>
            <button className='px-1 border-2 border-[#A1A1A1] rounded w-[12%] text-[#595959] text-xs mt-2'>Choose File</button>
            <button className='py-1.5  bg-[#4739FF] text-white mt-5 w-[70%] rounded-md'>Submit</button>
        </div>

     </div>
    </>
  )
}

export default Hiring