# Build
docker build -t simple_npm_app .
Note: (simple_npm_app = image_id, '.'' indicates that the Dockerfile is in the current directory, -t = tag with the image name given)

# Run:
docker run -p 3000:6000 simple_npm_app
Note: (here 3000 = external port, 6000 = internal port(of the container) - this port is configured in index.js)

# Attach another terminal to this container : docker exec -it <container_id> sh (get container_id from 'docker ps')

# Test on browser
http://localhost:3000
