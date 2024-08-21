import { Navigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;
// console.log(BASE_URL);

// src/services/apiService.js
export const getProjects = async () => {
  const token = localStorage.getItem("token"); // Fetch the token from localStorage

  const response = await fetch(`${BASE_URL}/api/projects/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    },
  });

  if (!response.ok) {
    if (response.status === 403) {
      // Handle 403 error, redirect to login
      localStorage.removeItem("token"); // Optionally, remove the expired token
      Navigate("/login"); // Assuming you have a login route
    }
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }

  const data = await response.json();
  // console.log(data)
  return data; // Ensure response format is handled correctly
};

export const getProjectById = async (id) => {
  const token = localStorage.getItem("token"); // Fetch the token from localStorage
  const response = await fetch(`${BASE_URL}/api/projects/projects/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    },
  });
  if (!response.ok) {
    if (response.status === 403) {
      // Handle 403 error, redirect to login
      localStorage.removeItem("token"); // Optionally, remove the expired token
      Navigate("/login"); // Assuming you have a login route
    }
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }

  const data = await response.json();
  // console.log(data)
  return data; // Ensure response format is handled correctly
};

export const createProject = async (project) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/api/projects/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) {
    if (response.status === 403) {
      // Handle 403 error, redirect to login
      localStorage.removeItem("token"); // Optionally, remove the expired token
      Navigate("/login"); // Assuming you have a login route
    }
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }

  const data = await response.json();
  // console.log(data)
  return data; // Ensure response format is handled correctly
};

export const updateProject = async (id, project) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/api/projects/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) {
    if (response.status === 403) {
      // Handle 403 error, redirect to login
      localStorage.removeItem("token"); // Optionally, remove the expired token
      Navigate("/login"); // Assuming you have a login route
    }
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }

  const data = await response.json();
  // console.log(data)
  return data; // Ensure response format is handled correctly
};

export const addTaskToProject = async (projectId, task) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${BASE_URL}/api/projects/projects/${projectId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ task }),
    }
  );
  if (!response.ok) {
    if (response.status === 403) {
      // Handle 403 error, redirect to login
      localStorage.removeItem("token"); // Optionally, remove the expired token
      Navigate("/login"); // Assuming you have a login route
    }
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }

  const data = await response.json();
  // console.log(data)
  return data; // Ensure response format is handled correctly
};
