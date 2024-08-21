import React, { useState, useContext, useEffect } from "react";
import { ProjectContext } from "../context/ProjectContext";
import {
  Box,
  Heading,
  Input,
  Button,
  List,
  ListItem,
  Text,
  VStack,
  Container
} from "@chakra-ui/react";

const ProjectTasks = () => {
  const { selectedProject, addTask } = useContext(ProjectContext);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (selectedProject) {
      setTasks(selectedProject.tasks || []);
    }
  }, [selectedProject]);

  const handleAddTask = async () => {
    if (task.trim()) {
      await addTask(selectedProject.id, task);
      setTask(""); // Clear input field
    }
  };

  useEffect(() => {
    if (selectedProject) {
      setTasks(selectedProject.tasks || []);
    }
  }, [selectedProject.tasks]);

  return (
    <Container maxW="container.lg" p={4}>
      <Box bg="blackAlpha.100" p={4} borderRadius="md" boxShadow="md">
        <VStack spacing={4} align="stretch">
          <Heading as="h3" size="md" color="blackAlpha.700">
            Tasks
          </Heading>
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            size="lg"
          />
          <Button onClick={handleAddTask} colorScheme="teal" size="lg">
            Add Task
          </Button>
          {tasks && tasks.length > 0 ? (
            <List spacing={3}>
              {tasks.map((t, index) => (
                <ListItem key={index} p={3} bg="white" borderRadius="md" boxShadow="sm">
                  {t}
                </ListItem>
              ))}
            </List>
          ) : (
            <Text>No tasks available for this project.</Text>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default ProjectTasks;
