import React, { useState, useEffect } from 'react';
import './MainDesktop.css';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Main = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'volunteering', 'projects'];
      const scrollY = window.scrollY;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 100; // offset for sticky navbar height
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial run
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">Prajwal</div>
        <ul className="nav-links">
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
          <li><a href="#volunteering" className={activeSection === 'volunteering' ? 'active' : ''}>Volunteering</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
        </ul>
      </nav>

      <section className="main-section" id="about">
        <div className="main-left animate-slide">
          <img
            src={`${process.env.PUBLIC_URL}/praj.JPG`}
            alt="Prajwal"
            className="main-photo"
          />
        </div>
        <div className="main-right animate-slide">
          <h1 className="main-introline1-title">Prajwal</h1>
          <h1 className="main-introline2-title">Shanthakumari Rangaswamy</h1>
          <p className="main-intro-text">
            A certified Product and Project Manager with a strong foundation in engineering and business strategy. 
            Proficient in both Agile and Waterfall methodologies, with expertise in stakeholder alignment and end-to-end product execution 
            – delivering user-centric solutions that drive measurable business impact.
          </p>
          <h2 className="main-vision-title">My Passion</h2>
          <p className="main-vision-text">
            Building purposeful digital products that simplify complexity, empower users, and accelerate business growth. 
            Leading initiatives that not only address today’s challenges but also create a foundation for scalable, sustainable impact.
          </p>

          <div className="certifications">
            <a href="https://www.credly.com/badges/ac59f6d5-a8b7-4d43-987c-84dc32dfe9a2/public_url" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/PMP.png`} alt="PMP" className="cert-badge" />
            </a>
            <a href="https://bcert.me/shatrhcge" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/CSPO.png`} alt="CSPO" className="cert-badge" />
            </a>
            <a href="https://bcert.me/sbazwjbwi" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/CSM.png`} alt="CSM" className="cert-badge" />
            </a>
            <a href="https://www.credly.com/badges/15791ca4-e76a-4dd1-ad68-cc102b6c9b41/public_url" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/PMB.png`} alt="PMB" className="cert-badge" />
            </a>
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

export default Main;