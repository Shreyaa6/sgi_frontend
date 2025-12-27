import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <Navbar />
        <div className="cart-page-content">
          <div className="cart-empty">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <h2>Your Cart is Empty</h2>
            <p>Start adding products to your cart!</p>
            <Link to="/products" className="browse-products-btn">
              Browse Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const total = getCartTotal();

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-page-content">
        <div className="cart-header">
          <h1 className="cart-page-title">Shopping Cart</h1>
          <p className="cart-page-subtitle">{cart.length} {cart.length === 1 ? 'item' : 'items'}</p>
        </div>

        <div className="cart-main">
          <div className="cart-items">
            {cart.map((item, index) => {
              const itemPrice = parseFloat(item.price.replace(/[₹,]/g, '')) || 0;
              const itemTotal = itemPrice * item.quantity;
              
              return (
                <div key={`${item.id}-${item.size || 'default'}-${index}`} className="cart-item">
                  <Link to={`/product/${item.id}`} className="cart-item-image-link">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </Link>
                  <div className="cart-item-details">
                    <Link to={`/product/${item.id}`} className="cart-item-name-link">
                      <h3 className="cart-item-name">{item.name}</h3>
                    </Link>
                    {item.size && <p className="cart-item-size">Size: {item.size}</p>}
                    <p className="cart-item-price">₹{itemPrice.toFixed(2)}</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button
                      className="quantity-btn"
                      onClick={() => updateCartQuantity(item.id, item.size, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateCartQuantity(item.id, item.size, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    <p className="cart-item-total-price">₹{itemTotal.toFixed(2)}</p>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id, item.size)}
                    aria-label="Remove item"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              );
            })}
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          <div className="cart-summary">
            <h2 className="cart-summary-title">Order Summary</h2>
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="cart-summary-row">
              <span>Tax</span>
              <span>₹{(total * 0.18).toFixed(2)}</span>
            </div>
            <div className="cart-summary-separator"></div>
            <div className="cart-summary-row total">
              <span>Total</span>
              <span>₹{(total * 1.18).toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
            <Link to="/products" className="continue-shopping-link">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

