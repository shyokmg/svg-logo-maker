class Shape {
    constructor(children = []) {
        this.children = children;
    }

    render() {
        throw new Error('Child clas must implement a render() method.')
    }
}