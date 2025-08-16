import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../App.css'
import HeaderCarousel from '../components/Hearder-carousel'
import Navbar from '../components/Navbar' 
import Services from '../components/Servicessection';
import Testimonial from '../components/Testimonialsection';
import FAQ from '../components/FAQsection';
import Footer from '../components/Footer';

function Servicespage() {

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
    <Services/><br /> 
    <Testimonial/><br />
    <FAQ/><br />
    <Footer/>
    </>
  )
}

export default Servicespage
