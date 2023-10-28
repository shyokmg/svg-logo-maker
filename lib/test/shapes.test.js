const Circle = require('../circle.js');
const Triangle = require('../triangle.js');
const Square = require('../square.js');

describe('SVG xml tag for Circle', () => {
    it('should return circle tag with color and shape dimensions', () => {
        const shape = new Circle();
        let color = 'blue'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`)
        console.log(shape.render());
    });

});

describe('SVG xml tag for Triangle', () => {
    it('should return polygon tag with color and shape dimensions', () => {
        const shape = new Triangle();
        let color = 'red'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
        console.log(shape.render());
    });

});

describe('SVG xml tag for Square', () => {
    it('should return polygon tag with color and shape dimensions', () => {
        const shape = new Square();
        let color = 'green'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="10" y="10" width="30" height="30" fill="${color}" />`);
        console.log(shape.render());
    });

});