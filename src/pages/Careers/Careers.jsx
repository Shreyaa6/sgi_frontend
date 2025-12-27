import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Careers.css';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Agricultural Sales Representative',
      department: 'Sales',
      location: 'Remote / On-site',
      type: 'Full-time'
    },
    {
      title: 'Product Development Specialist',
      department: 'Research & Development',
      location: 'On-site',
      type: 'Full-time'
    },
    {
      title: 'Customer Support Executive',
      department: 'Customer Service',
      location: 'On-site',
      type: 'Full-time'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'On-site',
      type: 'Full-time'
    }
  ];

  return (
    <div className="careers-page">
      <Navbar />
      <div className="careers-page-content">
        <div className="careers-hero">
          <h1 className="careers-page-title">Careers</h1>
          <p className="careers-page-subtitle">Join our mission to empower farmers</p>
        </div>

        <div className="careers-intro">
          <h2 className="careers-section-title">Why Work With Us?</h2>
          <p className="careers-text">
            At Sri Gangotri Industries, we believe in creating a positive impact on agriculture 
            and farming communities. We're looking for passionate individuals who share our 
            commitment to quality, sustainability, and farmer empowerment.
          </p>
        </div>

        <div className="careers-benefits">
          <h2 className="careers-section-title">Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Competitive Salary</h3>
              <p>We offer competitive compensation packages that reflect your skills and experience.</p>
            </div>
            <div className="benefit-item">
              <h3>Growth Opportunities</h3>
              <p>Continuous learning and career development programs to help you grow professionally.</p>
            </div>
            <div className="benefit-item">
              <h3>Work-Life Balance</h3>
              <p>We value your well-being and offer flexible working arrangements.</p>
            </div>
            <div className="benefit-item">
              <h3>Impactful Work</h3>
              <p>Be part of a team that makes a real difference in the agricultural sector.</p>
            </div>
          </div>
        </div>

        <div className="careers-openings">
          <h2 className="careers-section-title">Open Positions</h2>
          <div className="jobs-list">
            {jobOpenings.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-details">
                  <span className="job-department">{job.department}</span>
                  <span className="job-separator">•</span>
                  <span className="job-location">{job.location}</span>
                </div>
                <button className="job-apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </div>

        <div className="careers-cta">
          <h2 className="careers-section-title">Don't See a Role That Fits?</h2>
          <p className="careers-text">
            We're always looking for talented individuals. Send us your resume and we'll keep 
            you in mind for future opportunities.
          </p>
          <button className="careers-contact-btn">Send Your Resume</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;

