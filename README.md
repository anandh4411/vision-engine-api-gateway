# Vision Engine API Gateway

Vision Engine is a video conferencing application. This is a Node.js Express API Gateway that acts as a single entry point for vision engine client apps to interact with multiple microservices.

## Features

- Unified API: The API Gateway provides a unified API for clients to access various microservices through a single entry point.

- Reverse Proxy: The gateway uses `http-proxy-middleware` to create a reverse proxy, forwarding requests to the appropriate microservice instance.

- Middleware: The gateway uses middleware for tasks such as logging and request parsing.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/anandh4411/vision-engine-api-gateway.git
cd vision-engine-api-gateway
```

2. Install the dependencies:

```bash
npm install
```

### Configuration

1. Create a `.env` file in the root directory and set the following environment variables:

```bash
NODE_ENV='development'
NODE_DOMAIN_URL='http://localhost'
```

Replace the url with the URLs of your microservice instances.

### Usage

1. Start the Express API Gateway:

```bash
node app.js
```

2. Or use nodemon:

```bash
npm i nodemon
nodemon app.js
```

The API Gateway will start listening on the specified port (default: 3000) and forward incoming requests to the microservices based on the load balancing strategy.

## Adding More Routes

To add more routes to the API Gateway, follow these steps:

1. Create a new route file (e.g., `myRoute.js`) in the `src/routes` directory.
2. Define your route handlers in `myRoute.js`.
3. Import the new route in `app.js` and mount it using `app.use()`.

```javascript Copy code
const myRoute = require("./src/routes/myRoute");
app.use("/myroute", myRoute);
```

### Logging (Development Only)

If you want to enable logging of incoming requests during development, set NODE_ENV=development in your .env file.

## Contributing

Contributions are welcome! If you find a bug or have any suggestions, please open an issue or submit a pull request.

### Acknowledgments

Thanks to the creators and maintainers of Express and http-proxy-middleware for their excellent libraries.

## License

This project is licensed under the [MIT License](LICENSE.txt).
