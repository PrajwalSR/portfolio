//5Projects.jsx
import React, { useEffect, useRef } from 'react';
import './5Projects.css';

const projects = [
  {
    title: 'Urban Park Ease',
    subtitle: 'Strategic Management of Technology – USC Viterbi',
    tags: ['Market Research', 'Product Strategy', 'IoT Devices', 'Smart Cities', 'Scalable Adoption'],
    points: [
      'Conducted stakeholder interviews and market analysis to identify urban parking inefficiencies and user behavior gaps in congested cities.',
	    'Designed a roadmap integrating IoT sensors, predictive analytics, and UX flows modeled after Google Maps.',
	    'Created a financial forecast and commercialization plan targeting $21M revenue and 15% improvement in city traffic flow KPIs.',
    ],
  },
  {
    title: 'Meta New Product Introduction',
    subtitle: 'New Product Development – USC Marshall',
    tags: ['Product Discovery', 'P&L Forecasting', 'User Research', 'Mixed Reality', 'GTM Strategy'],
    points: [
      'Led discovery and qualitative research to conceptualize MetaSport, an MR wearable for fitness, tailored to Meta’s platform ecosystem.',
      'Conducted user segmentation and defined pricing models across gym-goers, educators, and healthcare segments.',
      'Built a GTM plan with pre-launch campaigns, B2B channel strategies, and a 3-year revenue forecast to support leadership buy-in.',
    ],
  },
  {
    title: 'USC Housing App',
    subtitle: 'Engineering Project Management – USC Marshall',
    tags: ['UX Design', 'Risk Management', 'System Architecture', 'API Integration', 'Project Management'],
    points: [
      'Spearheaded a full-stack housing solution for USC students: roommate matching, reviews, and peer-to-peer listings.',
      'Designed system architecture with Zillow API, secure auth, and in-app chat; implemented Agile-based release planning.',
      'Created a risk mitigation framework including stakeholder training and UAT testing for scalable rollout post MVP.',
    ],
  },
];

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 150); // stagger delay
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((exp, index) => (
          <div
            key={index}
            className="projects-card"
            ref={el => (cardsRef.current[index] = el)}
          >
            <h3>{exp.title}</h3>
            <div className="projects-tags">
              {exp.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            <ul>
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="template-link">
        Want to use this portfolio template? 👉 {" "}
        <a
          href="https://github.com/PrajwalSR/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use my public repository to clone this project
        </a>
      </div>

    </section>  
  );
};

export default Projects;
