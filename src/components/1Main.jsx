import React from 'react';
import './1Main.css';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Prajwal</div>
        <ul className="nav-links">
          <li><a href="#vision">Vision</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#volunteering">Volunteering</a></li>
        </ul>
      </nav>

      <section className="hero-section" id="vision">
        <div className="hero-left animate-slide">
          <img src="/praj.jpg" alt="Prajwal" className="hero-photo" />
        </div>
        <div className="hero-right animate-slide">
          <h1 className="hero-intro-title">Prajwal<br />Shanthakumari Rangaswamy</h1>
          <p className="hero-intro-text">
            Empowering organizations through effective project delivery, stakeholder alignment, and strategic execution. 
            With expertise in Agile, cross-functional collaboration, and user-first design, I drive results that matter.
          </p>
          <div className="certifications">
            <img src="/pmp.png" alt="PMP" className="cert-badge" />
            <img src="/cspo.png" alt="CSPO" className="cert-badge" />
            <img src="/csm.webp" alt="CSM" className="cert-badge" />
            <img src="/pmb.png" alt="Atlassian" className="cert-badge" />
          </div>
        </div>

        <div className="contact-icons">
          <a href="mailto:pshantha@usc.edu" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/prajwalsr1997/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;