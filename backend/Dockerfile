# Use the official Node.js image based on the version specified in .nvmrc
FROM node:19.8.1

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the application listens on
EXPOSE 3000

# Start the application using the npm start script
CMD ["npm", "start"]

# Mount the application code directory on the host machine to a directory inside the container
VOLUME ["/app"]