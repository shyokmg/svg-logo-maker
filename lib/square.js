const Shape = require('./shape.js');

class Square extends Shape {
    constructor(shape, color) {
        super(shape, color);
        this.shape = "rect";
    }
    render() {
        return `<${this.shape} x="75" y="25" width="150" height="150" fill="${this.color}" />`
    }
}

module.exports = Square;