### Sprint 5/ PP5

## React shopping list app with local storage.

## How to launch

- Download and install node.js:
  [nodejs.org](https://nodejs.org/en/)
- Download the app code.
- Open it with VS Code.
- Open terminal and install packages (MUI and Router dom) and run live server:

### `npm install`

### `npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/styled-engine-sc styled-components`

### `npm install react-router-dom@6`

### `npm start`

## How to use

- In the input field type in item name and press Add item button. NOTE: Not more than 20 symbols.
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
  Router setup: Using HashRouter so the page can be deployed via GitHub Pages(For local use please change &lt;HashRouter&gt; to &lt;BrowserRouter&gt; in App.js).
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
