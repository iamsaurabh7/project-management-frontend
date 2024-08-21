import React, { useContext, useEffect } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails';
import { Box, Heading, Container, VStack } from '@chakra-ui/react';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const { getProjectDetails } = useContext(ProjectContext);

  useEffect(() => {
    getProjectDetails(projectId);
  }, [projectId]);

  return (
    <Container
      maxW={{ base: '96%', md: '80%' }} // 96% width for mobile, 80% for desktop
      p={4}
      mt={6}
    >
      <VStack spacing={6} align="start">
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '3xl' }}
          color="blackAlpha.700" // Primary color
        >
          Project Details
        </Heading>
        <Box
          p={4}
          bg="blackAlpha.200" // Secondary color
          borderRadius="md"
          boxShadow="md"
        >
          <ProjectDetails />
        </Box>
      </VStack>
    </Container>
  );
};

export default ProjectDetailPage;
