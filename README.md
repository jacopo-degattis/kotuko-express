# Kotuko Express

## What is this project about ?
This codebase contains a simple backend application which aims is to provide a RSS feed starting from "The Guardian" journal API.

It's developed in Typescript using the Express.js framework.

### Environment variables

Required environment variables are all already configured inside the .env file.

Normally it's not a good practice to push a .env file onto a repository, it's better to create a
.env.template that shows which variables are required.

This time to make things easier I already configured and pushed the .env file.

## Installation & Launch

### Without docker

First thing first install all the required dependencies using

```bash
pnpm install
```

Then launch the program using

```bash
pnpm run dev
```

### Using Docker

You can also launch this application using docker.

You still need to install all dependencies using

```bash
pnpm install
```

After all the dependencies have been installed you can proceed preparing the containers with docker

To do so you can use the `docker-compose.yml` file as following:

```bash
docker-compose up
```

And wait for the download to finish.

Now you should be able to access the backend app on port 3000 (as configured in the .env file).

N.B: I also included a mysql container inside the `docker-compose.yml` file just for demonstration purposes only.
In fact it would have been useless to use docker-compose with just one single container.

## Author
Jacopo De Gattis
