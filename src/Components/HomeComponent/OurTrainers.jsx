import React from 'react'
import ellipseImg from '/Images/Ellipse 4.png'
import trainer1Img from '/Images/Ellipse 3.png'
import trainer2Img from '/Images/Ellipse 7.png'
import trainer3Img from '/Images/Ellipse 11.png'
import trainer4Img from '/Images/Ellipse 15.png'

const OurTrainers = () => {
  return (
    <>
    <div className='mt-20 flex justify-center'>
        <p className='sm:text-[4rem] text-[2rem] text-[#525FE1] font-semibold'>Our Trainers</p>
    </div>

    <div className='flex mt-14 w-[100%]'>
    <div className='flex flex-col items-center'>
        <img src={trainer1Img} className='w-[53%]' ></img>
        <img src={ellipseImg} className='absolute w-[15%] -mt-3'></img>
        <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.85rem] font-semibold'>Pramod Sharma</p>
        <p className='text-xs'>UI Designer</p>
    </div>
    

    <div className='flex flex-col items-center'>
        <img src={trainer2Img} className='w-[53%]' ></img>
        <img src={ellipseImg} className='absolute w-[15%] -mt-3'></img>
        <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.85rem] font-semibold'>Pramod Sharma</p>
        <p className='text-xs'>UI Designer</p>
    </div>

    <div className='flex flex-col items-center'>
        <img src={trainer3Img} className='w-[53%]' ></img>
        <img src={ellipseImg} className='absolute w-[15%] -mt-3'></img>
        <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.85rem] font-semibold'>Pramod Sharma</p>
        <p className='text-xs'>UI Designer</p>
    </div>

    <div className='flex flex-col items-center'>
        <img src={trainer4Img} className='w-[53%]' ></img>
        <img src={ellipseImg} className='absolute w-[15%] -mt-3'></img>
        <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.85rem] font-semibold'>Pramod Sharma</p>
        <p className='text-xs'>UI Designer</p>
    </div>

    </div>
    </>
  )
}

export default OurTrainers