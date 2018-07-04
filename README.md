# angular6-contact-book

A simple **contact book** created using Angular6 (frontend) and loopback (backend). By the end of this tutorial project you will have basic knowledge of below technologies:
- Loopback
- Testing APIs using Mocha, chai and chai-http
- Angular 6


# Running Project
***

## Prerequisite
- You must have at least node `v8.9` installed on your system.
    - [Check here](http://blog.teamtreehouse.com/install-node-js-npm-windows) to see How to install nodejs on windows.
    - [Check here](http://blog.teamtreehouse.com/install-node-js-npm-mac) to see How to install nodejs on mac.
- You must have `angular-cli` installed on your system.
  ```
  npm install -g @angular/cli
  ```


## Clone Project
Git clone the project into your local system,

Clone via ssh
```
git clone git@github.com:sukheja-varun/angular6-contact-book.git
```
OR

Clone via https
```
git clone https://github.com/sukheja-varun/angular6-contact-book.git
```

> Check if the project is properly cloned by comparing at the project content on git https://github.com/sukheja-varun/angular6-contact-book

## Install dependencies

  - **Install Loopback dependencies:**  Inside project root folder `/angular6-contact-book`, run below cmd
    ```
    npm install
    ```

     > NOTE: It will take some time to download all the required dependencies, wait for it to finish.
     After this check project should contains folder `angular6-contact-book/node_modules`

  - **Install Angular dependencies :** Inside Angular root folder `/angular6-contact-book/client`, run below cmd
    ```
    npm install
    ```

    > NOTE: It will take some time to download all the required dependencies, wait for it to finish.
         After this check project should contains folder `/angular6-contact-book/client/node_modules`


There are 2 modes for running the project.
  - Development Mode
  - Production Mode

## Development mode

#### Start Loopback Server
Go to project root folder i.e. `/angular6-contact-book` and Start loopback server using,
```
npm start
```

you will get to see below message when server is up,
```
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer
```

To run Loopback server just copy-paste below URL in your browser
```
http://localhost:3000/
```

> But you won't be able to see anything as we are running development mode and there are angular static files as of now which loopback can serve.

To run Loopback API explorer just copy-paste below URL in your browser
```
http://localhost:3000/explorer
```


#### Start Angular
Go to project Angular folder i.e. `/angular6-contact-book/client` and Start Angular server using,
```
npm start
```

you will get to see below message when server is up,
```
ℹ ｢wdm｣: Compiled successfully.
```

To run Angular app just copy-paste below URL in your browser
```
http://localhost:4200
```


## Production Mode
To run project in prod mode i.e. make loopback server to serve angular app.
1. Build your angular app to generate static content for loopback.
    - Go to Angular folder i.e. `/angular6-contact-book/client`
    - Run build cmd
        ```
        ng build
        ```
    - Once build is done, you will get to see `angular6-contact-book/client/dist` is generated.
1. Now simply run loopback server i.e. go to project root folder `angular6-contact-book` and run below cmd,
   ```
   npm start
    ```

you will get to see below message when server is up,
```
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer
```

To run Loopback server just copy-paste below URL in your browser
```
http://localhost:3000/
```

Now both Loopback and Angular runs at `http://localhost:3000`


# Running Backend Test
***
Make sure you have downloaded all the needed dependencies, if not then go to project root folder `angular6-contact-book` and run below cmd
```
npm install
```

Running Api test is very easy, as we have already setup **npm script** so all you need to do is just go to Project root
`angular6-contact-book` and run below cmd
```
npm test
```


# Tutorial
***

This project has been developed by keeping in mind to serve as Tutorial for new users to these technologies.

One can go through the each feature branch merged to develop, where it contains step wise code in commits along with readme file explaining each and every step.

Table of Content for DOCs in learning order :

1. creating-loopback-app.md
1. test-api-setup.md
1. angular6-setup.md
1. angular-material-setup.md
1. creating-angular6-app.md
1. integrate-loopback-angular.md


> NOTE : All the above mentioned files are present in `/docs` folder under root folder.



# ROAD MAP
***

## Features Completed

1. Loopback (creating-loopback-app.md)

    - [X] How to setup loopback
    - [X] Creating loopback API server
    - [X] Creating new Data Source
    - [X] Creating new Model and generating REST API
    - [X] Running server
    - [X] Running API explorer

1. Backend Testing (test-api-setup.md)

    - [X] Setting up Mocha (the testing framework).
    - [X] Setting up Chai for assertions.
    - [X] Setting up Chai-http for testing HTTP API request
    - [X] Creating new Data Source for test
    - [X] Setting up test file
    - [X] Writing test
    - [X] Writing negative tests.
    - [X] Writing test for edge cases.
    - [X] Creating Database after running Test
    - [X] Running Test
    - [X] Running test via npm

1. Angular6 Setup (angular6-setup.md)

    - [X] Installing Angular CLI
    - [X] Creating new Angular6 App
    - [X] Running your Angular project

1. Angular Material Setup (angular-material-setup.md)

    - [X] Installing angular material
    - [X] Creating material module
    - [X] Adding material icons
    - [X] Adding material theme

1. Creating Contact Book Angular App (creating-angular6-app.md)

    - [X] Creating Thumbnail Component
    - [X] Creating Contact Class for strong typing
    - [X] Creating mock data file
    - [X] Creating contact service
    - [X] Creating thumbnail-list component
    - [X] Using thumbnail component as child component in thumbnail-list component.
    - [X] Using Service for CRUD
    - [X] Creating Add catalog Component.
    - [X] Creating edit catalog component
    - [X] Passing data from parent to child component.
    - [X] Passing data from child to parent component.
    - [X] Setting up router module.
    - [X] Created Not found component for invalid path routes.

1. Integrating Loopback-Angular app (integrate-loopback-angular.md)

    - [X] Setting up proxy in Angular to communicate at 3000 from 4200 port.
    - [X] Making Http get request in Angular to fetch data from backend using loopback API.
    - [X] Making Http post request in Angular to create data in backend using loopback API.
    - [X] Making Http put request in Angular to update data in backend using loopback API.
    - [X] Making Http delete request in Angular to delete data from backend using loopback API.
    - [X] Generate angular app build.
    - [X] Serving static angular app build from loopback server.


## Features Coming Soon

  - [ ] Add grunt/gulp/webpack the task runner.
  - [ ] Deploy project on Heroku.
  - [ ] Angular6 Unit testing.
  - [ ] Angular6 E2E testing.
  - [ ] Creating list-view component.
  - [ ] Frontend Validations.
  - [ ] Backend custom validation like restrict duplicate phone entry.
  - [ ] Writing Custom backend API.
  - [ ] Add image uploader.


