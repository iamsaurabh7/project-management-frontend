import React, { useContext, useEffect } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { Box, Heading, Text, List, ListItem, Button, Spinner, Container, VStack } from "@chakra-ui/react";

const Dashboard = () => {
  const { projects, fetchProjects, loading, error } = useContext(ProjectContext);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (loading) {
    return (
      <Container maxW="container.xl" p={4} centerContent>
        <Spinner size="xl" />
        <Text mt={4}>Loading projects...</Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxW="container.xl" p={4} centerContent>
        <Text color="red.500">{error}</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="lg" mb={4}>
          Project Dashboard
        </Heading>
        {projects.length > 0 ? (
          <List spacing={3}>
            {projects.map((project) => (
              <ListItem key={project.id} bg="white" borderRadius="md" boxShadow="md" p={4}>
                <Button
                  as="a"
                  href={`/projects/${project.id}`}
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  _hover={{ bg: "teal.600", color: "white" }}
                >
                  {project.name}
                </Button>
              </ListItem>
            ))}
          </List>
        ) : (
          <Text>No projects found.</Text>
        )}
      </VStack>
    </Container>
  );
};

export default Dashboard;
