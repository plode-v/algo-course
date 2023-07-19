// Single Linked List

// append = O(1)
// prepend = O(1)
// lookup = O(n) traverse
// insert = O(n)
// delete = O(n)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    print() {
        const arr = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr, this.length)
    }
    traverseToIndex(index) {
        // check param
        let count = 0;
        let currentNode = this.head;
        while(count !== index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(index, value) {
        // check params
        if (index === 0) {
            return this.prepend(value);
        } if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;
    }
    pop() {
        const beforeLast = this.traverseToIndex(this.length-2);
        beforeLast.next = null;
        this.length--;
    }
    remove(index) {
        // check params
        if (index >= this.length-1) {
            return this.pop();
        }
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
    }
    reverse() {
        // check params
        if (this.length === 1) {
            return this;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.prepend(16)
myLinkedList.insert(2, 99)
myLinkedList.reverse()

// myLinkedList.print()
console.log(myLinkedList)