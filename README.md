# Corsearch_Homework


# User Dashboard Project

This project is a simple user dashboard that displays a list of users fetched from a REST API, with filtering and sorting capabilities. It is built using **React**, **TypeScript**, and **React Query** for data fetching. The project follows the principles of the [Feature-Sliced Design](https://feature-sliced.design/) architecture.

## Features

- Fetch and display users from a REST API.
- Filter users by name, email, phone, website, and address.
- Sort users by name in ascending or descending order.
- Responsive design with CSS modules and SASS.

## Tech Stack

- **React** with hooks
- **TypeScript** for static typing
- **React Query** for API integration and caching
- **SASS** and **CSS Modules** for styling
- **Feature-Sliced Design** for scalable and maintainable architecture

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**
- **npm** as the package manager

## Getting Started

Follow these steps to get the project running locally:

### 1. Clone the repository

### 2. Install dependencies
1. Install all required dependencies:

   ```bash
    npm install
    ```

### 3. Running the Application
1. To run the application locally, use the following command:
   ```bash
   npm run dev
    ```
This will start the development server, and you can access the application in your browser at http://localhost:5173.   

### 4. File Structure
```
/src
  /app            # Application-level code (providers, initialization)
  /entities       # Business entities (e.g., User)
  /shared         # Reusable components (e.g., Input)
  /widgets        # UI components (e.g., UserDashboard)
```

