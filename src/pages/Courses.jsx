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
    <div className='flex justify-center'>
    <div className='grid grid-cols-4 gap-4 mt-10 w-[80%]'>

    {   data.map((value,index)=>{
        return(

    <div className=' mt-10 md:w-52 sm:w-32 md:h-72 sm:h-52 border-2 rounded-md border-slate-400 flex flex-col items-center' key={index}>
        <img src={value.courseImg} className='w-[95%] h-[40%] mt-1'></img>
        <img src={ellipseImg} className='absolute md:w-[4%] sm:w-[3%] md:h-[7%] md:mt-24 sm:mt-[4.5rem] md:ml-32 sm:ml-20'></img>

        <div className='mt-3 md:mr-16 sm:mr-10 md:h-7 sm:h-5 md:w-32 sm:w-20 md:text-[1rem] sm:text-[0.6rem] bg-[#E8F9EF] text-[#4DBC53] rounded-full flex justify-center items-center'>Graphic Design</div>
        <p className='mt-2 md:mr-7 sm:mr-4 w-[80%] md:text-xs sm:text-[0.5rem] font-semibold text-[#041841]'>Bigener Adobe Illustrator for Graphic Design</p>
        
        <div className='flex justify-center'>
        <div className='flex md:gap-[4.5rem] sm:gap-[2.5rem] md:w-[90%] sm:w-[90%] md:mt-5 sm:mt-3'>
        <img src={noteImg} className='w-[7%] h-[80%]'></img>
        <img src={clockImg} className='w-[7%] h-[90%]'></img>
        <img src={iconImg} className='w-[7%] h-[90%]'></img>
        </div>
        </div>

        <p className='md:mt-3 sm:mt-2 md:w-48 sm:w-28 h-[0.01rem] bg-[#9F9F9F]'></p>

        <div className='md:mt-2 sm:mt-1 md:ml-2 sm:ml-1 flex md:gap-20 sm:gap-12 items-center'>
            <p className='text-[#4739FF] md:text-[1rem] sm:text-xs font-semibold '>$29.00</p>
            <div className='flex items-center'>
                <img src={starImg} className='w-[25%] h-[20%]'></img>
                <p className='text-[#6B6B6B] md:text-[1rem] sm:text-xs'>(4.2)</p>
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