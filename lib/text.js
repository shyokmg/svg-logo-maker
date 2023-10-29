class Text {

    constructor(text) {
        console.log(text);
        if(text.length > 3) {
            throw new Error('Text length must be 3 characters or less');
        }
        this.text = text;
    }

    setColor(colors) {
        this.color = colors;
    }

    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}

module.exports = Text;