# Project Overview

This project is built from two main components:

- **Agent UI Application**: Provides the user interface for interacting with the system.
- **Model Context OProtocol Server**: Handles backend logic and communication using the OProtocol standard, and manages requests to the GraphQL.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Docker** and **Docker Compose**  
  [Install Docker](https://docs.docker.com/get-docker/)  
  [Install Docker Compose](https://docs.docker.com/compose/install/)

- **Node.js** (version 20 or higher)  
  [Install Node.js](https://nodejs.org/)

- **Python** (version 3.12 or higher)  
  [Install Python](https://www.python.org/downloads/)

### Cloning the Repository

Clone this repository to your local machine:

```bash
git clone git@github.com:randudi/on-test.git
```

### Building and Deploying
add OPENAI_API_KEY="" to agent-ui/.env.local
To build and deploy the application using Docker, simply run:

```bash
make build-and-deploy
```

This command will:

1. Build the Docker images for the application and its dependencies.
2. Start all necessary services using Docker Compose.
3. Set up the environment for you to start developing or testing.

> **Note:**  
> The first time you run this command, it may take a few minutes as Docker downloads and builds the required images.

### Accessing the Application

Once the deployment is complete, you can access the application at:

- [http://localhost:3000](http://localhost:3000)

Replace `YOUR_PORT` with the actual port number if specified in your configuration.