const Shape = require('./shape.js');

class Square extends Shape {
    constructor(shape, color) {
        super(shape, color);
        this.shape = "rect";
    }
    render() {
        return `<${this.shape} x="10" y="10" width="30" height="30" fill="${this.color}" />`
    }
}

module.exports = Square;