import React from 'react'
import enrollImg from '/Images/enroll.png'
import rectangleEnrollHeadImg from '/Images/Rectangle 25.png'



const Enroll = () => {


  return (
    <>
    <div className='mt-14 w-[90%] flex justify-evenly'>
        <img src={enrollImg} className='w-[40%]'></img>

        {/* <div className='w-[50%] flex flex-col justify-end mt-20 '>
            <img src={rectangleEnrollImg} className='w-[50%] h-[22rem]'></img>
            <img src={rectangleEnrollHeadImg} className='absolute w-[22%] mt-0.5'></img>
            </div> */}

            <div className='mt-28 w-[23%] md:h-[20rem] border-4 border-[#4739FF] rounded-md flex flex-col
            items-center'>
                
            <img src={rectangleEnrollHeadImg} className=' w-[100%] '></img>
                <p className='absolute md:mt-4 sm:mt-1 text-white'>Enroll Now</p>
                <input type='text' className=' w-[80%] h-[2rem] mt-4 rounded-md shadow-md' placeholder='Your Name'></input>
                <input type='text' className=' w-[80%] h-[2rem] mt-2 rounded-md shadow-md' placeholder='Your Email'></input>
                <input type='text' className=' w-[80%] h-[2rem] mt-2 rounded-md shadow-md' placeholder='Mobile Number'></input>
                <input type='text' className=' w-[80%] h-[2rem] mt-2 rounded-md shadow-md' placeholder='Contact Type'></input>
                <button className='lg:px-10 md:px-7 sm:px-3 mt-4 md:py-1 sm:py-0.2 rounded-md bg-[#4739FF] text-white'>Submit</button>
            </div>
        

    </div>
    {/* <div className='bg-footer bg-no-repeat bg-cover w-full h-96 flex'></div> */}
    

    
    </>
  )
}

export default Enroll