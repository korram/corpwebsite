npm update react react-dom next @testing-library/react jest babel-jest


npm install --save-dev @babel/preset-react @babel/preset-env @babel/preset-typescript babel-jest
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node
npm init jest@latest
npm install --save-dev @testing-library/jest-dom

Package.josn
,    "test": "jest",    "test:watch": "jest --watch"


jest.config.js
moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1', // Map @/ to the project root },


babel.config.js
npm install --save-dev @babel/preset-react @babel/core babel-jest
module.exports = {
    presets: ["next/babel", '@babel/preset-react', "@babel/preset-typescript"],
  };
  


npm install @babel/preset-react@latest

