import React from 'react'
import rect15Img from '/Images/Rectangle 15.png'
import rect16Img from '/Images/Rectangle 16.png'
import iconImg from '/Images/Group.png'
import model6 from '/Images/model6.jpeg'

const About = () => {
  return (
    <>
    <div className='flex justify-center w-full mt-20'>
    <div className='w-[48%] bg-red-500 flex justify-center'>
        <img src={model6} className='md:w-[70%] sm:w-[65%] w-[65%] md:h-[32rem] sm:h-[22rem] h-[20rem] sm:ml-16 ml-10'></img>
        {/* <img src={rect16Img} className='absolute md:w-[15%] sm:w-[15%] w-[14%] md:h-[15rem] sm:h-[9rem] h-[8rem] md:ml-96 sm:ml-56 ml-[27%] md:mt-80 sm:mt-56 mt-52'></img> */}
    </div>

    <div className='w-[52%] bg-green-300'>
        <p className='md:text-[1.5rem] sm:text-[0.95rem] text-[0.9rem] text-[#525FE1] font-medium '>About Us</p>
        <p className='md:text-[2rem] sm:text[1rem] text-[1rem] text-[#4A4A4A] font-semibold w-[70%]'>Zehan collection Online Shopping Platform</p>
        <p className='text-[#7A7A7A] sm:mt-5 mt-1 w-[80%] md:text-[1rem] text-[0.65rem] sm:text-xs'>Zehan is making every effort to bring sustainable fashion into the limelight through its special edit.</p>

        <div className='md:mt-10 sm:mt-5 flex items-start gap-5'>
        <div className='md:h-8 sm:h-6 h-5 w-14 bg-[#4739FF] rounded-full flex justify-center items-center'>
        {/* <img src={iconImg} className='absolute w-[1.5%] '></img> */}
        </div>

        <div>
        <p className='text-[#525FE1] sm:text-[1rem] text-[0.9rem] font-semibold'>Latest Fashion Trends</p>
        <p className='text-[#7A7A7A] w-[80%] md:text-[1rem] sm:text-xs text-xs'>Your quest for best dresses
           ends at Zehan collections.At Zehan Fashion Luxe, you will find a galore of options across apparel, jewellery, accessories, and lingerie.</p>
           </div>
        </div>
        
        <div className='md:mt-10 sm:mt-5 flex items-start gap-5'>
        <div className='md:h-8 sm:h-6 h-5 w-14 bg-[#4739FF] rounded-full flex justify-center items-center'>
        {/* <img src={iconImg} className='absolute w-[1.5%] '></img> */}
        </div>

        <div>
        <p className='text-[#525FE1] sm:text-[1rem] text-[0.9rem] font-semibold'>Styles Inspiration</p>
        <p className='text-[#7A7A7A] w-[80%] md:text-[1rem] sm:text-xs text-xs'>From traditional Indian wear to contemporary and into-western wear, 
        Zehan Fashion brings you the latest in fashion in an array of styles and much more.
           </p>
        </div>

        </div>

    </div>
    </div>
    </>
  )
}

export default About