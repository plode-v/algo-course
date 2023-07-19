// How hash table works and looks
// can also have or be arrays of objects
// can have keys or values as functions

let user = {
    age: 54,
    name: 'Kyle',
    magic: true,
    scream: function() {
        console.log("AHHHHH!");
    }
}


// console.log(user.age) // O(1)
// user.spell = 'abra kadabra'; // O(1)
// user.scream(); // O(1)



// When hash collision happens, it slows down reading and writing.
// 153 - name: "plode" -> job: "Engineer"
// This is an example of having 2 datas in 1 memory space. It will have to look through all elements inside that memory space to find specific key value pair. A collision also can be linked lists.
// In bigO notation, it's O(n/k) where k is the size of hash table but at the end it's O(n)


// How to use Map() and Set();
const fruits = new Map([
    ["apples", 500],
    ["babanas", 300],
    ["oranges", 200]
]);

fruits.set("apples", 300)
// console.log(fruits)


const dict = {
    key: "value",
    value: "he"
}

console.log(dict["key"])