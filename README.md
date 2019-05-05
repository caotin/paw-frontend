# Angular 2 Project - Pau Project
13 May 2018

This is pau project

Bellow is description about project and way to you get and run source code.

## ENVIRONMENTS

* Git.
* Using ubuntu 16.04 OS.
* Docker.

## TECHNOLOGY

* HTML5, CSS3.
* TypeScript.
* Angular 4.3.

## INSTALLATION

Open your terminal and run this commands:
`$ sudo apt-get update`

`$ sudo apt-get install git`

## USAGE
### 1. Docker

- You can install Docker follow this [guide](https://docs.docker.com/engine/installation/).

### 2. Build Angular image

- Build your first Docpad image using Docker.

```
docker build -t angular-docker .
```

**NOTE**:

- You can change your image by replacing `angular-docker` by any name you want.

- This command only need to run once in the beginning.

### 3. Angular Plugin

```
docker run -it --rm -w /home/app -v $(pwd):/home/app angular-docker npm install
```

### 4. Angular Run

```
docker run -it --rm -e HOSTNAME=0.0.0.0 -p 4200:4200 -w /home/app -v $(pwd):/home/app angular-docker
```

Now you can go to http://localhost:4200 to see web app.

## LICENSE

Copyright &copy; 2018+ All rights reserved.
