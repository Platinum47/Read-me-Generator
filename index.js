// Required Packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer prompts for userInputs
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username'
    },
    {
        type: 'input',
        message: "What is the GitHub repo name?",
        name: 'repo'
       
    },
    {
        type: 'input',
        message: "What is the project title?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Write a project description.",
        name: 'description'
    },
    {
        type: 'input',
        message: "Describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Success! Your README.md file has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// Main function

async function init() {
    try {

        // Prompt Inquirer questions
        const userInputs = await inquirer.prompt(questions);
        console.log("Your responses: ", userInputs);
    
        
        const userInfo = await userInputs;
        console.log("GitHub user info: ", userInfo);
    
        // Pass Inquirer userInputs and GitHub userInfo to generateMarkdown
        console.log("Generating README file")
        const generateReadMe = generateMarkdown(userInputs, userInfo);
        //console.log(markdown);
    
        // Write markdown to file
        // await makes a function wait for a Promise
        await writeFileAsync(`generatedREADME.md`, generateReadMe);

    } catch (error) {
        console.log(error);
    }
};

init();