import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Blogs.css';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Sustainable Farming Practices for Modern Agriculture',
      excerpt: 'Discover how sustainable farming practices can improve crop yields while protecting the environment for future generations.',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop&q=80',
      date: 'October 15, 2024',
      category: 'Farming Tips'
    },
    {
      id: 2,
      title: 'Choosing the Right Fertilizer for Your Crops',
      excerpt: 'A comprehensive guide to understanding different types of fertilizers and selecting the best one for your specific crop needs.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80',
      date: 'October 10, 2024',
      category: 'Product Guide'
    },
    {
      id: 3,
      title: 'Organic Pest Control Methods',
      excerpt: 'Learn about eco-friendly pest control methods that protect your crops without harming the environment or beneficial insects.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&q=80',
      date: 'October 5, 2024',
      category: 'Organic Farming'
    },
    {
      id: 4,
      title: 'Seasonal Planting Guide for Indian Farmers',
      excerpt: 'A month-by-month guide to help Indian farmers plan their planting schedule for optimal crop yields throughout the year.',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop&q=80',
      date: 'September 28, 2024',
      category: 'Farming Tips'
    },
    {
      id: 5,
      title: 'Water Management in Agriculture',
      excerpt: 'Essential strategies for efficient water usage in farming to ensure sustainable crop production and resource conservation.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&q=80',
      date: 'September 20, 2024',
      category: 'Sustainability'
    },
    {
      id: 6,
      title: 'Understanding Seed Quality and Selection',
      excerpt: 'How to identify high-quality seeds and make informed decisions when selecting seeds for your farming operations.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80',
      date: 'September 15, 2024',
      category: 'Product Guide'
    }
  ];

  return (
    <div className="blogs-page">
      <Navbar />
      <div className="blogs-page-content">
        <div className="blogs-hero">
          <h1 className="blogs-page-title">Blogs</h1>
          <p className="blogs-page-subtitle">Insights, tips, and stories from the agricultural world</p>
        </div>

        <div className="blogs-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <Link to={`/blog/${post.id}`} className="blog-card-link">
                <div className="blog-image-container">
                  <img src={post.image} alt={post.title} className="blog-image" />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-date">{post.date}</div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-read-more">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 10L15 10M10 5L15 10L10 15"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;

