import React from 'react';
import hero from '../../assets/images/hero.jpg'
import './main-landing-page.css';

const MainLandingPage = () => {
  return (
    <div className='main-landing-page'>
      <div className='landing-page-hero-image'>
        <img src={hero} alt="hero-image" />
      </div>
      <div className='landing-page-hero-text'>
        <h1 className='hero-heading'>TattQR Code <span>Tattoo</span> Scannable</h1>
        <p className='hero-content'>It is a long established fact that a reader will be distracted by 
        the readable content of a page.</p>
        <button className='hero-button'>Get Tatto</button>
      </div>
    </div>
  );
};

export default MainLandingPage;