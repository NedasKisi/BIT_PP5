### Sprint 5/ PP5

## React shopping list app with local storage.

## How to launch

- Download the app.
- Open it with VS Code.
- Open terminal and install packages (MUI and Router dom) and run live server:

### `npm install`

### `npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/styled-engine-sc styled-components`

### `npm install react-router-dom@6`

### `npm start`

- Further instructions are at the bottom.

## How to use

- In the input field type in item name and press Add item button.
- Item will appear below.
- Add as many items as you'd like.
- You can delete added items by pressing Delete button on the far right side of list item.
- You can edit list items by pressing Edit button on the list item. You cannot leave empty field empty as the app will not allow empty input.
- If items are bought you can check them to mark them as item bought. Item will be crossed out in dark orange color and checkbox will be bright red.

## Project tasks

- Create shopping list app using React and localstorage.
- Create navigation with Router.
- Create add item function.
- Create read function.
- Create delete function.
- Create edit function.
- Must be at least 4 commits: ADD, READ, DELETE and EDIT.
- Upload to github, enable github pages.
- Keep the code clean - structure ,validity, website, github.
- Create readme.md.

## Project workflow

- 1.Layout creation using Material UI for navbar and footer, CSS for Shopping List with functioning Add item button.
  Router setup: Using HashRouter so the page can be deployed via GitHub Pages.
  Added Error page component (wildcard) which on bad url input redirects to error page.
- 2.Added read function. Lets us see items from local storage in app.
- 3.Added delete function. Lets us delete items from list and local storage.
- 4.Added edit function. Lets us edit list items.

Uploaded to github to satisfy condtional commits, enabled github pages - can be accessed:
[Sprint5/PP5](https://nedaskisi.github.io/BIT_PP5/)

## Goal

To create working shopping list with local storage using React.

## About The Project

Learning project: React + local storage.
Project is done using React, Material UI library and raw CSS.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
