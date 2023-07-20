// Stacks

// lookup O(n)
// push O(1)
// pop O(1)
// peek O(1)


// can build it with arrays or linked lists

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.bottom = newNode;
        this.length = 1;
    }
    peek() { 
        // to see the very top of the stack / top node
        console.log(this.top)

    }
    push(value) {
        const newNode = new Node(value);
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
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
    traverse(index) {
        let currentNode = this.top;
        let count = 0;
        while (count !== index) {
            count++;
            currentNode = currentNode.next;
        }
        console.log(currentNode);
        return currentNode;
    }
    printAll() {
        console.log(this);
        return this;
    }
    last() {
        console.lot(this.bottom);
        return this.bottom;
    }
}

const myStack = new Stack("google");
myStack.push('udemy')
myStack.push('discord')

myStack.printAll();
myStack.print();