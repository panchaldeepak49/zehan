import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from '../pages/Home'
import TopNavbar from '../Components/GlobalComp/TopNavbar'
import AboutUs from '../pages/AboutUs'
import Footer from '../Components/GlobalComp/Footer'
import Courses from '../pages/Courses'
import Hiring from '../pages/Hiring'
import ContactUs from '../pages/ContactUs'
import Privacy from '../pages/Privacy'
import Navbar1 from '../Components/GlobalComp/Navbar1'

const Path = () => {
  return (
    <>
    
        <TopNavbar />
        {/* <Navbar1 /> */}
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/aboutUs' element={<AboutUs />}></Route>
            <Route path='/courses' element={<Courses />}></Route>
            <Route path= '/hiring' element={<Hiring />}></Route>
            <Route path= '/contactUs' element={<ContactUs />}></Route>
            <Route path= '/privacy' element={<Privacy />}></Route>

        </Routes>
        <Footer />
    
    </>
  )
}

export default Path