class Shape {
    constructor() {
        this.shape = '';
    }

    // Sets the shape color when method is called
    setColor(colors) {
        this.color = colors;
    }

    render() {
        throw new Error('Child class must implement a render() method.')
    }
}

module.exports = Shape;