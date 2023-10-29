const Circle = require('../circle.js');
const Triangle = require('../triangle.js');
const Square = require('../square.js');

// Test for generated tag for Circle
describe('SVG xml tag for Circle', () => {
    it('should return circle tag with color and shape dimensions', () => {
        const shape = new Circle();
        let color = 'blue'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`)
        console.log(shape.render());
    });

});

// Test for generated tag for Triangle
describe('SVG xml tag for Triangle', () => {
    it('should return polygon tag with color and shape dimensions', () => {
        const shape = new Triangle();
        let color = 'red'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 0 244, 160 56, 160" fill="${color}" />`);
        console.log(shape.render());
    });

});

// Test for generated tag for Square
describe('SVG xml tag for Square', () => {
    it('should return polygon tag with color and shape dimensions', () => {
        const shape = new Square();
        let color = 'green'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="${color}" />`);
        console.log(shape.render());
    });

});