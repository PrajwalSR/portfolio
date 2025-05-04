import React from 'react';
import './4Volunteering.css';

const volunteering = [
  {
    title: 'Technical Project Manager | EuclidAI',
    tags: ['Agile', 'Predictive Analytics', 'Team Leadership'],
    points: [
      'Led cross-functional AI teams building scalable products. Coordinated sprint planning and stakeholder updates.',
      'Managed predictive analytics initiatives across departments. Coordinated sprint planning and stakeholder updates.',
      'Coordinated sprint planning and stakeholder updates. Coordinated sprint planning and stakeholder updates.',
      'Built client portfolios and integrated external APIs. Coordinated sprint planning and stakeholder updates.',
    ],
  },
  {
    title: 'Consultant | Accenture',
    tags: ['SAP MM', 'Process Optimization', 'Procurement'],
    points: [
      'Led cross-functional AI teams building scalable products. Coordinated sprint planning and stakeholder updates.',
      'Managed predictive analytics initiatives across departments. Coordinated sprint planning and stakeholder updates.',
      'Coordinated sprint planning and stakeholder updates. Coordinated sprint planning and stakeholder updates.',
      'Built client portfolios and integrated external APIs. Coordinated sprint planning and stakeholder updates.',
    ],
  },
];

const Volunteering = () => {
  return (
    <section className="volunteering-section" id="volunteering">
      <h2>Volunteering</h2>
      <div className="volunteering-grid">
        {volunteering.map((exp, index) => (
          <div className="volunteering-card" key={index}>
            <h3>{exp.title}</h3>
            <div className="volunteering-tags">
              {exp.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteering;