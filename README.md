# Hello World from Node Express API in Docker

This is just a simple Hello World Node Express API for the course Linux essentials. It demonstrates how to clone a repo container a `Dockerfile` and how to build and run a docker container locally from this.

## Docker Compose

### Production

To build and run a production container:

```bash
docker-compose up --build
```

Add the `--build` flag to make sure the container is rebuild.

### Development

To build and run a development container:

```bash
docker-compose --file docker-compose.dev.yaml up --build
```

Add the `--build` flag to make sure the container is rebuild.

## Pure Docker

### Production

To build and run a production container:

```bash
docker build --tag hello-production .
docker run --publish 3000:3000 --name my-hello-prod hello-production
```

### Development

To build and run a development container that is removed once killed (because of `--rm` option):

```bash
docker build --tag hello-development --file Dockerfile.dev .
docker run --rm --publish 3000:3000 --name my-hello-dev hello-development
```

## TODOs

* Add github action and let github build the container.
* Add environment variable as demo + env file
