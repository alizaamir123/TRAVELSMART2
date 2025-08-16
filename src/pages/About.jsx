import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../App.css'
import HeaderCarousel from "../components/Hearder-carousel";
import Navbar from "../components/Navbar";
import About from '../components/Aboutsection';
import TeamSection from '../components/Teamsection';
import Footer from '../components/Footer';

function Aboutus() {
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return ( 
    <>
     <Navbar/>
     <HeaderCarousel/><br /><br />
    <About/><br />
    <TeamSection/><br />
    <Footer/>
    </>
  )
}

export default Aboutus
