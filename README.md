## JSON API Project for Jibble

## Overview
The project has been built on top of the following frameworks/libraries:
* create-react-app boilerplate
* ReactJS
* Redux
* Webpack (built-into create-react-app)
* SCSS
* redux-thunk middleware for async actions

## Installation
Clone the repository, and then run `npm install`. Once all the dependencies are installed, you can run `npm start`, which will open a new window in your browser with the project page.

## Folder Structure

After creation, your project should look like this:

```
interview-jibble/
  node_modules/
  package.json
  public/            // All public/static files and iamges 
    index.html
    favicon.ico
  src/
    components/     // Reusable React components
    scenes/         // Page component wrappers
    store/			
      modules/ 		// Redux "ducks". Since it's a pretty small project, I've decided to bundle all redux constants, actions and reducers into a single file
```

## Few notes
Removing cards and renaming post titles isn't connected to the API and it works only locally (hitting the "Reload data" button fetches the fresh data).

Should you have any questions, feel free to let me know!

Konrad Jarosinski