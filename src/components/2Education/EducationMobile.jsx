import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const EducationMobile = () => {
  const items = [
    {
      title: '01. PMP® Certification',
      description: 'Mastered structured project delivery, risk management, and stakeholder alignment.'
    },
    {
      title: '02. M.S. in Engineering Management',
      description: 'Combined business strategy with technical systems thinking.'
    },
    {
      title: '03. B.E. in Electronics and Communication',
      description: 'Built a foundation in systems, problem solving, and engineering rigor.'
    },
    {
      title: '04. CSPO & CSM',
      description: 'Learned Agile product ownership, Scrum facilitation, and iterative delivery.'
    },
  ];

  return (
    <Box id="education" sx={{ bgcolor: '#121212dd', color: 'white', pt: 4, pb: 4, px: 2 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Education
      </Typography>
      <Typography variant="subtitle2" align="center" gutterBottom>
        Academic Achievements
      </Typography>

      {items.map((item, index) => (
        <Card
          key={index}
          sx={{
            bgcolor: '#1b1b1b',
            color: 'white',
            mb: 3,
            boxShadow: 'none',
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              {item.title}
            </Typography>
            <Typography variant="body2" mt={1}>
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default EducationMobile;