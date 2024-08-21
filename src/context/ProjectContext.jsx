// src/context/ProjectContext.js
import React, { createContext, useState, useEffect } from "react";
import {
  getProjects,
  createProject,
  updateProject,
  getProjectById,
  addTaskToProject,
} from "../services/apiService";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const [error, setError] = useState(null); // Error handling

//   useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        // console.log(response);

        setProjects(response || []); // Ensure we handle empty arrays or bad responses
      } catch (error) {
        setError("Failed to fetch projects"); // Handle errors
      } finally {
        setLoading(false); // Stop loading when done
      }
    };
//     fetchProjects();
//   }, []);

  const addProject = async (project) => {
    try {
      const newProject = await createProject(project);
      setProjects([...projects, newProject]);
    } catch (error) {
      setError("Failed to add project");
    }
  };

  const updateExistingProject = async (projectId, updatedProject) => {
    try {
      const updated = await updateProject(projectId, updatedProject);
      setProjects(
        projects.map((proj) => (proj.id === projectId ? updated : proj))
      );
    } catch (error) {
      setError("Failed to update project");
    }
  };

  const getProjectDetails = async (projectId) => {
    try {
      const project = await getProjectById(projectId);
      setSelectedProject(project);
    } catch (error) {
      setError("Failed to fetch project details");
    }
  };

  const addTask = async (projectId, task) => {
    const updatedProject = await addTaskToProject(projectId, task);
    setSelectedProject(updatedProject); // Update the selectedProject state to trigger a re-render
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        fetchProjects,
        addProject,
        selectedProject,
        getProjectDetails,
        updateExistingProject,
        addTask,
        loading,
        error,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
