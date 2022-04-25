// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Input description of project here",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "install"
    },
    {
        type: "input",
        message: "What is the purpose of your project?",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "Choose license listed below",
        name: "license",
        choices: ["Apache", "Boost", "Eclipse", "GNU"]
        
    },
    {
        type: "input",
        message: "Add GitHub username here",
        name: "github"
    },
    {
        type: "input",
        message: "Add email address here",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //get file name and template file
    //using fs to read and write file and create the readme.md
    fs.writeFile(fileName,generateMarkDown(data),function(error){
        if(error) console.error(error);
    })
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then(function(response){
        response.name

        writeToFile('./README.md',generateMarkDown(response))
    })
    //code goes in here, using the questions var I can use the questions in the inquirer to the user 
    //pass the answers into generateMarkDown.js
    //return the template string from generatemarkdown.js
    //pass template sting to writetofile(Line7) function

}

// Function call to initialize app 
init();

