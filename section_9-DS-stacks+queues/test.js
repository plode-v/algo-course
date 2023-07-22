class Stack {
    constructor(value) {
        this.array = [value]
    }
    push(value) {
        return this.array.push(value)
    }
    peek() {
        const last = this.array[this.array.length - 1];
        console.log(last);
        return last
    }
    pop() {
        this.array.pop();
        return this;
    }
}

const mystack = new Stack(10)
mystack.push(20)
mystack.push(30)
mystack.pop()
mystack.peek();
console.log(mystack)