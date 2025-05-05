//5Projects.jsx
import React, { useEffect, useRef } from 'react';
import './5Projects.css';

const projects = [
  {
    title: 'Urban Park Ease',
    subtitle: 'Strategic Management of Technology – USC Viterbi',
    tags: ['Market Research', 'Product Strategy', 'IoT'],
    points: [
      'Conducted market research and stakeholder analysis to identify urban parking inefficiencies and validate opportunity.',
      'Developed a phased roadmap integrating IoT sensors, AI-driven forecasting, and user-centric design inspired by Google Maps.',
      'Built a commercialization plan with financial forecasts, targeting $21M revenue and measurable reductions in traffic congestion.',
    ],
  },
  {
    title: 'Meta New Product Introduction',
    subtitle: 'New Product Development – USC Marshall',
    tags: ['User Research', 'Mixed Reality', 'GTM Strategy'],
    points: [
      'Led product discovery and user research to conceptualize MetaSport, a fitness-focused MR wearable for Meta’s ecosystem.',
      'Defined product features, pricing models, and conducted market segmentation across gamers, educators, and fitness users.',
      'Created a launch strategy with pre-release campaigns, channel partnerships, and a 3-year P&L forecast.',
    ],
  },
  {
    title: 'USC Housing App',
    subtitle: 'Engineering Project Management – USC Marshall',
    tags: ['UX Design', 'API Integration', 'Risk Management'],
    points: [
      'Planned a unified student housing app including roommate matching, housing reviews, and a secure marketplace.',
      'Outlined system architecture with Zillow API integration, secure authentication, and in-app messaging.',
      'Defined risk management, stakeholder training, and post-launch support plans to ensure scalable adoption.',
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
    </section>
  );
};

export default Projects;
