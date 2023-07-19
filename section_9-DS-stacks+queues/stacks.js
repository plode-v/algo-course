// Stacks


// can build it with arrays or linked lists

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() { 
        // to see the very top of the stack / top node
        console.log(this.top)

    }
    push(value) { 
        // add node to the top of stack
        // const newNode = new Node(value);
        // this.top = newNode;
        // newNode.next = this.bottom;
        // this.bottom = this.top;
        // this.length++;

        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
    }
    pop() { 
        // remove from top of stack
        this.top = this.top.next;
        this.length--;
        if (!this.top) {
            this.bottom = null;
            return this;
        }
    }
    isEmpty() {
        // to check that if stack is empty
    }
    print() {
        const arr = []
        let currentNode = this.top;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr)
    }
}

const myStack = new Stack();
myStack.push("google")
myStack.push('udemy')
myStack.push('discord')
myStack.pop();
myStack.pop();
myStack.pop()


console.log(myStack)
// myStack.print()