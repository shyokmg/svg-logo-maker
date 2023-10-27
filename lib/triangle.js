const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);

    }

    render() {
        return `<${shape} points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`
    }
}

module.exports = Triangle;