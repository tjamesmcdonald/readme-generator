// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


// Dependencies
const inquirer = require("inquirer")
const fs = require('fs')

// data

// functions

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'A short Description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the Installation Instructions?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What are the usage Instructions?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What liscence did you use',
        name: 'liscense',
        choices: [
            "The MIT License",
            "Mozilla Public License 2.0",
            "The Perl License",
            "Apache 2.0 License",
        ]
    },
    {
    type: 'input',
    message: 'Who else contributed?',
    name: 'contributors',
    },
    {
        type: 'input',
        message: 'What is your github url?',
        name: "github"
    },
    {
        type: 'input',
        message: 'What is your email adddress?',
        name: 'email'
    }
  ])

.then((response) => {
    const { title, description, install, usage, liscense, contributors, github, email } = response;
    fs.writeFileSync("READMEgen.md", `# ${title}

## Description
${description}
## Table of Centents
    1. Installation
    2. Usage
    3. License
    4. Contribiting
    5. Tests
    6. Questions

## Installation
${install}
## Usage
${usage}
## License
${liscense}
## Contributing
${contributors}
## Tests

## Questions
Contact me: 
    Github: ${github}
    eMail: ${email}
    `)
})
// user interactions

// init
