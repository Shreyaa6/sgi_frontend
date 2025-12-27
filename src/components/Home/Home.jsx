import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Stats from '../Stats/Stats';
import Services from '../Services/Services';
import Products from '../Products/Products';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Products />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;

