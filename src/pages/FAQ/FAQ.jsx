import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What products do you offer?',
      answer: 'We offer a wide range of agricultural products including seeds, fertilizers, pesticides, nursery plants, tools & equipment, and various agricultural inputs to support farmers in their cultivation needs.'
    },
    {
      question: 'How can I place an order?',
      answer: 'You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. Our platform is designed to make purchasing farm essentials simple and accessible.'
    },
    {
      question: 'What are your shipping options?',
      answer: 'We offer regular package delivery with an estimated delivery time of 3-4 working days. Shipping costs and options will be calculated at checkout based on your location.'
    },
    {
      question: 'Do you offer discounts?',
      answer: 'Yes, we frequently offer discounts on various products. Check our website regularly for special offers and promotions. Some products may have up to 50% discount.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 7 days of delivery for unopened products in their original packaging. Please contact our customer service for return authorization.'
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order status on our website or through the shipping carrier.'
    },
    {
      question: 'Are your products organic?',
      answer: 'We offer both organic and conventional products. Each product listing clearly indicates whether it is organic certified. Look for the organic label on product pages.'
    },
    {
      question: 'Can I get advice on which products to use?',
      answer: 'Yes, our team of agricultural experts is available to provide guidance. You can contact us through our contact page or call our customer service number for personalized recommendations.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we ship within India. For international shipping inquiries, please contact our customer service team to discuss available options.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team via phone at +91 123 456 7890, email at support@srigangotri.com, or through the contact form on our website. We are available Monday-Friday, 9 AM - 6 PM.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <Navbar />
      <div className="faq-page-content">
        <div className="faq-hero">
          <h1 className="faq-page-title">Frequently Asked Questions</h1>
          <p className="faq-page-subtitle">Find answers to common questions</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={openIndex === index ? 'rotated' : ''}
                >
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h2 className="faq-contact-title">Still have questions?</h2>
          <p className="faq-contact-text">Can't find the answer you're looking for? Please contact our friendly team.</p>
          <a href="/contacts" className="faq-contact-btn">Contact Us</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;

