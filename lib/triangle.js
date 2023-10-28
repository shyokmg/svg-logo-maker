const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(shape, color) {
        super(shape, color);
        this.shape = "polygon";
    }
    render() {
        return `<${this.shape} points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

module.exports = Triangle;