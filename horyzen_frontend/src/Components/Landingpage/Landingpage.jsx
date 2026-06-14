import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Who from '../Who/Who'
import Techstack from '../Techstack/Techstack'
import Services from '../Services/Services'
import SDLC from '../SDLC/SDLC'
import Statistics from '../Statistics/Statistics'
import Why from '../Why/Why'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { useEffect } from 'react'

const Landingpage = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Who/>
      <Techstack/>
      <Services/>
      <SDLC/>
      <Statistics/>
      <Why/>
      <Contact/>
      <Footer/>
      
    </div>
      )
}

export default Landingpage