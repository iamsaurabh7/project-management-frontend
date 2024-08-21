# Project Management Frontend

## Overview

This is the frontend part of the **Project Management** application, developed using **ReactJS** and **Chakra UI**. The application integrates with Firebase for authentication and is designed to provide a seamless user experience with responsive design and efficient UI components. The backend is deployed on AWS, and the frontend is deployed on Netlify.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Configuration](#configuration)
- [Routes](#routes)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Users can sign up and sign in using Firebase Authentication. Tokens are stored in localStorage and used for routing protected routes.
- **Project Management**: Users can view and manage projects.
- **Responsive Design**: The UI is designed to be responsive and accessible on both mobile and desktop devices.

## Technologies Used

- **ReactJS**: For building the user interface.
- **Chakra UI**: For component styling and UI design.
- **Firebase**: For user authentication and token management.
- **Netlify**: For frontend deployment.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
   REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
   REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
   REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
   REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
   REACT_APP_BASE_URL=<http://localhost:8080>
   ```

4. **Start the Development Server**

   ```bash
   npm start
   ```

## Configuration

- **Firebase Authentication**: Handles user authentication and token management.
- **Chakra UI**: Used for UI components and styling, ensuring a responsive and accessible design.

## Routes

### Public Routes

- **Home Page**: `/`

  - Displays the main dashboard with an overview of projects.

- **Sign In Page**: `/signin`

  - Allows users to sign in with their credentials. The authentication token is stored in `localStorage`.

- **Sign Up Page**: `/signup`
  - Allows new users to create an account.

### Protected Routes

- **Project Dashboard**: `/projects`

  - Displays a list of projects. Accessible only to authenticated users.

- **Project Details**: `/projects/:id`
  - Shows detailed information about a specific project and allows users to update project details and add tasks. Accessible only to authenticated users.

## Deployment

- **Frontend**: Deployed on [Netlify](https://www.netlify.com/). For deployment, follow these steps:

  1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).
  2. Connect your repository to Netlify and deploy your site.

- **Backend**: Deployed on AWS. Ensure that the backend server URL is correctly set in your environment variables.

## Contributing

We welcome contributions to this project. Please submit a pull request or open an issue if you have suggestions or improvements.
