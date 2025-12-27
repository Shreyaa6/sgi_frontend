import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState('500g');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  // Reset state when product ID changes
  useEffect(() => {
    setSelectedSize('500g');
    setSelectedImageIndex(0);
    setShowAddedMessage(false);
    window.scrollTo(0, 0);
  }, [id]);

  // Mock product data - in real app, fetch by id
  const product = {
    id: parseInt(id),
    name: 'Premium Seeds Collection',
    category: 'Seeds',
    price: '₹299',
    originalPrice: '₹399',
    discount: 25,
    size: '500g',
    images: [
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=600&fit=crop&q=80',
    ],
    description: 'Premium quality seeds collection featuring a variety of high-yield, disease-resistant varieties. Perfect for farmers looking to maximize their harvest. These seeds are carefully selected and tested to ensure optimal germination rates and robust plant growth. Ideal for both commercial farming and home gardening.',
    rating: 4.5,
    reviewCount: 50,
    sizes: ['250g', '500g', '1kg', '2kg'],
    shipping: {
      discount: 'Disc 50%',
      package: 'Regular Package',
      deliveryTime: '3-4 Working Days',
      estimatedArrival: '10-12 October 2024'
    }
  };

  const relatedProducts = [
    { id: 2, name: 'Organic Fertilizer - 5kg', price: '₹450', originalPrice: '₹550', discount: 18, rating: 4.0, image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80' },
    { id: 3, name: 'Eco-Friendly Pesticides', price: '₹380', rating: 3.5, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80' },
    { id: 4, name: 'Nursery Plants Pack', price: '₹550', rating: 4.5, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80' },
    { id: 5, name: 'Soil Enrichment Kit', price: '₹320', originalPrice: '₹420', discount: 24, rating: 5.0, image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80' },
  ];

  const reviews = [
    {
      name: 'Alex Mathio',
      date: '13 Oct 2024',
      rating: 5,
      text: "Sri Gangotri Industries' dedication to quality and sustainable farming practices resonates strongly with today's farmers, positioning the brand as a responsible choice in the agricultural world.",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80'
    }
  ];

  const starDistribution = {
    5: 35,
    4: 12,
    3: 2,
    2: 1,
    1: 0
  };

  return (
    <div className="product-detail-page">
      <Navbar />
      <div className="product-detail-content">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <button className="back-button" onClick={() => navigate(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Product details</span>
        </div>

        {/* Main Product Section */}
        <div className="product-main-section">
          {/* Left Column - Images */}
          <div className="product-images">
            <div className="main-image-container">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="main-product-image"
              />
            </div>
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail-btn ${selectedImageIndex === index ? 'active' : ''}`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="product-details">
            <div className="product-category-tag">{product.category}</div>
            <h1 className="product-detail-name">{product.name}</h1>
            <div className="product-detail-price">
              <span className="current-price">{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">{product.originalPrice}</span>
                  <span className="discount-badge">-{product.discount}%</span>
                </>
              )}
            </div>
            <div className="delivery-info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Order in 02:30:25 to get next day delivery</span>
            </div>

            <div className="size-selection">
              <h3 className="size-title">Select Size</h3>
              <div className="size-buttons">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={() => {
                  addToCart(product, selectedSize);
                  setShowAddedMessage(true);
                  setTimeout(() => setShowAddedMessage(false), 2000);
                }}
              >
                {showAddedMessage ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              <button 
                className={`wishlist-btn-detail ${isInWishlist(product.id) ? 'active' : ''}`}
                aria-label="Add to wishlist"
                onClick={() => toggleWishlist(product)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>

            <div className="product-info-sections">
              <details className="info-section" open>
                <summary className="info-summary">
                  <span>Description & Fit</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6"/>
                  </svg>
                </summary>
                <p className="info-content">{product.description}</p>
              </details>

              <details className="info-section">
                <summary className="info-summary">
                  <span>Shipping</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6"/>
                  </svg>
                </summary>
                <div className="info-content">
                  <div className="shipping-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                    <span>Discount: {product.shipping.discount}</span>
                  </div>
                  <div className="shipping-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                    <span>Package: {product.shipping.package}</span>
                  </div>
                  <div className="shipping-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Delivery Time: {product.shipping.deliveryTime}</span>
                  </div>
                  <div className="shipping-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Estimation Arrive: {product.shipping.estimatedArrival}</span>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Rating & Reviews Section */}
        <div className="reviews-section">
          <div className="reviews-left">
            <div className="overall-rating">
              <div className="rating-score">{product.rating}</div>
              <div className="rating-total">/5</div>
            </div>
            <div className="review-count">({product.reviewCount} New Reviews)</div>
            <div className="star-distribution">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = starDistribution[stars];
                const percentage = (count / product.reviewCount) * 100;
                return (
                  <div key={stars} className="star-row">
                    <span className="star-label">{stars} stars</span>
                    <div className="star-bar-container">
                      <div className="star-bar" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <span className="star-count">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="reviews-right">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
                  <div className="review-info">
                    <div className="reviewer-name">{review.name}</div>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < review.rating ? "#FFD700" : "none"} stroke="#FFD700" strokeWidth="2">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>
                    <div className="review-date">{review.date}</div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
            <button className="view-more-reviews">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* You might also like Section */}
        <div className="related-products-section">
          <h2 className="related-products-title">You might also like</h2>
          <div className="related-products-grid">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="related-product-card">
                <div className="related-product-image-container">
                  <img src={item.image} alt={item.name} className="related-product-image" />
                </div>
                <div className="related-product-separator"></div>
                <div className="related-product-details">
                  <h3 className="related-product-name">{item.name}</h3>
                  <div className="related-product-rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < Math.floor(item.rating) ? "#FFD700" : "none"} stroke="#FFD700" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                    <span className="rating-value">{item.rating}/5</span>
                  </div>
                  <div className="related-product-price">
                    <span className="current-price">{item.price}</span>
                    {item.originalPrice && (
                      <>
                        <span className="original-price">{item.originalPrice}</span>
                        <span className="discount-badge">-{item.discount}%</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;

