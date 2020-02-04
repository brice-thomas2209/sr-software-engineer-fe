# sr-software-engineer-fe
Coding challenge for Sr Software Engineer (Frontend)/Technical Lead (UI and Graphics) http://archistar.ai/. Please see below for guide on how to run the project and tests.

## Overview
I have tried to deliver a project that simulates getting a geojson through ajax request from the server. The geojson is processed and added to the vuex store. The data is also being passed as a prop just to demonstrate ability of using multiple ways of passing data through components. Markers can be added or removed on the map by using the switches available on the project card or through the multi-select. Note that the multi-select and the project card switches are connected. You can also type into the multi-select to filter the selection and the list of card (this makes the UI a bit clunky but demonstrates the ability of using property sync and vue events).

## Running the project

### Install yarn
Please click [here](https://classic.yarnpkg.com/en/docs/install/) and follow the links to install yarn 

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
### Run unit tests
```
yarn test:unit
```

### Run e2e tests
```
yarn test:e2e
```
Note that you might have to install Cypress to run e2e tests. You can follow the installation guide [here](https://docs.cypress.io/guides/getting-started/installing-cypress.html)




## TODO

* Have a closer look at responsivity, replace media query with breakpoint-sass
* Need to work on accesibility and add focusable element and skip to ui
* Refine the UI to make selection easier
* Add more information on the project card and marker popup

## Core Packages
* [Vue Ant Design](Vue Ant Design)
* [Vue-Mapbox](https://github.com/soal/vue-mapbox)

## Author
Email: brice.thomas2209@gmail.com

## Licence
[MIT](https://choosealicense.com/licenses/mit/)