# Full-stack AI Agents with LangGraph & CopilotKit

A streamlined implementation of CopilotKit's [coagents-research-canvas](https://github.com/CopilotKit/CopilotKit/tree/main/examples/coagents-research-canvas) example, designed for easy reproduction and deployment.

## Project Overview

This project demonstrates the integration of LangGraph and CopilotKit to create full-stack AI agents. The implementation is split into two main components:

- **Agent Directory**: Contains the LangGraph-CopilotKit integration implementation
- **UI Directory**: Houses the frontend built with Next.js and CopilotKit

## Prerequisites

- Docker and Docker Compose
- Node.js (for local development)
- API keys for OpenAI, Tavily, and LangSmith services

## Configuration

### Agent Configuration

Create a `.env` file in the `agent` directory with the following variables:

```sh
TAVILY_API_KEY=your_tavily_key
OPENAI_API_KEY=your_openai_key
MODEL=openai
PORT=8000
```

### UI Configuration

Create a .env file in the ui directory with the following variables:

```.sh
OPENAI_API_KEY=your_openai_key
LANGSMITH_API_KEY=your_langsmith_key
# Choose one of the following URLs based on your setup:
REMOTE_ACTION_URL=http://agent:8000/copilotkit  # For docker-compose
REMOTE_ACTION_URL=http://localhost:8000/copilotkit  # For devcontainers
```

### Development Setup

#### Using DevContainer (Recommended)

1. Install the VS Code DevContainer extension
2. Open the repository in VS Code
3. Click "Reopen in Container" when prompted
4. The development environment will be automatically configured

#### Manual Setup

1. Clone the repository
2. Configure environment variables as described above
3. Install dependencies in both agent and ui directories
4. Start the development servers

## Deployment

### Using Docker Compose

```sh
# Build and start all services
docker compose up --build

# To run in detached mode
docker compose up --build -d

# To stop all services
docker compose down
```

### Project Structure

```sh
.
├── agent/                # Backend implementation
│   ├── src/              # Source code
│   └── .env              # Environment variables
├── ui/                   # Frontend implementation
│   ├── src/              # Source code
│   └── .env              # Environment variables
├── docker-compose.yml    # Docker composition file
└── .devcontainer/        # DevContainer configuration
```

#### Features

- Seamless integration of LangGraph and CopilotKit
- Docker-based deployment for consistency across environments
- DevContainer support for streamlined development
- Configurable environment variables for flexible deployment

## Troubleshooting

- Connection Issues: Verify the REMOTE_ACTION_URL matches your deployment method
- API Errors: Ensure all API keys are correctly set in the environment files
- Docker Issues: Check Docker logs using docker compose logs

## License
This project is licensed under the MIT License - see the LICENSE file for details