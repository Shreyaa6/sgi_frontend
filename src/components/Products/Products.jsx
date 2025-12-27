import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Seeds Collection',
      price: '₹299.00',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80',
      tag: 'NEW',
      discount: null
    },
    {
      id: 2,
      name: 'Organic Fertilizer - 5kg',
      price: '₹360.00',
      originalPrice: '₹450.00',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80',
      tag: 'NEW',
      discount: '-20%'
    },
    {
      id: 3,
      name: 'Eco-Friendly Pesticides',
      price: '₹380.00',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80',
      tag: null,
      discount: null
    },
    {
      id: 4,
      name: 'Nursery Plants Pack',
      price: '₹550.00',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80',
      tag: 'NEW',
      discount: null
    },
    {
      id: 5,
      name: 'Soil Enrichment Kit',
      price: '₹320.00',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80',
      tag: null,
      discount: null
    },
    {
      id: 6,
      name: 'Water Efficiency Tools',
      price: '₹680.00',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80',
      tag: null,
      discount: null
    }
  ];

  return (
    <section className="products">
      <div className="products-container">
        <h2 className="products-title">Our Products</h2>
        <div className="products-carousel-wrapper">
          <div className="products-carousel">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <h3 className="product-name">{product.name.toUpperCase()}</h3>
                <p className="product-price">
                  {product.originalPrice && (
                    <span className="product-original-price">{product.originalPrice}</span>
                  )}
                  <span className="product-current-price">{product.price}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="view-all-products">
          <a href="#products" className="view-all-link">
            <span>View all products</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 10L15 10M10 5L15 10L10 15"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;

