import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';
import Dashboard from '../components/Dashboard';
import { Container, Heading, Box, Grid } from '@chakra-ui/react';

const ProjectsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <Container
      maxW={{ base: '96%', md: '80%' }}
      p={4}
      mt={6}
      centerContent
    >
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        Projects Dashboard
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={6}
      >
        <Box p={6} bg="white" borderRadius="md" boxShadow="md">
          <ProjectForm />
        </Box>
        <Box p={6} bg="white" borderRadius="md" boxShadow="md">
          <Dashboard />
        </Box>
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
