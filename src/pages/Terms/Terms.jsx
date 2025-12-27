import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <Navbar />
      <div className="terms-page-content">
        <div className="terms-hero">
          <h1 className="terms-page-title">Terms & Conditions</h1>
          <p className="terms-page-subtitle">Last updated: October 2024</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2 className="terms-section-title">1. Acceptance of Terms</h2>
            <p className="terms-text">
              By accessing and using the Sri Gangotri Industries website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">2. Use License</h2>
            <p className="terms-text">
              Permission is granted to temporarily download one copy of the materials on Sri Gangotri Industries' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="terms-list">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">3. Product Information</h2>
            <p className="terms-text">
              We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content on this site is accurate, complete, reliable, current, or error-free. If a product offered by us is not as described, your sole remedy is to return it in unused condition.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">4. Pricing and Payment</h2>
            <p className="terms-text">
              All prices are listed in Indian Rupees (₹) and are subject to change without notice. We reserve the right to refuse or cancel any order placed for a product listed at an incorrect price. Payment must be received before order processing and shipment.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">5. Shipping and Delivery</h2>
            <p className="terms-text">
              We will make every effort to deliver products within the estimated delivery time. However, delivery times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or circumstances beyond our control.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">6. Returns and Refunds</h2>
            <p className="terms-text">
              Returns are accepted within 7 days of delivery for unopened products in their original packaging. Refunds will be processed within 10-14 business days after we receive and inspect the returned product. Shipping costs for returns are the responsibility of the customer unless the product is defective or incorrect.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">7. Limitation of Liability</h2>
            <p className="terms-text">
              In no event shall Sri Gangotri Industries or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">8. Revisions</h2>
            <p className="terms-text">
              Sri Gangotri Industries may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">9. Contact Information</h2>
            <p className="terms-text">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="terms-contact">
              Email: info@srigangotri.com<br />
              Phone: +91 123 456 7890<br />
              Address: 123 Agricultural Street, Farm District, City 123456, India
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;

