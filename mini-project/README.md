# Purwadhika Template Project

This is a full-stack monorepo template created for Purwadhika projects. It uses npm workspaces to manage both frontend and backend applications within a single repository.

## Project Structure

The repository is organized into workspaces under the `apps` directory:

- `apps/frontend`: Contains the frontend application.
- `apps/backend`: Contains the backend application (Express.js + TypeScript).

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Use LTS version)
- npm (Comes with Node.js)
- PostgreSQL (for the backend database connection)

## Getting Started

Follow these steps to set up and run the application locally.

### 1. Installation

First, clone the repository and install all dependencies from the root directory. This will install dependencies for both the frontend and backend workspaces.

```bash
npm install
```

### 2. Environment Variables

Create `.env` files for both the frontend and backend applications based on their respective `.env.example` files (if present), or configure your environment variables for database connections, API keys, etc.

For the backend:

```bash
# apps/backend/.env
DATABASE_URL="postgres://username:password@localhost:5432/your_database"
```

### 3. Running the Project Locally

You can run both the frontend and backend simultaneously from the root directory using the `dev` script:

```bash
npm run dev
```

This uses `concurrently` to start both development servers at the same time.

Alternatively, you can run them individually:

- **Frontend only**: `npm run dev:frontend`
- **Backend only**: `npm run dev:backend`

### 4. Building for Production

To create production builds for both applications, run:

```bash
npm run build
```

Or build them individually:

- **Frontend only**: `npm run build:frontend`
- **Backend only**: `npm run build:backend`

## Code Quality & Formatting

This project enforces code formatting using [Prettier](https://prettier.io/) and uses [Husky](https://typicode.github.io/husky/) combined with `lint-staged` to format files automatically before they are committed.

- **Format all files manually**:
  ```bash
  npm run format
  ```

Whenever you run `git commit`, Husky will intercept the action, and `lint-staged` will automatically run Prettier on all staged files, ensuring a consistent code style across the project.
