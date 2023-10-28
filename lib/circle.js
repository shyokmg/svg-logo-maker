const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(shape, color) {
        super(shape, color);
        this.shape = "circle";
    }
    render() {
        return `<${this.shape} cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

module.exports = Circle;