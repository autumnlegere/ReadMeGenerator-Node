// ackages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// link to generateMarkdown.js file to pull info from it
const generateMarkdown = require('./utils/generateMarkdown');

// Array of prompt questions for user input using inquirer
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project. You may want to include why you built it, what problem it solves, and what you learned.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "The Unlicense",
            "ISC License",
            "No License",
        ]
    },
    {
        type: 'list',
        name: 'contributing',
        message: 'Would you like to add the Contributor Covenant to your ReadMe for this project?',
        choices: ['Yes, Include the Contributor Covenant', 'No, I will write my own contributor guidelines'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application and provide examples on how to run them.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is you contact email?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),  (err) =>
    err ? console.log(err) : console.log('Success!'))
}

// Function to initialize app using inquirer
function init() {
    inquirer
        .prompt(questions)

        .then((data) => {
            JSON.stringify(data, null, "");
            writeToFile("./results/README.md", data)            
        });
}

// Function call to initialize app
init();
