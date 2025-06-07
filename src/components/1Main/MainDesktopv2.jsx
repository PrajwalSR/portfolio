import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import './MainDesktopv2.css';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Marquee from "react-fast-marquee";



const MainDesktopV2 = () => {
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
        
        <Box
        sx={{
            backgroundColor: '#000', // black background
            minHeight: '100vh',      // full screen height
            width: '100%',           // full width of screen
            }}
        >
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

        <Container
        maxWidth={false}
        sx={{
            paddingTop: '80px',
            minHeight: '100vh',
            maxWidth: '1700px',
        }}
        >

            <Grid container spacing={3} id="about">

                {/* Left Column → Photo */}
                <Grid item size={4.8}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                        height: '100%',
                        padding: '0px', // optional, gives breathing room
                        }}
                        className="animate-slide"
                    >
                        <img
                        src={`${process.env.PUBLIC_URL}/praj2.jpg`} // your actual image path here
                        alt="Prajwal"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '20px', // optional, gives rounded corners
                            boxShadow: '0 2px 6px #ffffff', // optional, nice subtle shadow
                        }}
                        />
                    </Box>
                </Grid>

                {/* Right Column → Content (Top + Bottom) */}
                <Grid item size={7}>
                    <Grid
                        container
                        direction="row"
                        sx={{
                        height: '100%',      // full height of Right column
                        display: 'flex',     // required to use flexGrow / flexBasis
                        }}
                        spacing={1}
                    >

                        {/* Row 1 → About */}
                        <Grid
                        item
                        sx={{
                            flex: '0 0 100%', // flex-grow: 0, flex-shrink: 0, flex-basis: 100% → fixed to 100%
                            backgroundColor: '#000',
                            textAlign: 'left',  // Force left alignment (good practice)
                            paddingLeft: '24px',    // Optional: add padding so text doesn't touch edges
                        }}
                        className="animate-slide"
                        >
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                color: '#fff', 
                                fontWeight: 500, 
                                marginTop: '30px'
                                }}
                            >
                                Prajwal
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                color: '#fff',
                                fontWeight: 500,
                                borderBottom: '2px solid #fff',
                                display: 'inline-block',
                                // paddingBottom: '5px',
                                marginBottom: '16px',
                                }}
                            >
                                Shanthakumari Rangaswamy
                            </Typography>

                            <Typography 
                            variant="body1" 
                            sx={{ 
                            color: '#ccc', 
                            lineHeight: 1.6 
                            }}>
                                A certified Product and Project Manager with a strong foundation in engineering and business strategy. 
                                Proficient in both Agile and Waterfall methodologies, with expertise in stakeholder
                                alignment and end-to-end product execution — delivering user-centric solutions that drive measurable business impact.
                            </Typography>
                        </Grid>


                        {/* Row 2 → Passion */}
                        <Grid
                        item
                        sx={{
                            flex: '0 0 100%',  
                            backgroundColor: '#000',
                            textAlign: 'left',  // Force left alignment (good practice)
                            paddingLeft: '24px',    // Optional: add padding so text doesn't touch edges
                        }}
                        className="animate-slide"
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                color: '#fff',
                                fontWeight: 500,
                                borderBottom: '2px solid #fff',
                                display: 'inline-block',
                                // paddingBottom: '5px',
                                marginBottom: '16px',
                                }}
                            >
                                My Passion
                            </Typography>

                            <Typography variant="body1" sx={{ color: '#ccc', lineHeight: 1.6 }}>
                            Building purposeful digital products that simplify complexity, empower users, and accelerate business growth. 
                            Leading initiatives that not only address today’s challenges but also create a foundation for scalable, sustainable impact.
                            </Typography>
                        </Grid>

                        {/* Row 3 → Certifications */}
                        <Grid
                        item
                        sx={{
                            flex: '0 0 100%',  
                            backgroundColor: '#000',
                            alignContent: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                        }}
                        >
                            <Marquee
                                gradient={true}   // no gradient fade
                                pauseOnHover={true}  // pause when user hovers
                                speed={20}      // adjust speed (default is 25)
                                gradientColor='black'
                                gradientWidth={200}
                                autoFill={true}
                                delay={4}
                            >   
                                <a href="https://bcert.me/sbazwjbwi" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/CSM.png`} alt="CSM" className="cert-badge" /></a>

                                <a href="https://www.credly.com/badges/15791ca4-e76a-4dd1-ad68-cc102b6c9b41/public_url" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/PMB.png`} alt="PMB" className="cert-badge" /></a>

                                <a href="https://www.credly.com/badges/ac59f6d5-a8b7-4d43-987c-84dc32dfe9a2/public_url" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/PMP.png`} alt="PMP" className="cert-badge" /></a>

                                <a href="https://www.credly.com/badges/55edd5c3-8d2e-4e31-b484-81558e9fb221/public_url" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/AIPM.png`} alt="AIPM" className="cert-badge" /></a>

                                <a href="https://www.credly.com/badges/36667242-769b-42e9-8712-e6aafa4fdd4d" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/PL.png`} alt="PL" className="cert-badge" /></a>

                                <a href="https://bcert.me/shatrhcge" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/CSPO.png`} alt="CSPO" className="cert-badge" /></a>
                                
                            </Marquee>
                            
                        </Grid>
                        
                        {/* Row 4 → Contact Icons */}
                        <Grid
                        item
                        sx={{
                            flex: '0 0 100%',  
                            backgroundColor: '#000',
                        }}
                        >
                            <div className="contact-icons">
                                <a href="mailto:pshantha@usc.edu" target="_blank" rel="noopener noreferrer">
                                    <FaEnvelope />
                                </a>
                                <a href="https://www.linkedin.com/in/prajwalsr1997/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </Grid>
                        
                    
                    </Grid>
                </Grid>

            </Grid>
        </Container>
        </Box>
    );
};

export default MainDesktopV2;