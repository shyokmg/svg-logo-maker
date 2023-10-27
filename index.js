const inquirer = require('inquirer');
const fs = require('fs');
// const gen = require('./lib/');

const userInput = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text upto 3 characters.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color keyword (OR a hexadecimal number)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape from this list.',
        choices: ['circle', 'triangle', 'square'],
        loop: false
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color keyword (OR a hexadecimal number)',
    },
];

inquirer.prompt(userInput)
    .then((data) => {
        console.log('Successfull created SVG file')
        // Create svg file
    })