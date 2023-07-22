// Queues

// lookup O(n)
// enqueue O(1)
// dequeue O(1)
// peek O(1)

// FIFO First In First Out, like waiting in line

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queues {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        console.log(this.first);
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue() {
        this.first = this.first.next;
        this.length--;
        if (!this.first) {
            this.last = null;
        }
    }
    isEmpty() {
        if (this.length === 0) {
            console.log(null);
            return null;
        } else {
            console.log("the queue is not empty")
            console.log(this);
            return this;
        }
    }
}

const myQueue = new Queues();
myQueue.enqueue("Joy")
myQueue.enqueue("Matt")
myQueue.enqueue("Pavel")
myQueue.enqueue("Samir")

myQueue.dequeue();
myQueue.dequeue();
// myQueue.dequeue();
myQueue.dequeue();

myQueue.isEmpty();