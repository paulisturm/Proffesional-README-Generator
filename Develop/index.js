// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your repository?",
    name: "reponame",
  },
  {
    type: "input",
    message: "What is the name of your repository?",
    name: "reponame",
  },
  {
    type: "input",
    message: "What is the name of your repository?",
    name: "reponame",
  },
  {
    type: "input",
    message: "What is the name of your repository?",
    name: "reponame",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        console.log(process.cwd())
        fs.writeFileSync(process.cwd() +`/Develop/${fileName}`, data);
        // file written successfully
      } catch (err) {
        console.error(err);
      }
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)

    .then((response) => {
    
     console.log(response)
     var fileData = generateMarkdown(response)
     writeToFile('README.md',fileData)
    }
  );
}

// Function call to initialize app
init();

