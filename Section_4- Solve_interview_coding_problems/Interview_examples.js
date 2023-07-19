// COME BACK LATER


const array1 = ['a','b','c','x']
const array2 = ['z', 'y', 'x']


// given 2 arrays, create a function that let's a user know T/F whether these two arrays contain any common items

function containsCommonItems(n1, n2) {
    for (let i = 0; i < n1.length; i++) {
        for (let j = 0; j < n2.length; j++) {
            if (n1[i] === n2[j]) {
                return true;
            } 
        }
    }
    return false;
}

console.log(same(array1,array2))


// O(a*b)
// because it has 2 inputs and nested loops


// ---------- method 2 ---------- //


// array1 ==> obj {
//     a: true,
//     b: true,
//     c: true,
//     x: true
// }
// array2[index] === obj.properties

function containsCommonItems2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    // loop through second array and check if item in second array exist on created obkect.
}


// O(a+b)
// It could be this because there are 2 inputs, but possible to have 2 separate loops