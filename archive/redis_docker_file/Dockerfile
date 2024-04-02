# Run script - docker build .

#apline is a unix based operating system
FROM alpine

#apk = apache package manager. We are using apk to download and install redis
RUN apk add --update redis
CMD [redis-server]
