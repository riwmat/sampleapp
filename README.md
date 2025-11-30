# sampleapp

A simple Node.js sample application with GitHub Codespaces support.

## Features

- Express.js web server
- REST API endpoints
- Health check endpoint
- GitHub Codespaces devcontainer configuration

## Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the application:
   ```bash
   npm start
   ```

3. The server will start on `http://localhost:3000`

### Using GitHub Codespaces

This repository includes a devcontainer configuration for GitHub Codespaces, providing a consistent development environment with:
- Node.js 20
- Pre-installed dependencies
- VS Code extensions (ESLint, Prettier)
- Auto-forwarding of port 3000

Simply open this repository in GitHub Codespaces, and the environment will be automatically configured.

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/greeting?name=YourName` - Greeting endpoint

## Example Usage

```bash
# Get welcome message
curl http://localhost:3000/

# Health check
curl http://localhost:3000/health

# Custom greeting
curl http://localhost:3000/api/greeting?name=Developer
```
