// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Navbar from './components/Navbar'; // Import the Navbar component
import { ProjectProvider } from './context/ProjectContext';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <ProjectProvider>
      <Router>
        <Navbar /> {/* Include Navbar on every page */}
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
    </ProjectProvider>
  );
};

export default App;
