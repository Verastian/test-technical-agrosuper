# "Prueba Técnica Agrosuper" with Docker and Docker Compose

![agrosuper|500](readme/agrosuper.gif)

## Introduction

This project uses Node.js and is pre-installed in the base image, "node:16". The application code is built and run inside a Docker container, using Docker Compose to manage the container.

### Requirements

- Docker
- Docker Compose

### Running the project

1.  Clone the repository
2.  Navigate to the project directory
3.  Build the Docker image using the Dockerfile:

phpCopy code

`docker build -t <image-name> .`

4.  Run the Docker container using Docker Compose:

Copy code

`docker-compose up`

5.  Access the application in your browser at `http://localhost:8000`

pass:123123,
username:devsafio

### Package.json Scripts

The `package.json` file includes the following scripts for managing the project:

jsonCopy code

`"scripts": {     "dev": "vite --host",     "build": "vite build",     "preview": "vite preview"   },`

- `npm run dev`: runs the development server for the application
- `npm run build`: builds the application for production
- `npm run preview`: previews the production build of the application

