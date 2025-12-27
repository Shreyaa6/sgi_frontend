import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=600&fit=crop&q=80',
  ];

  return (
    <div className="gallery-page">
      <Navbar />
      <div className="gallery-page-content">
        <div className="gallery-hero">
          <h1 className="gallery-page-title">Gallery</h1>
          <p className="gallery-page-subtitle">Explore our agricultural journey</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery image ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

