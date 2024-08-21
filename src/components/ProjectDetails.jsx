import React, { useContext, useState, useEffect } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { useParams } from "react-router-dom";
import ProjectTasks from "./ProjectTasks";
import {
  Box,
  Heading,
  Text,
  Select,
  Button,
  Grid,
  Container,
  VStack,
} from "@chakra-ui/react";

const ProjectDetails = () => {
  const { getProjectDetails, selectedProject, updateExistingProject } = useContext(ProjectContext);
  const { projectId } = useParams();
  const [project, setProject] = useState(selectedProject);



  useEffect(() => {
    getProjectDetails(projectId);
  }, [projectId]);

  useEffect(() => {
    if (selectedProject) setProject(selectedProject);
  }, [selectedProject]);

  const handleUpdate = () => {
    updateExistingProject(projectId, project);
  };

  return (
      <Container maxW="container.xl" p={4} mt={6}>
      {project ? (
        <Grid
          templateColumns={{ base: "1fr", md: "2fr 1fr" }} // 1 column on mobile, 2 columns on desktop
          gap={6}
          alignItems="start"
        >
          <Box p={4} bg="blackAlpha.200" borderRadius="md" boxShadow="md">
            <Heading as="h1" size="lg" color="blackAlpha.700" mb={2}>
              {project.name}
            </Heading>
            <Text fontSize="lg" color="blackAlpha.700" mb={4}>
              Status: {project.status}
            </Text>
            <Text fontSize="md" mb={2}>
              Update Status:
            </Text>
            <Select
              id="status"
              value={project.status}
              onChange={(e) => setProject({ ...project, status: e.target.value })}
              mb={4}
            >
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </Select>
            <Button onClick={handleUpdate} colorScheme="teal">
              Update Project
            </Button>
          </Box>

          <Box p={4} bg="blackAlpha.100" borderRadius="md" boxShadow="md">
            <Heading as="h2" size="md" color="blackAlpha.700" mb={4}>
              Project Tasks
            </Heading>
            <ProjectTasks />
          </Box>
        </Grid>
      ) : (
        <Text>Loading...</Text>
      )}
      
    </Container>
  );
};

export default ProjectDetails;
