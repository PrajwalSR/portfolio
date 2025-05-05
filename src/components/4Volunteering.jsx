import React, { useEffect, useRef } from 'react';
import './4Volunteering.css';

const volunteering = [
  {
    title: 'Center Mentor | USC K-12 STEM Center',
    subtitle: 'Summer Research Coordination – High School Outreach',
    points: ['Supported 100+ high school students in a summer research program by coordinating logistics, assisting PhD mentors, and facilitating on-campus engagement alongside 7 fellow mentors.',
    ]
  },
  {
    title: 'Student Volunteer | USC Volunteer Center',
    subtitle: 'Community Engagement & Outreach',
    points: ['Contributed to civic programs including food bank support, beach cleanups, and educational events—helping deliver operational success and social impact.',
    ]
    
  },
];

const Volunteering = () => {
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
    <section className="volunteering-section" id="volunteering">
      <h2>Volunteering</h2>
      <div className="volunteering-grid">
      {volunteering.map((exp, index) => (
          <div
            key={index}
            className="volunteering-card"
            ref={el => (cardsRef.current[index] = el)}
          >
            <h3 className='title'>{exp.title}</h3>
            <p><em>{exp.subtitle}</em></p>
            <p>{exp.points}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteering;
