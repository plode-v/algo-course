// Implement queues by using stacks datasctructure

// It would be especially easy with stacks arrays

class MyQueue {
    constructor() {
        this.s1 = []
        this.s2 = []
        this.front = null;
    }
    push(value) {
        if (this.s1.length === 0) {
            this.front = value;
        }
        this.s1.push(value);
    }
    pop() {
        if (this.s2.length == 0) {
            while (this.s1.length != 0) {
                this.s2.push(this.s1.pop())
            }
        }
        this.s2.pop();
        this.front = this.s2[this.s2.length - 1]
    }
    peek() {
        if (this.s2.length === 0) {
            console.log(this.front);
        } else {
            console.log(this.s2[this.s2.length - 1]);
        }
    }
    empty() {
        console.log(this.s1.length === 0 && this.s2.length === 0);
    }
}

const myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2)
myQueue.push(3)

myQueue.pop()
myQueue.peek()
myQueue.empty()

console.log(myQueue)