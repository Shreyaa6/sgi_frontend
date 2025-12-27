import React from 'react';
import './Map.css';

const Map = () => {
  // Convert the Google Maps share link to embed format
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1234567890!2d77.1234567890!3d28.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

  return (
    <section className="map-section">
      <div className="map-container">
        <button className="find-us-button" onClick={() => window.open('https://maps.app.goo.gl/cAk6GE91nhsqYZg97', '_blank')}>
          FIND US
        </button>
        <div className="map-wrapper">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Gangotri Industries Location"
            className="map-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;

