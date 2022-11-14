export default class IStack {
    stack: number[];
    constructor() {
        this.stack = [];
    }
    public push(value: number): void {
        this.stack.push(value);
    }
    public pop(): number {
        if (this.stack.length === 0) {
            throw new Error('Stack is empty.');
        }
        return <number>this.stack.pop();
    }
}