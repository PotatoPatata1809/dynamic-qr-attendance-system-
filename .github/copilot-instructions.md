# AI Coding Agent Instructions

Welcome to the `qr-generator` project! This document provides essential guidelines for AI coding agents to be productive in this codebase. Please follow these instructions to ensure consistency and alignment with the project's architecture and conventions.

## Project Overview

This is a React-based web application built using Vite. The project is structured to provide a minimal setup for React development with hot module replacement (HMR) and ESLint rules. The primary goal of this application is to generate QR codes.

### Key Directories and Files

- **`src/`**: Contains the main application code.
  - `App.jsx`: The root component of the application.
  - `main.jsx`: The entry point for the React application.
  - `assets/`: Stores static assets like images and icons.
- **`public/`**: Contains static files served directly by Vite.
- **`vite.config.js`**: Configuration file for Vite.
- **`eslint.config.js`**: ESLint configuration file.

## Developer Workflows

### Building and Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build the application for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

### Linting

Run ESLint to check for code quality issues:
```bash
npm run lint
```

## Project-Specific Conventions

- **React Components**: Use functional components with hooks.
- **Styling**: CSS files are used for styling. Follow the structure in `App.css` and `index.css`.
- **Assets**: Store all static assets in the `src/assets/` directory.

## External Dependencies

- **React**: Core library for building the user interface.
- **Vite**: Build tool for fast development and optimized production builds.
- **ESLint**: Linter for maintaining code quality.

## Integration Points

- The application uses Vite's plugin system for React support. Refer to `vite.config.js` for plugin configurations.

## Example Patterns

### Adding a New Component

1. Create a new `.jsx` file in the `src/` directory.
2. Use the following template:
   ```jsx
   import React from 'react';

   const ComponentName = () => {
       return (
           <div>
               {/* Component content */}
           </div>
       );
   };

   export default ComponentName;
   ```
3. Import and use the component in `App.jsx` or other relevant files.

### Adding a Static Asset

1. Place the asset in the `src/assets/` directory.
2. Import the asset in your component:
   ```jsx
   import myImage from './assets/my-image.png';

   const Example = () => <img src={myImage} alt="Example" />;
   ```

---

Feel free to update this document as the project evolves. If any section is unclear or incomplete, please provide feedback for improvement.