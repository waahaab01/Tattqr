import React from "react";
import feedback from '../../assets/images/feedback.png'
import profile from '../../assets/images/profile.png'
import QR from '../../assets/images/Objects.png'
import "./testtimonial.css";
const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h4 className="testimonial-section-head">What Our Clients Says</h4>
      <p className="testimonial-section-text">
        Lorem Ipsum has been the industry standard <br />
        dummy <span> text ever since </span> the when an unknown printer It was
        popularised
      </p>
      <div className="testimonial-section-cards">
        <div className="testimonial-section-card-items">
          <div className="testimonial-card-head">
            <div className="testimonial-card-image"><img src={profile} alt="QR"/></div>
            <div className="testimonial-card-text">
              <h6>jhon mickel</h6>
              <img src={feedback} alt="" />
            </div>
          </div>
          <p className="testimonial-card-body-text">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.          </p>
        </div>
        <div className="testimonial-section-card-items">
          <div className="testimonial-card-head">
            <div className="testimonial-card-image"><img src={profile} alt="QR"/></div>
            <div className="testimonial-card-text">
              <h6>jhon mickel</h6>
              <img src={feedback} alt="" />
            </div>
          </div>
          <p className="testimonial-card-body-text">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.          </p>
        </div>
        <div className="testimonial-section-card-items">
          <div className="testimonial-card-head">
            <div className="testimonial-card-image"><img src={profile} alt="QR"/></div>
            <div className="testimonial-card-text">
              <h6>jhon mickel</h6>
              <img src={feedback} alt="" />
            </div>
          </div>
          <p className="testimonial-card-body-text">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonial;
