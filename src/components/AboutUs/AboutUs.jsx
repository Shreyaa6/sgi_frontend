import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="about-us-image">
          <img 
            src="https://i.pinimg.com/736x/b1/e1/d6/b1e1d6ab11108b2ccc570adaeb5e86a1.jpg" 
            alt="About Sri Gangotri Industries" 
          />
        </div>
        <div className="about-us-content">
          <h2 className="about-us-title">About Us</h2>
          <p className="about-us-description">
            At Sri Gangotri Industries, we are committed to empowering farmers with high-quality 
            agricultural solutions. With years of experience in the industry, we understand the 
            challenges faced by farmers and provide them with the tools and knowledge needed for 
            successful cultivation. Our mission is to bridge the gap between traditional farming 
            practices and modern agricultural innovations, ensuring sustainable growth and improved 
            yields for farming communities across the region.
          </p>
          <a href="#about" className="read-more-link">
            <span>Read more</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 10L15 10M10 5L15 10L10 15"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

