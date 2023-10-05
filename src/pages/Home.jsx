import React from 'react'
import TopNavbar from '../Components/GlobalComp/TopNavbar'
import Main from '../Components/HomeComponent/Main'
import TopCategories from '../Components/HomeComponent/TopCategories'
import About from '../Components/HomeComponent/About'
import OurTrainers from '../Components/HomeComponent/OurTrainers'
import Enroll from '../Components/HomeComponent/Enroll'

const Home = () => {
  
  return (
    <>
    {/* <TopNavbar /> */}
    <Main />
    <TopCategories />
    <About />
    <OurTrainers />
    <Enroll/>
    
    </>
  )
}

export default Home