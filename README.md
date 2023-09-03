# Warehouse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



docker build -t warehouse-image . 

docker run --rm --name warehouse-container -d -p 3000:80 angular-app


https://www.jenkins.io/doc/book/installing/docker/
docker pull jenkins/jenkins:lts-jdk11
docker network create jenkins

  docker run --name jenkins-container --rm --detach ^
  --privileged --network jenkins --network-alias jenkins-image ^
  --env DOCKER_TLS_CERTDIR="" ^
  --volume jenkins-docker-certs:/certs/client ^
  --volume jenkins-data:/var/jenkins_home ^
  --publish 2376:2376 ^
  docker:dind

  docker pull jenkins/jenkins:lts-jdk11

  docker run --name jenkins-container -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts-jdk11
