class Shape {
    constructor(shape, shapeColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error('Child class must implement a render() method.')
    }
}

module.exports = Shape;