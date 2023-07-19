// Testing knowledge

// singly
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Single {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1
    }
    print() {
        let currentNode = this.head;
        const arr = [];
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
    traverse(index) {
        let currentNode = this.head;
        let count = 0;
        while (count !== index) {
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
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(index, value) {
        const newNode = new Node(value);
        const leader = this.traverse(index - 1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;
    }
    delete(index) {
        const leader = this.traverse(index-1);
        const unwantedNode = this.traverse(index);
        leader.next = unwantedNode.next;
        this.length--;
    }
    reverse() {
        if (this.length === 1) {
            return this;
        }
        let first = this.head;
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

const mySingle = new Single(10);
mySingle.append(26)
mySingle.prepend(1)
mySingle.insert(3, 88)
// mySingle.delete(1)
mySingle.print();
mySingle.reverse()
mySingle.print();
console.log(mySingle)

// Double
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }

class Double {
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
    traverse(index) {
        let count = 0;
        let currentNode = this.head;
        while(count !== index){
            count++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail.value;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode.value;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(index, value) {
        const newNode = new Node(value);
        const leader = this.traverse(index-1);
        newNode.prev = leader.value;
        leader.next.prev = newNode.value;
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;
    }
    remove(index) {
        const leader = this.traverse(index - 1);
        const unwantedNode = this.traverse(index);
        unwantedNode.next.prev = leader.value;
        leader.next = unwantedNode.next;
        this.length--;
    }
}

// const myDouble = new Double(1);
// myDouble.append(2)
// myDouble.append(3)
// myDouble.prepend(4)
// myDouble.insert(2,5)
// myDouble.remove(1)

// myDouble.print();
// myDouble.printPrev();