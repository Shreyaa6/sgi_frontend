import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Navbar />
      <div className="about-us-page-content">
        <div className="about-us-hero">
          <h1 className="about-us-page-title">About Us</h1>
          <p className="about-us-page-subtitle">Empowering Farmers, Nurturing Growth</p>
        </div>

        <div className="about-us-main">
          <div className="about-us-image-section">
            <img 
              src="https://i.pinimg.com/736x/b1/e1/d6/b1e1d6ab11108b2ccc570adaeb5e86a1.jpg" 
              alt="About Sri Gangotri Industries" 
              className="about-us-page-image"
            />
          </div>
          <div className="about-us-text-section">
            <h2 className="about-us-section-title">Our Story</h2>
            <p className="about-us-text">
              At Sri Gangotri Industries, we are committed to empowering farmers with high-quality 
              agricultural solutions. With years of experience in the industry, we understand the 
              challenges faced by farmers and provide them with the tools and knowledge needed for 
              successful cultivation.
            </p>
            <p className="about-us-text">
              Our mission is to bridge the gap between traditional farming practices and modern 
              agricultural innovations, ensuring sustainable growth and improved yields for farming 
              communities across the region.
            </p>
            <h2 className="about-us-section-title">Our Mission</h2>
            <p className="about-us-text">
              We understand the challenges farmers face at every stage of cultivation. That's why 
              we offer a wide range of quality fertilizers, seeds, pesticides, and agricultural inputs 
              that help protect crops and improve productivity. Our e-commerce platform is designed 
              to make purchasing farm essentials simple, reliable, and accessible, ensuring farmers 
              get the support they need for successful harvests.
            </p>
            <h2 className="about-us-section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Quality First</h3>
                <p>We source only the finest agricultural products to ensure the best results for farmers.</p>
              </div>
              <div className="value-item">
                <h3>Sustainability</h3>
                <p>We promote eco-friendly farming practices that protect the environment for future generations.</p>
              </div>
              <div className="value-item">
                <h3>Farmer Support</h3>
                <p>We are dedicated to supporting farmers with knowledge, resources, and reliable products.</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>We continuously explore new technologies and methods to improve agricultural outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

