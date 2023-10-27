const Shape = require('./shape.js');

class Square extends Shape {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);

    }

    render() {
        return `<${shape} x="10" y="10" width="30" height="30" fill="${shapeColor}" />`
    }
}

module.exports = Square;