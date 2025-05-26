// 3Experience.jsx
import React, { useEffect, useRef } from 'react';
import './3Experience.css';

const experiences = [
  {
    title: 'Product Manager | EuclidAI',
    tags: ['Product Strategy', 'User Experience Design', 'IoT Devices', 'Cloud Integration (AWS)', 'Product Operations'],
    points: [
      'Directed product operations and lifecycle planning for IoT smart home devices; improved launch cadence and release quality by optimizing sprint workflows, stakeholder alignment, and backlog health.',
      'Collaborated with engineers and cloud architects to integrate AWS services, reducing system latency by 40% and enhancing device reliability across mobile and embedded platforms.',
      'Conducted feedback loops with 500+ users using Figma prototypes and analytics dashboards; boosted engagement by 35% and cut support requests by 45% through targeted UX enhancements.',
      'Prioritized roadmap features based on telemetry insights and competitor benchmarks; delivered phased releases focused on reliability, user needs, and time-to-value.',
      'Presented KPI dashboards and success metrics to cross-functional leadership, driving strategic alignment and accelerating customer-focused iteration.',
    ],
  },
  {
    title: 'Application Development | Accenture',
    tags: ['Client Support', 'System Enhancement', 'Workflow Optimization', 'Deployment Readiness', 'SAP MM'],
    points: [
      'Resolved 200+ SAP MM and logistics support tickets through structured triaging, cross-functional collaboration, and SLA tracking to maintain system performance.',
      'Coordinated enhancements across supply chain workflows by translating stakeholder requirements into deliverables backed by technical feasibility and timeline commitments.',
      'Delivered end-user training, platform walkthroughs, and testing documentation that improved usability and reduced repeat support by 40%.',
      'Led integration and functional testing cycles to ensure deployment readiness, minimize incident rates, and improve post-launch system stability.',
      'Created support dashboards, SOPs, and process documentation to streamline operations across distributed global teams.',
    ],
  },
  {
    title: 'Academic Leadership and Program Support | USC',
    tags: ['Product Analytics', 'MVP Coaching & Mentorship','Stakeholder Coordination', 'Curriculum Design'],
    points: [
      'Delivered lectures and workshops on agile product development, user segmentation, A/B testing, and persona-based UX design using Figma and real dashboard data.',
      'Designed AI-powered teaching modules for feedback loops, testing simulations, and ideation workflows; improved student learning outcomes and engagement by 22%.',
      'Partnered with academic and IT teams to lead onboarding for 1,400+ students; achieved 98% system access completion and improved orientation efficiency through real-time updates and logistics coordination.',
      'Mentored 150+ students on MVP development and GTM planning; supported analytics-based decision making in product, marketing, and EdTech simulations.',
      'Streamlined communication across 40+ stakeholders through scheduling alignment, documentation, and KPI tracking; reduced post-onboarding inquiries by 30%.',
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
