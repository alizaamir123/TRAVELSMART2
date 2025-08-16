import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../App.css'
import HeaderCarousel from '../components/Hearder-carousel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import FAQ from '../components/FAQsection';

function FAQpage() {

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
    <FAQ/><br />
    <Footer/>
    </>
  )
}

export default FAQpage
