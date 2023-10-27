const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);

    }

    render() {
        return `<${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />`
    }
}

module.exports = Circle;