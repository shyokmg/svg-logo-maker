class Shape {
    constructor() {
        this.shape = '';
    }

    setColor(colors) {
        this.color = colors;
    }

    render() {
        throw new Error('Child class must implement a render() method.')
    }
}

module.exports = Shape;