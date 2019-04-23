# Connect 4
Connect Four is a well-known two-player game in which players take turn to drop their color piece in a vertically suspended 6-by-7 grid.

The goal of the game is to be the first to form a horizontal, vertical or diagonal line of four of one's own color pieces.

You can read more in this [Wikipedia Page](https://en.wikipedia.org/wiki/Connect_Four).

## Project Description
This project is a React-version rebuild of my previous project [Connect 4](https://github.com/RageBill/connect4) which was built with jQuery and jQuery UI.

## Tools Used

* node @ 11.13.4
* typescript @ 3.4.3
* react @ 16.8.6
* react-dom @ 16.8.6
* react-redux @ 7.0.6
* redux @ 3.6.0
* react-draggable @ 3.2.1
* jest @ 23.6.0

## Extra notes for setting up project with React, Typescript, Redux and React-Redux
1. npx create-react-app react-connect4 --typescript
2. (optional) Add .idea/ (or other code editor configs) inside .gitignore
3. Update tsconfig.json
4. yarn add --dev tslint tslint-config-prettier tslint-config-standard tslint-react
5. Add tslint.json and update content
6. Update package.json for lint script
7. yarn add --dev prettier
8. Add prettier.json and update content
9. Update package.json for prettier script
10. Set up folder structure in src and add redux, react-redux