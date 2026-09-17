# React + Vite

## CI/CD

This project uses GitHub Actions for continuous integration and deployment.

### CI Pipeline

The CI pipeline runs automatically when:

- A pull request is created or updated.
- Code is pushed to the main branch.

The pipeline performs:

1. Install dependencies using npm ci
2. Run linting using npm run lint
3. Build the React application using npm run build

### Local Setup

Install the project dependencies:

```bash
npm ci