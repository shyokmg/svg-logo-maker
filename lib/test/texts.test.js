const Text = require('../text.js');

describe('SVG xml tag for Text', () => {
    it('should return text tag with color and input text', () => {
        const text = new Text();
        let color = 'blue'
        let texts = 'SVG'
        text.setColor(color);
        text.setText(texts)
        expect(text.render()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${texts}</text>`)
        console.log(text.render());
    });
});