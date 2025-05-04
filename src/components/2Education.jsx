// 2Education.jsx
import React from 'react';
import './2Education.css';
import { motion } from 'framer-motion';

const educationData = [
  {
    number: '01.',
    title: 'PMP Certification',
    description:
      'Developed advanced project planning, execution, and stakeholder management skills aligned with PMI standards.',
  },
  {
    number: '02.',
    title: 'M.S. in Engineering Management (MEM)',
    description:
      'Gained cross-functional leadership expertise, data-driven decision-making, and strategic thinking across engineering teams.',
  },
  {
    number: '03.',
    title: 'B.S. in Electronics & Communication Engineering',
    description:
      'Built a strong technical foundation in circuits, embedded systems, and communication networks with hands-on project experience.',
  },
  {
    number: '04.',
    title: 'Scrum Product Owner & Scrum Master',
    description:
      'Mastered Agile ceremonies, product backlog grooming, sprint planning, and cross-functional collaboration to drive product value.',
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <motion.h2
        className="edu-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education & Certifications
      </motion.h2>
      <div className="edu-underline" />

      {educationData.map((edu, index) => (
        <motion.div
          className="edu-item"
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="edu-number">{edu.number}</div>
          <div className="edu-details">
            <h3 className="edu-heading">{edu.title}</h3>
            <p className="edu-text">{edu.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Education;