import React from 'react';
import Navbar from '../../components/navbar/navbar';
import MainLandingPage from '../../components/main-landing-page/main-landing-page'
import './landing-page.css';
import AboutUs from '../../components/landing-page-aboutus/landing-aboutus';
import HowItWorks from '../../components/landing-how-it-works/how-it-works';
import Testimonial from '../../components/testimonials/testimonial';
import ContactUs from '../../components/contact-us/contact-us';
import Footer from '../../components/footer/footer';
const LandingPage = () => {
  return (
    <>
    <Navbar />
    <div className='landing-page'>
      <MainLandingPage />
      <AboutUs/>
      <HowItWorks/>
      <Testimonial/>
      <ContactUs/>
    </div>
    <Footer/>
    </>

  );
};  

export default LandingPage;