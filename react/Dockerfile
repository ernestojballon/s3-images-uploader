# Use an official Node runtime as a parent image
FROM node:alpine

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

# Make port 3000 available to the outside world from the container
EXPOSE 3000

# Run npm start when the container launches
CMD ["npm", "run", "dev"]