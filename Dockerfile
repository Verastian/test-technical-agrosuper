# Use a base image with Node.js pre-installed
FROM node:16
# Set the working directory in the image
WORKDIR /usr/src/app
# Copy the package.json and package-lock.json to the image
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the code to the image
COPY . .
# Build the application
RUN npm run build
# Expose the port on which the app is running
EXPOSE 8000
# Specify the command to run when the image is started
CMD ["npm", "run","dev"]