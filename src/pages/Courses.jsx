import React from 'react'
import mainImg from '/Images/about.png'
import course1Img from '/Images/courses/Course 1.png'
import course2Img from '/Images/courses/Course 2.png'
import course3Img from '/Images/courses/Course 3.png'
import course4Img from '/Images/courses/Course 4.png'
import ellipseImg from '/Images/courses/Ellipse.png'
import clockImg from '/Images/courses/clock.png'
import noteImg from '/Images/courses/note.png'
import iconImg from '/Images/courses/icons.png'
import starImg from '/Images/courses/Star.png'

const Courses = () => {

    const data = [
        {courseName: "Graphic Design",courseImg: course1Img },
        {courseName: "Web Design",courseImg: course2Img },
        {courseName: "Graphic Design",courseImg: course3Img },
        {courseName: "Development",courseImg: course4Img },
        {courseName: "Graphic Design",courseImg: course1Img },
        {courseName: "Web Design",courseImg: course2Img },
        {courseName: "Graphic Design",courseImg: course3Img },
        {courseName: "Development",courseImg: course4Img },
       ]


  return (
    <>
    <img src={mainImg}></img>

    <div className='absolute -mt-[14%] ml-[43%]'>
    <p className='text-[2.2rem] text-white font-bold'>COURSES</p>
    <button className='ml-4 px-2 py-1 text-white bg-[#4739FF]'>Home-Course</button>
    </div>

    
    <div className='flex justify-center'>
    <div className='grid grid-cols-4 sm:gap-4 gap-2 mt-10 sm:w-[80%] w-[90%]'>


    {   data.map((value,index)=>{
        return(

    <div className=' mt-10 lg:w-52 md:w-44 sm:w-32 lg:h-72 md:h-64 sm:h-52 h-48 border-2 rounded-md border-slate-400 flex flex-col items-center' key={index}>
        <img src={value.courseImg} className='w-[95%] h-[40%] mt-1'></img>
        <img src={ellipseImg} className='absolute md:w-[4%] sm:w-[3%] w-[3%] md:h-[7%] md:mt-24 sm:mt-[4.5rem] mt-[11%] md:ml-32 sm:ml-20 ml-[14%]'></img>

        <div className='sm:mt-3 mt-2 lg:mr-16 md:mr-20 sm:mr-10 mr-[40%] md:h-7 sm:h-5 h-3 lg:w-32 md:w-20 sm:w-20 w-16 lg:text-[1rem] md:text[0.95rem] sm:text-[0.6rem] text-[0.5rem] bg-[#E8F9EF] text-[#4DBC53] rounded-full flex justify-center items-center'>Graphic Design</div>
        <p className='mt-2 md:mr-7 sm:mr-4 mr-[5%] w-[80%] md:text-xs sm:text-[0.5rem] text-[0.5rem] font-semibold text-[#041841]'>Bigener Adobe Illustrator for Graphic Design</p>
        
        <div className='flex justify-center'>
        <div className='flex lg:gap-[4.5rem] md:gap-[4rem] sm:gap-[2.5rem] gap-[40%] md:w-[90%] sm:w-[90%] w-[90%] md:mt-5 sm:mt-3 mt-2'>
        <img src={noteImg} className='w-[7%] h-[80%]'></img>
        <img src={clockImg} className='w-[7%] h-[90%]'></img>
        <img src={iconImg} className='w-[7%] h-[90%]'></img>
        </div>
        </div>

        <p className='lg:mt-3 sm:mt-2 mt-2 lg:w-48 md:w-40 sm:w-28 w-[95%] h-[0.01rem] bg-[#9F9F9F]'></p>

        <div className='lg:mt-2 md:mt-1 sm:mt-1 mt-2 md:ml-2 sm:ml-1 ml-[2%] flex md:gap-20 sm:gap-12 gap-[40%] items-center'>
            <p className='text-[#4739FF] lg:text-[1rem] md:text-[0.85rem] sm:text-xs text-[0.7rem] font-semibold '>$29.00</p>
            <div className='flex items-center mr-[2%]'>
                <img src={starImg} className='w-[25%] h-[20%]'></img>
                <p className='text-[#6B6B6B] lg:text-[1rem] md:text-[0.85rem] sm:text-xs text-[0.7rem]'>(4.2)</p>
            </div>
        </div>
    </div>
        )
    })
    }
    </div>
    </div>
    </>
  )
}

export default Courses