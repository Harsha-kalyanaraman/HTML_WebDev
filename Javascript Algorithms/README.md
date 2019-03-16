# Web Design and user experience :
## Project_4: 
* Implementation of Algorithms in JavaScript
## Project Description : 
*  To develop a javascript code to learn about Implementing below algorithms in JavaScript.

1. Binary Search

2. Bubble Sort

3. Function to check if a string is a palindrome.

## Requirement :
* Visual Studio code, esdoc.

## How to run :
* STEPS :
1. Open a git bash shell
2. Execute a command "git clone "https://github.com/neu-mis-info6150-spring-2019/assignment-5-harsha771750"
3. Navigate to project directory `cd assignment-5-harsha771750'.
4. Run ` npm install esdoc esdoc-standard-plugin `.
5. Run ` npm init` to create package.json.
6. Create a file name "esdoc.json"
    Add following content to it.
   * {
    "source": "./src",
    "destination": "./dist/esdoc",
    "plugins": [{"name": "esdoc-standard-plugin"}]
    }
7. Replace your script tag of package.json with following 
   * "scripts": {
        "build": "npm install esdoc esdoc-standard-plugin",
        "test": "echo \"Error: no test specified\" && exit 1",
        "lint": "eslint app",
        "doc": "esdoc -c esdoc.json",
        "postinstall": "npm run build && npm run doc"
        }

## To View the files
1. Run "npm run doc" command on your terminal.
    After 1st Step a dist folder will be created. and it will contain a esdoc folder, which will contain the esdoc file. 
2. Open the index.html file to view the documentation and the source.

## To Run the output
1. Go to https://repl.it/@Harsha_Vardhanr/Algorithms to run the file.
