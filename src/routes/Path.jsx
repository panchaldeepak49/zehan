import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from '../pages/Home'
import TopNavbar from '../Components/GlobalComp/TopNavbar'
import AboutUs from '../pages/AboutUs'
import Footer from '../Components/GlobalComp/Footer'
import Courses from '../pages/Courses'
import Hiring from '../pages/Hiring'
import ContactUs from '../pages/ContactUs'

const Path = () => {
  return (
    <>
    
        <TopNavbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/aboutUs' element={<AboutUs />}></Route>
            <Route path='/courses' element={<Courses />}></Route>
            {/* <Route path= '/hiring' element={<Hiring/>}></Route>
            <Route path= '/contactUs' element={<ContactUs/>}></Route> */}
        </Routes>
        <Footer />
    
    </>
  )
}

export default Path