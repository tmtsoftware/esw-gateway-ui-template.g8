# $project_name$
This project is a sample web application.

## Prerequisites required for running App

1. Install latest version of [Node.js](https://nodejs.org/en/download/package-manager/)

## Run the App in local environment

1. Run following commands in the terminal.
   ```
   npm install
   npm start
   ```
2. Go to http://localhost:8080 in the browser

## Build the App for production

Run following commands in the terminal.
```
npm install
npm run build
```

## Running tests

```
npm test
```

## How to use the project

The project has following structure:
```bash
.
├── src
│   ├── assets
│   ├── components
│   ├── config
│   ├── helpers
├── test
├── types
```

* `assets`: This directory contains all the files (images, audio etc) that are used by the UI component.
* `components`: This directory contains all the components created for this UI application.
* `config`: This contains the application specific configurations.
* `helpers`: App reusable functions / utilities goes here.
* `test`: This directory contains all the tests for the UI application.
* `types`: This directory contains all the types that needs to be imported externally for UI application.


## References
- Documentation of ESW-TS library - [Link](https://tmtsoftware.github.io/esw-ts/)
