import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <Navbar />
      <div className="privacy-page-content">
        <div className="privacy-hero">
          <h1 className="privacy-page-title">Privacy Policy</h1>
          <p className="privacy-page-subtitle">Last updated: October 2024</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2 className="privacy-section-title">1. Information We Collect</h2>
            <p className="privacy-text">
              We collect information that you provide directly to us, including when you create an account, make a purchase, contact us, or subscribe to our newsletter. This may include:
            </p>
            <ul className="privacy-list">
              <li>Name, email address, phone number, and shipping address</li>
              <li>Payment information (processed securely through our payment partners)</li>
              <li>Order history and preferences</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">2. How We Use Your Information</h2>
            <p className="privacy-text">
              We use the information we collect to:
            </p>
            <ul className="privacy-list">
              <li>Process and fulfill your orders</li>
              <li>Send you order confirmations and updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">3. Information Sharing</h2>
            <p className="privacy-text">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="privacy-list">
              <li>Service providers who assist us in operating our website and conducting our business</li>
              <li>Shipping carriers to deliver your orders</li>
              <li>Payment processors to handle transactions</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">4. Data Security</h2>
            <p className="privacy-text">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">5. Cookies and Tracking</h2>
            <p className="privacy-text">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">6. Your Rights</h2>
            <p className="privacy-text">
              You have the right to:
            </p>
            <ul className="privacy-list">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">7. Children's Privacy</h2>
            <p className="privacy-text">
              Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">8. Changes to This Policy</h2>
            <p className="privacy-text">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">9. Contact Us</h2>
            <p className="privacy-text">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="privacy-contact">
              Email: privacy@srigangotri.com<br />
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

export default Privacy;

