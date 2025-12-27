import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategorySection.css';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: 'Seeds',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=600&fit=crop&q=80',
      description: 'High-quality seeds for all your agricultural needs'
    },
    {
      id: 2,
      title: 'Fertilizers',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=600&fit=crop&q=80',
      description: 'Organic and chemical fertilizers for optimal growth'
    },
    {
      id: 3,
      title: 'Nursery & Plants',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop&q=80',
      description: 'Healthy plants and nursery supplies'
    }
  ];

  return (
    <section id="categories" className="category-section">
      <div className="category-container">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            image={category.image}
            description={category.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

