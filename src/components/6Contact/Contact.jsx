import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">

      <div className="contact-details">
        <div className="contact-item">
          <FaPhone className="icon" />
          <span>+1 310-290-0482</span>
        </div>

        <div className="contact-item">
          <FaEnvelope className="icon" />
          <a href="mailto:pshantha@usc.edu">pshantha@usc.edu</a>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/prajwalsr1997/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;