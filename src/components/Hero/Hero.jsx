import React from 'react';
import './Hero.css';

const Hero = () => {
  const image = 'https://i.pinimg.com/1200x/d3/64/91/d36491a34ee31579c229ba444bdf5c27.jpg';

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Section - Image Background */}
        <div className="hero-left">
          <img 
            src={image} 
            alt="Agriculture" 
            className="hero-bg-image active"
          />
        </div>

        {/* Right Section - Content */}
        <div className="hero-right">
          <div className="hero-content">
            <h1 
              className="hero-title" 
              style={{ '--bg-image': `url(${image})` }}
            >
              <span className="title-word">Sri</span>{' '}
              <span className="title-word">Gangotri</span>{' '}
              <span className="title-word">Industries</span>
            </h1>
            <p className="hero-description">
              At Sri Gangotri Industries, we understand the challenges farmers face at every stage of cultivation. 
              That's why we offer a wide range of quality fertilizers, seeds, pesticides, and agricultural inputs 
              that help protect crops and improve productivity. Our e-commerce platform is designed to make purchasing 
              farm essentials simple, reliable, and accessible, ensuring farmers get the support they need for successful harvests.
            </p>
            <div className="read-more-link">
              <a href="#categories">Explore our products</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

