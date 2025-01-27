# Use an official Node.js LTS version as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json first (for caching layers)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Ensure the correct permissions (useful if files are copied from a host with restrictive permissions)
RUN chown -R node:node /app

# Switch to a non-root user for security (optional but recommended)
USER node

# Expose the development server port
EXPOSE 5173

# Command to start the application
CMD ["npm", "run", "dev"]
