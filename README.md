# Environ Manager - Client

## Introduction
I wanted to create a simple, networked system that I could customize as needed 
to monitor environmental factors for enclosed environments (terrariums, grow 
chambers, etc.). Essentially, I wanted a custom IoT solution I could understand
at a low level and manage myself without abstraction layers (Alexa Skills, Automation 
Hubs, and the like). It should be able to save info to a server for further analysis. 
Secondarily, it should be able to react to changes in the environment and correct them.

This is meant to be used in a client/server system with remote sensor/control 
hardware. See:
- https://github.com/LinkedMink/environ-manager-hw-rpi
- https://github.com/LinkedMink/environ-manager-server
- https://github.com/LinkedMink/environ-manager-client

Disclaimer: This project was mainly intended as a learning aid and for private use.

## Scripts
To run the application, install cross-env globally.

```bash
npm install -g cross-env
```

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`
Run the linter on the src directory.

### `npm run startProduction`
Serve the production bundle that results from `npm run build`. The built bundle can run on any web server, 
but the serve package has been included to keep Node.js as a single dependency.

### `npm run containerize`
Package the application as a docker container. Optionally set REACT_APP_SERVER_BASE_URL to the API server
address to prefill the login form.

## Deployment - Docker
There is no requirement to run on docker, but the project has been configured to do so if desired. Install 
the development dependencies.

```bash
npm install -g cross-env
npm install
```

Containerize the client application. You may set server URL at build time, so the login form is prefilled.
The app is designed to be server agnostic. This is not necessary, but it is convenient.

```bash
npx cross-env REACT_APP_SERVER_BASE_URL=https://api.mydomain.com:55000 \
  npm run containerize
# or just run:
npm run containerize
```

Run the containers on the target machine. 

```bash
docker run \
  -p 8080:80 \
  --name wiki-circuit-client \
  linkedmink/environ-manager-client-web
```
