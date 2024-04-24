// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Function to prevent answers left blank
const emptyAnswer = function(answer) {
    console.log(answer);
    if (!answer) {
        return 'Input is required';
    } else{
        return true;
    }
}

//  Array of questions for user input
const questions = [
    {
        name: "title",
        message: "Enter your application's title.",
        validate: emptyAnswer
    }, {
        name: "description",
        message: "Enter a description for your application.",
        validate: emptyAnswer
    }, {
        name: "install",
        message: "Enter any installation instructions, or leave blank if none required.",
        default: 'No installation required',
    }, {
        name: "usage",
        message: "Enter any instructions for usage.",
        validate: emptyAnswer
    }, {
        name: "contribute",
        message: "Enter instructions for anyone who wishes to contribute.",
        validate: emptyAnswer
    }, {
        name: "test",
        message: "Enter any instructions for testing application.",
        validate: emptyAnswer
    }, {
        name: "username",
        message:"Enter your Github username.",
        validate: emptyAnswer
    }, {
        name: "email",
        message: "Enter your email address.",
        validate: emptyAnswer
    }, {
        name: "license",
        type: "list",
        message: "Specify which license your application is made under",
        choices: ['MIT', 'GNU GPLv3', {name: "no license", value: ""}],
        default: 2
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error('Unable to write file.') : console.log(`Created README.`))
}

// Initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readme = generateMarkdown(answers)
            writeToFile('./README.md', readme)
        })
}

// Function call to initialize app
init();
