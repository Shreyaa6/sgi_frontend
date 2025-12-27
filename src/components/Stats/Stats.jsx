import React from 'react';
import './Stats.css';

const Stats = () => {
  const statistics = [
    { value: '5000+', label: 'Farmers Connected' },
    { value: '90%', label: 'Yield Improvement' },
    { value: '50+', label: 'Agriculture Experts' },
    { value: '98%', label: 'Positive Impact' }
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-grid">
          {statistics.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="stats-separator"></div>
      </div>
    </section>
  );
};

export default Stats;

