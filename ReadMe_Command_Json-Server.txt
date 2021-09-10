1. npm i -g json-server
-> start :  json-server --watch db.json
2.Setup custom json-server 
- npm init
-> 
- package name: (json-server-demo)
- version: (1.0.0)
- description: demo how to use json-server
- entry point: (index.js) main.js
- test command:
- git repository:
- keywords: json-server
- author: dinhliem
- license: (ISC) MIT
About to write to G:\DATA D\NHÁP\json-server-demo\package.json:
=> KQ:
{
  "name": "json-server-demo",
  "version": "1.0.0",
  "description": "demo how to use json-server",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "json-server"
  ],
  "author": "dinhliem",
  "license": "MIT"
}
3./ git init
4./ touch .gitignore (nếu ko đc vào cmd chạy admin : npm install touch-cli -g)
5./ npm i json-server
6./ npm i --save-dev nodemon
7./ main.js : copy từ Custom routes example
8./ package-json: 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon main.js",
    "start": "node main.js"
  },
9./ cài extension : rest client -> test API
10./ Generate random Data : faker.js -> npm i --save-dev faker
11./ -> npm run generate-data  (node generate-data.js)
12./"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon main.js",
    "start": "npm run generate-data && node main.js"
  },
