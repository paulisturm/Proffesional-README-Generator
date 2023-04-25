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
    name: "title",
  },
  {
    type: "input",
    message: "Input a description of your application",
    name: "description",
  },
  {
    type: "input",
    message: "Input your application's installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Input your application's usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Input instructions on how to make contributions to your application",
    name: "contributing",
  },
  {
    type: "input",
    message: "Input information on how to test your application",
    name: "test",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        //console.log(process.cwd())
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
    
     //console.log(response)
     var fileData = generateMarkdown(response)
     console.log(fileData)
     writeToFile('README.md',fileData)
    }
  );
}

// Function call to initialize app
init();

