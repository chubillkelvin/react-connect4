# Steps for setting up project with
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