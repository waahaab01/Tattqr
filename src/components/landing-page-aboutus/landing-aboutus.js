import React from 'react'
import aboutHero from '../../assets/images/about-us-hero.jpg'
import './landing-about.css'

const AboutUs = () => {
    return(
        <div className='about-us-section'>
            <div className='main-section'>
            <h3 className='about-us-heading'>About Us</h3>
            <p className='about-us-content'>Lorem Ipsum has been the industry standard <br/>
            dummy <span> text ever since </span> the when an unknown printer It was popularised</p>
            </div>
            <div className='about-image-section'>
                <div className='about-us-image'>
                    <img src={aboutHero} alt="About-Hero-Image" />
                </div>
                <div className='about-us-image-content'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here', making it look like readable English.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here', making it look like readable English.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs