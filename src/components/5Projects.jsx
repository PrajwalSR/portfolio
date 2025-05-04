import React from 'react';
import './5Projects.css';

const projects = [
  {
    title: 'Technical Project Manager | EuclidAI',
    tags: ['Agile', 'Predictive Analytics', 'Team Leadership'],
    points: [
      'Led cross-functional AI teams building scalable products. Coordinated sprint planning and stakeholder updates.',
      'Managed predictive analytics initiatives across departments. Coordinated sprint planning and stakeholder updates.',
    ],
  },
  {
    title: 'Consultant | Accenture',
    tags: ['SAP MM', 'Process Optimization', 'Procurement'],
    points: [
      'Led cross-functional AI teams building scalable products. Coordinated sprint planning and stakeholder updates.',
      'Managed predictive analytics initiatives across departments. Coordinated sprint planning and stakeholder updates.',
    ],
  },
  {
    title: 'Technical Project Manager | EuclidAI',
    tags: ['Agile', 'Predictive Analytics', 'Team Leadership'],
    points: [
      'Led cross-functional AI teams building scalable products. Coordinated sprint planning and stakeholder updates.',
      'Managed predictive analytics initiatives across departments. Coordinated sprint planning and stakeholder updates.',
    ],
  },
  {
    title: 'Consultant | Accenture',
    tags: ['SAP MM', 'Process Optimization', 'Procurement'],
    points: [
      'Led cross-functional AI teams building scalable products. Coordinated sprint planning and stakeholder updates.',
      'Managed predictive analytics initiatives across departments. Coordinated sprint planning and stakeholder updates.',
    ],
  },
  {
    title: 'Technical Project Manager | EuclidAI',
    tags: ['Agile', 'Predictive Analytics', 'Team Leadership'],
    points: [
      'Led cross-functional AI teams building scalable products. Coordinated sprint planning and stakeholder updates.',
      'Managed predictive analytics initiatives across departments. Coordinated sprint planning and stakeholder updates.',
    ],
  },
  {
    title: 'Consultant | Accenture',
    tags: ['SAP MM', 'Process Optimization', 'Procurement'],
    points: [
      'Led cross-functional AI teams building scalable products. Coordinated sprint planning and stakeholder updates.',
      'Managed predictive analytics initiatives across departments. Coordinated sprint planning and stakeholder updates.',
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((exp, index) => (
          <div className="projects-card" key={index}>
            <h3>{exp.title}</h3>
            <div className="projects-tags">
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

export default Projects;