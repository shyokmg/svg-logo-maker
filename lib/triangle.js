const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(shape, color) {
        super(shape, color);
        this.shape = "polygon";
    }

    // returns xml tag for Triangle 
    render() {
        return `<${this.shape} points="150, 0 244, 160 56, 160" fill="${this.color}" />`
    }
}

module.exports = Triangle;