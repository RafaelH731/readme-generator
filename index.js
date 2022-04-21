// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "name"
    },
    {
        type: "input",
        message: "Input description of project here",
        name: "name"
    },
    {
        type: "input",
        message: "Input Table of Contents here",
        name: "name"
    },
    {
        type: "input",
        message: "What is the purpose of your project?",
        name: "name"
    },
    {
        type: "input",
        message: "Add lisence information here",
        name: "name"
    },
    {
        type: "input",
        message: "Add contributions here",
        name: "name"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //get file name and template file
    //using fs to read and write file and create the readme.md
}

// TODO: Create a function to initialize app
function init() {
    //code goes in here, using the questions var I can use the questions in the inquirer to the user 
    //pass the answers into generateMarkDown.js
    //return the template string from generatemarkdown.js
    //pass template sting to writetofile(Line7) function

}

// Function call to initialize app 
init();

