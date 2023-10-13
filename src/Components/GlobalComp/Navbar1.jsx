import React,{useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {ImCross} from "react-icons/im";
import {RxCross2} from "react-icons/rx"


const Navbar1 = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    // function Menu(e){
    //     e.name === <AiOutlineMenu /> ? e.name = <AiOutlineMenu /> : <ImCross />
    // }

  return (
    <>
    <nav className=''>
        <span className='text-3xl md:hidden block cursor-pointer' onClick={toggleMenu}>
        {isMenuOpen ? <RxCross2 /> : <AiOutlineMenu />}
        </span>

        {/* <ul className='md:flex md:items-center z-1 md:z-auto md:static absolute bg-red-400 w-[15%] md:w-auto 
        left-0 md:py-0 py-4 md:pl-0  md:opacity-100 opacity-100 transition-all ease-in duration-500'> */}
        <ul className={`md:flex md:items-center z-1 md:z-auto md:static absolute bg-red-400 w-[15%] md:w-auto 
                    left-0 md:py-0 py-4 md:pl-0 md:opacity-100 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} transition-all ease-in duration-500`}>
            
            <li className='mx-4 my-6 md:my-0 '>
                <a href='#'>Home</a>
            </li>
            <li className='mx-4'>
                <a href='#'>About Us</a>
            </li>
            <li className='mx-4'>
                <a href='#'>Courses</a>
            </li>
            <li className='mx-4'>
                <a href='#'>Hiring</a>
            </li>
            <li className='mx-4'>
                <a href='#'>Contact Us</a>
            </li>
        </ul>

    </nav>

    </>
  )
}

export default Navbar1