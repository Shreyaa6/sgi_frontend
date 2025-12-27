import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import logoImage from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const { getCartCount, wishlist } = useCart();
  const cartCount = getCartCount();
  const wishlistCount = wishlist.length;

  return (
    <nav className="navbar">
      {/* Top Row */}
      <div className="navbar-top">
        <div className="navbar-top-left">
          <Link to="/gallery" className="top-link">Gallery</Link>
          <Link to="/careers" className="top-link">Careers</Link>
          <Link to="/blogs" className="top-link">Blogs</Link>
        </div>
        <div className="navbar-top-right">
          <Link to="/search" className="icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </Link>
          <button className="icon-btn" aria-label="User Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <Link to="/wishlist" className="icon-btn wishlist-btn-nav" aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {wishlistCount > 0 && (
              <span className="cart-badge">{wishlistCount}</span>
            )}
          </Link>
          <Link to="/cart" className="icon-btn cart-btn-nav" aria-label="Shopping Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>

      {/* Separator */}
      <div className="navbar-separator"></div>

      {/* Bottom Row */}
      <div className="navbar-bottom">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logoImage} alt="Sri Gangotri Industries Logo" className="logo-image" />
          </Link>
          <Link to="/" className="logo-text-link">
            <span className="logo-text">Sri Gangotri Industries</span>
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">HOME</Link>
          <span className="nav-separator">|</span>
          <Link to="/products" className="nav-link">PRODUCTS</Link>
          <span className="nav-separator">|</span>
          <Link to="/about" className="nav-link">ABOUT US</Link>
          <span className="nav-separator">|</span>
          <Link to="/contacts" className="nav-link">CONTACTS</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

