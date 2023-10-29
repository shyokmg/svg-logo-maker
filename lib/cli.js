const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs').promises;
const { createDocument } = require('./document');


class CLI {
    // Command line interface for user input
    promptUser() {
        return inquirer
            .prompt([
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
            ])
            .then(({text, textColor, shape, shapeColor}) => {
                // generates svg file based on user input
                return writeFile(
                    join(__dirname, '..', 'examples', `${shape}_${text}.svg`),
                    createDocument(shape, shapeColor, text, textColor)
                );
            })
            .then(() => console.log('SVG file successfully created!'))
            .catch((err) => {
                console.log(err);
                console.log('Invalid input. Please try again');
            });
            
    }
}

module.exports = CLI;