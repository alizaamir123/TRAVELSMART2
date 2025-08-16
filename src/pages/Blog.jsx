import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../App.css'
import HeaderCarousel from '../components/Hearder-carousel'
import Navbar from '../components/Navbar'
import BlogSection from '../components/Blogsection';
import Footer from '../components/Footer';

function Blogpage() {

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
    <BlogSection/><br />
    <Footer/>
    </>
  )
}

export default Blogpage
