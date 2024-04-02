# Script #1 (build and tag the image) :  docker build -t simple_docker_file:0.1 .
# OR Script #2 (build without tagging the image): docker build .
# AND
# Script 3 (Get image id) - docker image {Get the <image-id> of simple_docker_file:0.1
# Script 4 (Run) -  docker run -it <image-id>

# The . is where to find the 'Dockerfile', . means in current directory.


# Whenever there is a FROM command, a new container is created.
# Use an existing docker image as base
FROM ubuntu

# Specify author
MAINTAINER name onlyankur@gmail.com

# Download a dependency
RUN apt-get update

# Tell the image what to do when it starts as a container, execute the commands mentioned below
#CMD ["echo","Image created"]
RUN echo "All done!!"
