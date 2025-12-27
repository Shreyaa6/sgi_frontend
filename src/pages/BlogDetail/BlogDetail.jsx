import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();

  // Mock blog data - in real app, fetch by id
  const blog = {
    id: parseInt(id),
    title: 'Sustainable Farming Practices for Modern Agriculture',
    date: 'October 15, 2024',
    category: 'Farming Tips',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&h=600&fit=crop&q=80',
    content: `
      <p>Discover how sustainable farming practices can improve crop yields while protecting the environment for future generations. Sustainable agriculture is not just a trend—it's a necessity for ensuring food security and environmental health.</p>
      
      <h3>Understanding Sustainable Farming</h3>
      <p>Sustainable farming involves agricultural practices that meet current food needs without compromising the ability of future generations to meet their own needs. This approach focuses on three main pillars: environmental health, economic profitability, and social equity.</p>
      
      <h3>Key Practices</h3>
      <p>Some essential sustainable farming practices include:</p>
      <ul>
        <li>Crop rotation to maintain soil health</li>
        <li>Organic fertilization methods</li>
        <li>Water conservation techniques</li>
        <li>Integrated pest management</li>
        <li>Biodiversity preservation</li>
      </ul>
      
      <h3>Benefits for Farmers</h3>
      <p>Adopting sustainable practices can lead to:</p>
      <ul>
        <li>Reduced input costs over time</li>
        <li>Improved soil fertility</li>
        <li>Better crop yields</li>
        <li>Increased resilience to climate change</li>
        <li>Access to premium markets</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>If you're interested in transitioning to sustainable farming, start small. Choose one or two practices to implement first, such as composting or cover cropping. As you gain experience and see results, you can gradually adopt more sustainable methods.</p>
      
      <p>Remember, sustainable farming is a journey, not a destination. Every step you take toward more sustainable practices makes a difference for your farm, your community, and the planet.</p>
    `
  };

  return (
    <div className="blog-detail-page">
      <Navbar />
      <div className="blog-detail-page-content">
        <div className="blog-detail-breadcrumbs">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/blogs">Blogs</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Article</span>
        </div>

        <article className="blog-detail-article">
          <div className="blog-detail-header">
            <span className="blog-detail-category">{blog.category}</span>
            <h1 className="blog-detail-title">{blog.title}</h1>
            <div className="blog-detail-meta">
              <span className="blog-detail-date">{blog.date}</span>
            </div>
          </div>

          <div className="blog-detail-image-container">
            <img src={blog.image} alt={blog.title} className="blog-detail-image" />
          </div>

          <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </article>

        <div className="blog-detail-navigation">
          <Link to="/blogs" className="back-to-blogs-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Blogs
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;

