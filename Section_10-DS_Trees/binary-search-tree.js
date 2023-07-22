// Binary Tree

// lookup O(log n)
// insert O(log n)
// delete O(log n)

// use O(log n) because when we do binary tree search



class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return false;
            }
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                // right
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }
    lookup(value) {
        if (!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode) {
            if (value === currentNode.value) {
                return currentNode;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
        }
        return false;
    }
    remove(value) {
        
    }
}

const tree = new Bst;

//      9
//   4    20
//  1 6  15 170
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(tree.lookup(10))
const traverse = (node) => {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    console.log(tree);
}

// console.log(tree);
JSON.stringify(traverse(tree.root));
