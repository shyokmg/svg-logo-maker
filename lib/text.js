class Text {
    constructor(text, color) {
        
    }

    setColor(colors) {
        this.color = colors;
    }

    setText(texts){
        this.text = texts
    }

    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}

module.exports = Text;