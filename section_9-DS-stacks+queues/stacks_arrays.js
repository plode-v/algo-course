// Stacks but with arrays


class Stack {
    constructor() {
        this.array = []
    }
    peek() {
        console.log(this.array[this.array.length-1]);
    }
    push(value) {
        this.array.push(value);
    }
    pop() {
        this.array.pop();
        return this;
    }
}

const myStack = new Stack();
myStack.push(1)
myStack.push(2)
// myStack.pop()

console.log(myStack)