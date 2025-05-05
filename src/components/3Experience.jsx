// 3Experience.jsx
import React, { useEffect, useRef } from 'react';
import './3Experience.css';

const experiences = [
  {
    title: 'Product Manager | EuclidAI',
    tags: ['Agile', 'Product Strategy', 'Cloud Integration'],
    points: [
      'Led cross-functional teams to launch scalable smart home products across cloud and mobile platforms.',
      'Defined product roadmaps, prioritized backlogs, and facilitated sprint execution to align with GTM goals.',
      'Designed and iterated mobile UI using Figma, incorporating user feedback, accessibility testing, and heatmap insights.',
      'Analyzed usage data and behavioral trends to shape pricing strategy and guide persona-aligned feature development.',
      'Presented product dashboards and MVP pitches to stakeholders, aligning delivery with business and user needs.',
    ],
  },
  {
    title: 'Application Development | Accenture',
    tags: ['SAP MM', 'Client Support', 'System Enhancement'],
    points: [
      'Resolved SAP support issues through structured triaging, cross-functional collaboration, and SLA-focused delivery.',
      'Conducted platform walkthroughs and user training to improve adoption of supply chain and finance systems.',
      'Gathered business requirements and coordinated enhancements based on stakeholder feedback and technical feasibility.',
      'Led functional and integration testing cycles to identify issues and ensure deployment readiness.',
      'Maintained SOPs, updated support documentation, and streamlined knowledge transfer across distributed teams.',
    ],
  },
  {
    title: 'Teaching Assistant | USC Marshall',
    tags: ['Product Analytics', 'A/B Testing', 'Curriculum Design'],
    points: [
      'Delivered lectures on product development, campaign attribution, and user segmentation using real dashboard data.',
      'Built AI-powered simulations for ideation, testing, and persona development to enhance applied learning.',
      'Collaborated with faculty to redesign course flow using analytics insights and modular content rubrics.',
      'Provided mentorship and technical guidance to students building marketing and analytics projects.',
      'Improved student engagement and satisfaction through interactive teaching and real-world product examples.',
    ],
  },
  {
    title: 'Orientation Leader | USC Viterbi',
    tags: ['Stakeholder Coordination', 'Onboarding', 'Presentation Skills'],
    points: [
      'Planned and executed orientation sessions by coordinating with peers, scheduling logistics, and aligning messaging.',
      'Delivered engaging presentations on campus systems, academic processes, and student resources.',
      'Supported new student transition through onboarding workflows, feedback tracking, and personalized support.',
      'Collaborated with 40+ peer leaders to maintain communication flow and update session content in real time.',
      'Streamlined orientation delivery and boosted student readiness through clear communication and session design.',
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
