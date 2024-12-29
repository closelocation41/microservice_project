# Microservices Project

This repository contains a microservices-based project with Docker and Docker Compose setup. Below are the steps to set up and run the application locally.

## Prerequisites

Ensure you have the following installed on your system:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)
- Git

## Setup Instructions

### 1. Install Docker
Follow the official [Docker installation guide](https://docs.docker.com/get-docker/) to install Docker on your system.

### 2. Login to Docker
Login to your Docker account using the following command:
```bash
docker login
```

### 3. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/closelocation41/microservice_project.git
cd microservice_project
```

### 4. Start the Services
Start all the services using Docker Compose:
```bash
docker-compose up
```
This will build and start all the microservices and supporting infrastructure as defined in the `docker-compose.yml` file.

### 5. Access the Services
The microservices can be accessed via the following URLs:

- **User Service:** [http://localhost/users](http://localhost/users)
- **Product Service:** [http://localhost/products](http://localhost/products)
- **Core Service:** [http://localhost/core](http://localhost/core)

## Internal Service Communication

The services communicate internally using the following URLs:

- **Core Service:** `http://core-service:3000`
- **Product Service:** `http://product-service:3002`
- **User Service:** `http://user-service:3001`

## Notes

- Make sure the required ports (e.g., `3000`, `3001`, `3002`) are not in use on your system.
- If you encounter issues, check the logs using:
  ```bash
  docker-compose logs
  ```
- To stop the services, use:
  ```bash
  docker-compose down
  ```

## Troubleshooting

- Ensure Docker is running on your machine.
- Verify that your system meets the minimum requirements for running Docker and Docker Compose.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

