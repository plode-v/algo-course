var strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// push
strings.push('e') // O(1) because it always adds to the end of array

// pop
strings.pop(); // O(1) always take out the last item, not looping thorugh anything

// unshift (add element to the beginning of the array)
strings.unshift('x') // O(n) because it needs to change indexes of the rest of the array. It loops through the array and shift everything up by 1

// splice
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings) // O(n) it has to loop through all elements in array and print them all.
console.log(stirngs[2]) // O(1) No loop, just print the exact element from given index in array.
