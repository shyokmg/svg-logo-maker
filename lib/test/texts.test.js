const Text = require('../text.js');

describe('Text Length', () => {
    it('should throw an error when Text length is greater than 3', () => {
        const text = () => new Text('GGGGG');
        const err = new Error('Text length must be 3 characters or less');
        expect(text).toThrowError(err);
    });
});

describe('SVG xml tag for Text', () => {
    it('should return text tag with color and input text', () => {
        let test = 'SVG';
        const text = new Text(test);
        let color = 'blue'
        text.setColor(color);
        expect(text.render()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${test}</text>`)
        console.log(text.render());
    });
});