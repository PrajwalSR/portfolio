import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Marquee from "react-fast-marquee"; // For the Badge Animation

import './MainDesktop.css';



const MainDesktopV2 = () => {

    // For the Navigation Bar State
    const [activeSection, setActiveSection] = useState('');
    useEffect(() => {
        const handleScroll = () => {
          const sections = ['about', 'education', 'experience', 'volunteering', 'projects'];
          const scrollY = window.scrollY;
    
          sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop - 100; // Offset for Sticky Navbar Height
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

    // This is the Main Return
    return (
        
        // This is a Box Container will help Desktops and Laptop Screens to maintain Background Color
        <Box
        sx={{
            backgroundColor: '#000', // Black Background
            minHeight: '100vh',      // Full Screen Height
            width: '100%',           // Full Width of Screen
            }}
        >

        {/* Navigation Bar */}
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

        {/*  This Main Container includes the Main Content excludes Navigarion Bar*/}
        <Container
        maxWidth={false} // maxWidth = lg didn't suit my design layout till laptop screens
        sx={{
            paddingTop: '80px',
            minHeight: '100vh',
            maxWidth: '1700px', // This will help in Desktop and Laptop Screens
        }}
        >

            {/* Create 2 Columns on the Main Container*/}
            <Grid container spacing={3} id="about">

                {/* First Column (Left Column → Image) */}
                <Grid item size={4.6}>

                    {/* A Box Component to Add the Image */}
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                        height: '100%',
                        padding: '0px', // Optional, gives Breathing Room
                        }}
                        className="animate-slide" // Simple Slide Up animation on First Loading or Reloading
                    >
                        <img
                        src={`${process.env.PUBLIC_URL}/praj2.jpg`} // Your Image Path
                        alt="Prajwal"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '20px', // Optional, gives Rounded Corners
                            boxShadow: '0 2px 6px #ffffff', // Optional, nice subtle shadow
                        }}
                        />
                    </Box>
                </Grid>

                {/* Second Column (Right Column → Content) with 4 Rows */}

                {/* Column Grid */}
                <Grid item size={7}>

                    {/* Column Grid is further Divided into Row Grids*/}
                    <Grid
                        container
                        direction="row"
                        sx={{
                        height: '100%', // Full height of Right column
                        }}
                        spacing={1}
                    >

                        {/* Row 1 → About */}
                        <Grid
                        item
                        sx={{
                            flex: '0 0 100%', // Keep Rows to 100% Width
                            backgroundColor: '#000',
                            textAlign: 'left',  // Force Text to be Left Alignment 
                            paddingLeft: '24px',    // Optional: Add Padding so Text Doesn't Touch Edges
                        }}
                        className="animate-slide2" // Simple Slide Up animation on First Loading or Reloading
                        >
                            <Typography 
                                sx={{ 
                                color: '#fff', 
                                fontWeight: 600, 
                                marginTop: '60px',
                                marginBottom: '-12px',
                                fontSize: '40px',
                                fontFamily: 'Poppins, sans-serif'
                                }}
                            >
                                Prajwal
                            </Typography>

                            <Typography
                                sx={{
                                color: '#fee',
                                fontWeight: 500,
                                borderBottom: '2px solid #ff6b00',
                                display: 'inline-block',
                                marginBottom: '12px',
                                fontSize: '32px',
                                fontFamily: 'Poppins, sans-serif'
                                }}
                            >
                                Shanthakumari Rangaswamy
                            </Typography>

                            <Typography 
                            sx={{ 
                            color: '#fee', 
                            lineHeight: 1.6,
                            fontSize: '19px',
                            fontFamily: 'Poppins, sans-serif',
                            }}>
                                A certified Product and Project Manager with a strong foundation in engineering and business strategy. 
                                Proficient in both Agile and Waterfall methodologies, with expertise in stakeholder
                                alignment and end-to-end product execution — delivering user-centric solutions that drive measurable business impact.
                            </Typography>
                        </Grid>


                        {/* Row 2 → My Passion */}
                        <Grid
                        item
                        sx={{
                            flex: '0 0 100%',  // Keep rows to 100% width
                            backgroundColor: '#000',
                            textAlign: 'left',  // Force Text to be Left Alignment 
                            paddingLeft: '24px',    // Optional: add padding so text doesn't touch edges
                        }}
                        className="animate-slide2" // Simple Slide Up animation on First Loading or Reloading
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                color: '#fff',
                                fontWeight: 600,
                                borderBottom: '2px solid #ff6b00',
                                display: 'inline-block',
                                marginBottom: '12px',
                                fontSize: '38px',
                                fontFamily: 'Poppins, sans-serif'
                                }}
                            >
                                My Passion
                            </Typography>

                            <Typography 
                                variant="body1" 
                                sx={{ 
                                color: '#fee', 
                                lineHeight: 1.6,
                                marginBottom: 0,
                                paddingBottom: 0,
                                fontSize: '19px',
                                fontFamily: 'Poppins, sans-serif' 
                                }}>
                                    Building purposeful digital products that simplify complexity, empower users, and accelerate business growth. 
                                    Leading initiatives that not only address today’s challenges but also create a foundation for scalable, sustainable impact.
                            </Typography>
                        </Grid>

                        {/* Row 3 → Badges */}
                        <Grid
                        item
                        sx={{
                            // Added Pading (left and Right) by 2.5 and reduce total width of the row to 95% to give a subtle animation in the centre
                            paddingLeft:5, 
                            paddingRight:5, 
                            flex: '0 0 100%',  
                            backgroundColor: '#000',
                            display: 'flex', 
                            alignContent: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                        }}
                        className="animate-slide2" // Simple Slide Up animation on First Loading or Reloading
                        >
                            <Marquee
                                gradient={true}   // Gradient Fade
                                gradientColor='black' // Gradient Color
                                gradientWidth={250} // Gradient Width

                                pauseOnHover={true}  // Pause when User Hovers
                                speed={30}      // Adjust Speed
                                
                                delay={3} // Delay for 3s Before Starting animation
                            >   
                                <a href="https://www.credly.com/badges/15791ca4-e76a-4dd1-ad68-cc102b6c9b41/public_url" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/PMB.png`} alt="PMB" className="cert-badge" /></a>

                                <a href="https://bcert.me/sbazwjbwi" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/CSM.png`} alt="CSM" className="cert-badge" /></a>

                                <a href="https://www.credly.com/badges/55edd5c3-8d2e-4e31-b484-81558e9fb221/public_url" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/AIPM.png`} alt="AIPM" className="cert-badge" /></a>

                                <a href="https://www.credly.com/badges/ac59f6d5-a8b7-4d43-987c-84dc32dfe9a2/public_url" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/PMP.png`} alt="PMP" className="cert-badge" /></a>

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
                        className="animate-slide2" // Simple Slide Up animation on First Loading or Reloading
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