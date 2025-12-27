import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ title, image, description }) => {
  return (
    <div className="category-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default CategoryCard;

