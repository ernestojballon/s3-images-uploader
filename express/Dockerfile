# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Copy package.json and package-lock.json
COPY package.json .

# Install any needed packages
RUN npm i

RUN ls

# Bundle app source inside the Docker image
COPY . .

# Run npm start when the container launches
CMD ["npm", "run", "dev"]