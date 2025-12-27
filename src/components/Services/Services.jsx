import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Soil Enrichment', number: '01' },
    { title: 'Eco-Friendly', number: '04' },
    { title: 'Water Efficiency', number: '03' },
    { title: 'Organic Farming', number: '02' }
  ];

  return (
    <section className="services">
      <div className="services-container">
        {/* Left Panel */}
        <div className="services-left">
          <div className="services-label">01 OUR SERVICES THAT CULTIVATE SUSTAINABLE GROWTH</div>
          
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-number">{service.number}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="services-images">
            <div className="service-image-small">
              <img 
                src="https://i.pinimg.com/736x/78/b6/d6/78b6d65b3a2c801ac4f3df1d4d7de3b8.jpg" 
                alt="Agricultural field" 
              />
            </div>
            <div className="service-image-small">
              <img 
                src="https://i.pinimg.com/736x/a2/18/0a/a2180a4f1dbe7220ef976e3ee260f7a2.jpg" 
                alt="Nursery plants" 
              />
            </div>
          </div>

          <p className="services-description">
            Our approach blends traditional wisdom with modern techniques, empowering farmers with eco-conscious solutions that protect the land for future generations.
          </p>
        </div>

        {/* Right Panel - Large Image */}
        <div className="services-right">
          <div className="services-main-image">
            <img 
              src="https://i.pinimg.com/736x/ec/80/53/ec80537417e275f7daa8e3a6713c64aa.jpg" 
              alt="Farm crops being watered" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

