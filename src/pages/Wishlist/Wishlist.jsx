import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, isInWishlist, toggleWishlist } = useCart();
  const [addedToCartIds, setAddedToCartIds] = useState(new Set());
  const timeoutRefs = useRef({});

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(timeoutRefs.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <Navbar />
        <div className="wishlist-content">
          <div className="wishlist-empty">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <h2>Your Wishlist is Empty</h2>
            <p>Start adding products you love to your wishlist!</p>
            <Link to="/products" className="browse-products-btn">
              Browse Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <Navbar />
      <div className="wishlist-content">
        <div className="wishlist-header">
          <h1 className="wishlist-title">My Wishlist</h1>
          <p className="wishlist-subtitle">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}</p>
        </div>

        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-item">
              <Link to={`/product/${product.id}`} className="wishlist-item-link">
                <div className="wishlist-item-image-container">
                  <img src={product.image} alt={product.name} className="wishlist-item-image" />
                </div>
                <div className="wishlist-item-separator"></div>
                <div className="wishlist-item-details">
                  <h3 className="wishlist-item-name">{product.name}</h3>
                  <p className="wishlist-item-price">{product.price}</p>
                </div>
              </Link>
              <div className="wishlist-item-actions">
                <button
                  className="wishlist-remove-btn"
                  onClick={() => removeFromWishlist(product.id)}
                  aria-label="Remove from wishlist"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
                <button
                  className="wishlist-add-to-cart-btn"
                  onClick={() => {
                    // Clear any existing timeout for this product
                    if (timeoutRefs.current[product.id]) {
                      clearTimeout(timeoutRefs.current[product.id]);
                    }
                    
                    addToCart(product);
                    
                    // Add to the set of added products
                    setAddedToCartIds(prev => new Set([...prev, product.id]));
                    
                    // Set timeout to remove from set after 3 seconds
                    timeoutRefs.current[product.id] = setTimeout(() => {
                      setAddedToCartIds(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(product.id);
                        return newSet;
                      });
                      delete timeoutRefs.current[product.id];
                    }, 3000);
                  }}
                  aria-label="Add to cart"
                >
                  {addedToCartIds.has(product.id) ? (
                    <span className="added-to-cart-message">Added to Cart!</span>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;

