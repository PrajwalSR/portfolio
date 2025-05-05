// 2Education.jsx
import React from 'react';
import './2Education.css';
import { motion } from 'framer-motion';

const educationData = [
  {
    number: '01.',
    title: 'Projet Management Professional (PMP) Certification',
    title2: 'Project Management Institute (PMI)',
    description:
      'Developed advanced skills in defining project scope, managing risks, and aligning business objectives - strengthening delivery success across cross-functional teams.',
  },
  {
    number: '02.',
    title: 'M.S. in Engineering Management (MEM)',
    title2: 'University of Southern California (USC)',
    description:
      'Blended technical depth with business strategy through coursework in New Product Development, Engineering Project Management, and Technology Strategy - preparing for leadership in tech-driven organizations.',
  },
  {
    number: '03.',
    title: 'Product Owner (CSPO) & Scrum Master (CSM)',
    title2: 'Scrum Alliance (SA)',
    description:
      'Specialized in Agile delivery by mastering backlog refinement, sprint execution, and servant leadership—enabling continuous feature delivery and customer-centric development.',
  },
  {
    number: '04.',
    title: 'B.S. in Electronics & Communication Engineering',
    title2: 'Dayananda Sagar College of Engineering (DSCE)',
    description:
      'Engineered digital systems, communication protocols, and microcontroller applications—building a strong technical foundation for system - level innovation.',
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
            <div className="edu-underline-coursename" />
            <h3 className="edu-heading2">{edu.title2}</h3>
            <p className="edu-text">{edu.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Education;