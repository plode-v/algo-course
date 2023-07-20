// Stacks

class Node {
    constructor(value){
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
    push(value) {
        const newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    peek() {
        console.log(this.top);
        return this.top;
    }
    pop() {
        this.top = this.top.next;
        this.length--;
        if (!this.top){
            this.bottom = null;
        }
    }
    printAll() {
        console.log(this);
        return this;
    }
    print() {
        let currentNode = this.top;
        const arr = []
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr);
        return arr;
    }
}

const myStack = new Stack();
myStack.push(1)
myStack.push(2)
myStack.push(3)


myStack.printAll();
myStack.print();