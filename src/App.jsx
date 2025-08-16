import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Components
import Navbar from './components/Navbar';
import HeaderCarousel from './components/Hearder-carousel';
import About from './components/Aboutsection';
import Services from './components/Servicessection';
import BlogSection from './components/Blogsection';
import TeamSection from './components/Teamsection';
import Testimonial from './components/Testimonialsection';
import FAQ from './components/FAQsection';
import Footer from './components/Footer';

// Pages
import TripPlanPage from './pages/Tripplan';
import Aboutus from './pages/About';
import Servicespage from './pages/Services';
import Contact from './pages/Contact';
import Blogpage from './pages/Blog';
import Testimonialpage from './pages/Testimonial';
import FAQpage from './pages/FAQ';
import Teampage from './pages/Team';
import Login from './pages/Login'; // route version
import Servicesectionnew from "./components/Servicesectionnew";
import Servicedetailes from "./components/Servicedetailes"

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Home Page
  const HomePage = () => (
    <>
      <Navbar />
      <HeaderCarousel />
      <About />
      <Services />
      <BlogSection />
      <TeamSection />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trip-plan" element={<TripPlanPage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/testimonial" element={<Testimonialpage />} />
        <Route path="/faq" element={<FAQpage />} />
        <Route path="/login" element={<Login />} /> {/* Page version */}
                <Route path="/Servicesectionnew" element={<Servicesectionnew />} />

        {/* Service Details Page */}
        <Route path="/service/:id" element={<Servicedetailes />} />
      </Routes>
    </>
  );
}

export default App;
