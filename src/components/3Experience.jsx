// 3Experience.jsx
import React, { useEffect, useRef } from 'react';
import './3Experience.css';

const experiences = [
  {
    title: 'Technical Project Manager | EuclidAI',
    tags: ['Agile', 'Predictive Analytics', 'Team Leadership'],
    points: [
      'Led cross-functional AI teams building scalable products.',
      'Managed predictive analytics initiatives across departments.',
      'Coordinated sprint planning and stakeholder updates.',
    ],
  },
  {
    title: 'Consultant | Accenture',
    tags: ['SAP MM', 'Process Optimization', 'Procurement'],
    points: [
      'Delivered SAP solutions to streamline procurement workflows.',
      'Improved operational efficiency for enterprise clients.',
      'Managed project documentation and stakeholder communication.',
    ],
  },
  {
    title: 'Product Intern | USC Marshall',
    tags: ['User-Centered Design', 'Automation', 'HTML/CSS'],
    points: [
      'Built student-facing tools with intuitive interfaces.',
      'Introduced automated workflows to reduce support load.',
    ],
  },
  {
    title: 'Freelance Developer',
    tags: ['Web Dev', 'Third-party APIs', 'SEO'],
    points: [
      'Built client portfolios and integrated external APIs.',
      'Improved UX and SEO for startups and small businesses.',
    ],
  },
];

const Experience = () => {
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
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-card"
            ref={el => (cardsRef.current[index] = el)}
          >
            <h3>{exp.title}</h3>
            <div className="experience-tags">
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

export default Experience;
