# To-Do List Demo Project Application

## Overview and Dependencies

This repository contains a simple to-do list application to demonstrate CRUD operations in React. This project requires `React` 16+, `Node.js` v.12+, and `npm` v.6+.

The application is represented in the following three versions:
* `version-single-file` - The entire React application is contained in a single file (see `/version-single-file/src/index.js`). Also contains comments/annotations. This version is intended for pedagogical purposes.
* `version-components` - The React application is split across individual components files (see `/version-components/src/components/`). Comments are omitted for brevity. This version includes stateful class components.
* `version-hooks` - The React application is split across individual components files (see `/version-hooks/src/components/`). Comments are omitted for brevity. This version eliminates class components, instead using the more modern `useState` Hook for component state.

To deploy a given version(s) locally via Bash terminal, `git clone` this repository, then `cd` into the appropriate sub-directory (e.g., `cd version-single-file`). Issue terminal command `npm install` to install dependencies, and then issue terminal command `npm start` to run the React application on `localhost:3000` in the browser.

## App Design and Component Architecture

The following is a wireframe of the React application, with components annotated:

![wireframe](https://github.com/awpala/todo-list-demos/blob/main/assets/wireframe.png)

With respect to the component architecture, this application is represented by the following **component tree** (corresponding diagram legend is shown below):

![componentTree](https://github.com/awpala/todo-list-demos/blob/main/assets/componentTree.png)

![legend](https://github.com/awpala/todo-list-demos/blob/main/assets/legend.png)