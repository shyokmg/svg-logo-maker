const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');
const Text = require('./text.js');

function createDocument(shape, shapeColor, textInput, textColor) {

    const circle = new Circle();
    const triangle = new Triangle();
    const square = new Square();
    
    let shapeRender = '';
    let textRender = ''

    // Switch case based on given shape
    switch (shape) {
        case "circle":
            circle.setColor(shapeColor);
            shapeRender = circle.render();
            break;
        case "triangle":
            triangle.setColor(shapeColor);
            shapeRender = triangle.render();
            break;
        case "square":
            square.setColor(shapeColor);
            shapeRender = square.render();
            break;
    }

    console.log(shapeRender);
    const text = new Text(textInput);
    
    text.setColor(textColor);
    textRender = text.render();

    // returns svg xml based on shape and text input 
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeRender}
    ${textRender}
  </svg>`;
}

module.exports = { createDocument };