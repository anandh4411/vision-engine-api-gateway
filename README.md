# Vision Engine API Gateway

This is a Node.js Express API Gateway that acts as a single entry point for vision engine client apps to interact with multiple microservices. It provides load balancing capabilities to distribute requests across different instances of the microservices for improved scalability and fault tolerance.

## Features

- Unified API: The API Gateway provides a unified API for clients to access various microservices through a single entry point.

- Load Balancing: The gateway balances incoming requests across multiple instances of the microservices to evenly distribute the load.

- Reverse Proxy: The gateway uses `http-proxy-middleware` to create a reverse proxy, forwarding requests to the appropriate microservice instance.

- Custom Load Balancer: A simple custom load balancer utility function is implemented to perform round-robin load balancing.

- Middleware: The gateway uses middleware for tasks such as logging and request parsing.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/express-api-gateway.git
cd express-api-gateway
```

2. Install the dependencies:

```bash Copy code
npm install
```

3. Configuration

Create a .env file in the root directory and set the following environment variables:
makefile
Copy code
MICROSERVICE_URL_1=http://localhost:3001
MICROSERVICE_URL_2=http://localhost:3002
PORT=3000
Replace the MICROSERVICE_URL_X with the URLs of your microservice instances. Update the PORT if you want the gateway to listen on a different port.

Usage
Start the Express API Gateway:

bash
Copy code
npm start
The API Gateway will start listening on the specified port (default: 3000) and forward incoming requests to the microservices based on the load balancing strategy.

Load Balancing Configuration
The current load balancing strategy is round-robin, which evenly distributes requests across the specified microservice instances. You can extend or modify the createLoadBalancer utility function in app.js to implement more sophisticated load balancing algorithms based on your needs.

Adding More Routes
To add more routes to the API Gateway, follow these steps:

Create a new route file (e.g., myRoute.js) in the src/routes directory.
Define your route handlers in myRoute.js.
Import the new route in app.js and mount it using app.use().
javascript
Copy code
const myRoute = require("./src/routes/myRoute");
app.use("/myroute", myRoute);
Logging (Development Only)
If you want to enable logging of incoming requests during development, set NODE_ENV=development in your .env file.

Contributing
Contributions are welcome! If you find a bug or have any suggestions, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Acknowledgments
Thanks to the creators and maintainers of Express and http-proxy-middleware for their excellent libraries.

```

```

```

```
