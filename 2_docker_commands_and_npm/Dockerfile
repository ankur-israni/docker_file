# Build : docker build -t simple_npm_app . (simple_npm_app = image_id, '.'' indicates that the Dockerfile is in the current directory, -t = tag with the image name given)
# Run: docker run -p 3000:6000 simple_npm_app (here 3000 = external port, 6000 = internal port(of the container) - this port is configured in index.js)
# Attach another terminal to this container : docker exec -it <container_id> sh (get container_id from 'docker ps') 

# Download the minimilistic image of node, alpine means very small image
FROM node:alpine

# All files e.g. node_modules folder, etc will be downloaded to this folder
WORKDIR /usr/app

# Copy package.json to the container filesystem
COPY ./package.json ./

#Install dependencies - /user/app/node_modules
RUN npm install

# After detecting and running any changes in package.json, copy the other files to the container
COPY ./ ./

# Execute the following default commnand when this container starts
CMD ["npm","start"]

