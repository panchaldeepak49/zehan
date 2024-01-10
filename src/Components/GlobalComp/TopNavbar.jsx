import React,{useState} from 'react'
import iconImg from '/Images/iconImg.png';
import { useNavigate } from 'react-router-dom';
import {AiOutlineMenu} from "react-icons/ai";
import {RxCross2} from "react-icons/rx";

const TopNavbar = () => {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
  
  return (
    <>
    <div className='w-full h-20 bg-gradient-to-r from-red-100 via-red-200 via-blue-200 to-red-200 flex justify-between items-center '>
        <img src={iconImg} className='md:h-20 sm:h-16 h-12 sm:ml-20 ml-5'></img>

        <span className='text-3xl max-[400px]:text-xl sm:hidden block cursor-pointer mr-5' onClick={toggleMenu}>
        {isMenuOpen ? <RxCross2 /> : <AiOutlineMenu />}
        </span>

        {/* <div className=' flex gap-10  mr-10 font-semibold max-[650px]:flex-col max-[650px]:w-20 max-[650px]:h-80 max-[650px]:bg-red-400
         max-[650px]:z-10 max-[650px]:mt-[1rem] max-[650px]:mr-[85%] max-[650px]:rounded-md'> */}

        <div className={` items-center sm:flex sm:items-center sm:gap-10 font-semibold mr-5 z-1 sm:z-auto sm:static absolute  w-[15%] bg-red-200 sm:bg-none 
        rounded-md sm:w-auto sm:text-[1rem] text-[0.85rem] max-[500px]:text-[0.65rem]
                   ml-[82%] sm:ml-0 mt-60 sm:mt-0  sm:opacity-100 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} transition-all ease-in duration-300`}>

            <p className='mt-4 ml-[15%] sm:ml-0 sm:mt-0 cursor-pointer' onClick={()=>navigate('/')}>Home</p>
            <p className='mt-2 ml-[15%] sm:ml-0 sm:mt-0 cursor-pointer' >About Us</p>
            <p className='mt-2 ml-[15%] sm:ml-0 sm:mt-0 cursor-pointer' >Courses</p>
            <p className='mt-2 ml-[15%] sm:ml-0 sm:mt-0 cursor-pointer' >Hiring</p>
            <p className='mt-2 ml-[15%] sm:ml-0 sm:mt-0 cursor-pointer' >Contact Us</p>
        </div>
    </div>
    </>
  )
}

export default TopNavbar