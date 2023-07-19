// Double Linked List

// prepend = O(1)
// append = O(1)
// lookup = O(n) potentially O(n/2)
// insert = O(n)
// delete = O(n)

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
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
        const arr = []
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
    printPrev() {
        const arr = []
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.prev);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    traverse(index) {
        let count = 0;
        let currentNode = this.head;
        while (count !== index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(index, value) {
        const newNode = new Node(value);
        const leader = this.traverse(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
    }
    remove(index) {
        const leader = this.traverse(index - 1);
        const unwanted = leader.next;
        unwanted.next.prev = leader;
        leader.next = unwanted.next;
        this.length--;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(1, 99)
myLinkedList.remove(1)

myLinkedList.print()
myLinkedList.printPrev();
// console.log(myLinkedList)
