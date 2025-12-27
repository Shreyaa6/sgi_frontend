import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ShippingReturns.css';

const ShippingReturns = () => {
  return (
    <div className="shipping-returns-page">
      <Navbar />
      <div className="shipping-returns-page-content">
        <div className="shipping-returns-hero">
          <h1 className="shipping-returns-page-title">Shipping & Returns</h1>
          <p className="shipping-returns-page-subtitle">Everything you need to know about delivery and returns</p>
        </div>

        <div className="shipping-returns-content">
          <section className="shipping-returns-section">
            <h2 className="shipping-returns-section-title">Shipping Information</h2>
            
            <div className="shipping-info-item">
              <h3 className="shipping-info-title">Delivery Time</h3>
              <p className="shipping-info-text">
                We typically process and ship orders within 1-2 business days. Standard delivery takes 3-4 working days from the date of shipment. Delivery times may vary based on your location and shipping method selected.
              </p>
            </div>

            <div className="shipping-info-item">
              <h3 className="shipping-info-title">Shipping Costs</h3>
              <p className="shipping-info-text">
                Shipping costs are calculated at checkout based on your delivery address and the weight of your order. We offer free shipping on orders above ₹2000. For orders below this amount, standard shipping charges apply.
              </p>
            </div>

            <div className="shipping-info-item">
              <h3 className="shipping-info-title">Order Tracking</h3>
              <p className="shipping-info-text">
                Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order status on our website or through the shipping carrier's website.
              </p>
            </div>

            <div className="shipping-info-item">
              <h3 className="shipping-info-title">Delivery Areas</h3>
              <p className="shipping-info-text">
                We currently ship throughout India. For international shipping inquiries, please contact our customer service team.
              </p>
            </div>

            <div className="shipping-info-item">
              <h3 className="shipping-info-title">Delivery Issues</h3>
              <p className="shipping-info-text">
                If you experience any issues with delivery, such as damaged packages or missing items, please contact us immediately. We will work with you to resolve the issue promptly.
              </p>
            </div>
          </section>

          <section className="shipping-returns-section">
            <h2 className="shipping-returns-section-title">Returns & Refunds</h2>
            
            <div className="shipping-info-item">
              <h3 className="shipping-info-title">Return Policy</h3>
              <p className="shipping-info-text">
                We accept returns within 7 days of delivery for unopened products in their original packaging. Products must be in the same condition as when you received them, with all original tags and packaging intact.
              </p>
            </div>

            <div className="shipping-info-item">
              <h3 className="shipping-info-title">How to Return</h3>
              <p className="shipping-info-text">
                To initiate a return, please contact our customer service team with your order number. We will provide you with a return authorization and instructions. Return shipping costs are the responsibility of the customer unless the product is defective or incorrect.
              </p>
            </div>

            <div className="shipping-info-item">
              <h3 className="shipping-info-title">Refund Process</h3>
              <p className="shipping-info-text">
                Once we receive and inspect your returned product, we will process your refund within 10-14 business days. Refunds will be issued to the original payment method used for the purchase.
              </p>
            </div>

            <div className="shipping-info-item">
              <h3 className="shipping-info-title">Non-Returnable Items</h3>
              <p className="shipping-info-text">
                The following items cannot be returned:
              </p>
              <ul className="shipping-list">
                <li>Opened or used products</li>
                <li>Products without original packaging</li>
                <li>Perishable items</li>
                <li>Custom or personalized products</li>
              </ul>
            </div>

            <div className="shipping-info-item">
              <h3 className="shipping-info-title">Exchanges</h3>
              <p className="shipping-info-text">
                We currently do not offer direct exchanges. If you need a different size or product, please return the original item and place a new order. We will process your return refund once the item is received.
              </p>
            </div>
          </section>

          <section className="shipping-returns-section">
            <h2 className="shipping-returns-section-title">Contact Us</h2>
            <p className="shipping-info-text">
              If you have any questions about shipping or returns, please don't hesitate to contact us:
            </p>
            <p className="shipping-contact">
              Email: support@srigangotri.com<br />
              Phone: +91 123 456 7890<br />
              Business Hours: Monday-Friday, 9 AM - 6 PM
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingReturns;

