import React from 'react'
import QR from '../../assets/images/qr.png'
import './how-it-works.css'
import BIGQR from '../../assets/images/Objects.png'


const HowItWorks = () =>{
    return(
        <div className='how-it-works-section'>
            <h3 className='section-heading'>How It Works</h3>
            <p className='section-text'>Lorem Ipsum has been the industry standard <br/>
            dummy <span> text ever since </span> the when an unknown printer It was popularised</p>
            <div className='section-cards'>
                <div className='section-card-items'>
                    <div className="card-head">
                        <div className="card-image">
                            <img src={QR} alt="QR" />
                        </div>
                        <div className="card-text">
                            <h6>Get Your QR Tattoo</h6>
                        </div>
                    </div>
                    <p className='card-body-text'>Lorem Ipsum has been the industry's sjke dum text ever since</p>
                </div>
                <div className='section-card-items'>
                    <div className="card-head">
                        <div className="card-image">
                            <img src={QR} alt="QR" />
                        </div>
                        <div className="card-text">
                            <h6>Get Your QR Tattoo</h6>
                        </div>
                    </div>
                    <p className='card-body-text'>Lorem Ipsum has been the industry's sjke dum text ever since</p>
                </div>
                <div className='section-card-items'>
                    <div className="card-head">
                        <div className="card-image">
                            <img src={QR} alt="QR" />
                        </div>
                        <div className="card-text">
                            <h6>Get Your QR Tattoo</h6>
                        </div>
                    </div>
                    <p className='card-body-text'>Lorem Ipsum has been the industry's sjke dum text ever since</p>
                </div>
                <div className='section-card-items'>
                    <div className="card-head">
                        <div className="card-image">
                            <img src={QR} alt="QR" width='100%' height='auto'/>
                        </div>
                        <div className="card-text">
                            <h6>Get Your QR Tattoo</h6>
                        </div>
                    </div>
                    <p className='card-body-text'>Lorem Ipsum has been the industry's sjke dum text ever since</p>
                </div>
            </div> 

            <div className="section">
        <div className="section-left">
        <h1>Scan Your <span>Tattoo</span> and Get <br/> Quotation Data</h1>
        <button type="submit">Get Tatto</button>
        </div>
        <div className="section-right">
          <img src={BIGQR} alt="big QR" className='small-qr' />
          <img src={BIGQR} alt="small Qr" className='big-qr' />
        </div>
      </div>      
        </div>
    )
}
export default HowItWorks