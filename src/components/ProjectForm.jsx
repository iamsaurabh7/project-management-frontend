import React, { useState, useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import {
  Box,
  Container,
  Heading,
  Input,
  Select,
  Button,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const ProjectForm = () => {
  const { addProject } = useContext(ProjectContext);
  const [project, setProject] = useState({
    name: "",
    description: "",
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(project);
    setProject({ name: "", description: "", status: "" });
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Box
        p={6}
        bg="white"
        borderRadius="md"
        boxShadow="md"
        maxW="md"
        mx="auto"
      >
        <Heading as="h2" size="lg" mb={4} textAlign="center">
          Create New Project
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Project Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter project name"
                value={project.name}
                onChange={(e) =>
                  setProject({ ...project, name: e.target.value })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                placeholder="Enter project description"
                value={project.description}
                onChange={(e) =>
                  setProject({ ...project, description: e.target.value })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Status</FormLabel>
              <Select
                placeholder="Select status"
                value={project.status}
                onChange={(e) =>
                  setProject({ ...project, status: e.target.value })
                }
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </Select>
            </FormControl>
            <Button type="submit" colorScheme="teal" width="full">
              Create Project
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default ProjectForm;
