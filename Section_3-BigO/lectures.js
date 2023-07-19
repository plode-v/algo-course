// BigO Notation Examples


// ----------- This section is O(n) or linear Time notation ----------- //
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squartle', 'dora', 'hank'];
const large = new Array(1000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log("Found Nemo!");
        }
    }
}

// findNemo(large)


// ----------- O(1) Notation or Constant Time notation ----------- //


let allBoxes = [0,1,2,3,4,5]

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

// logFirstTwoBoxes(allBoxes) // This function runs O(2) everytime because it always run at a constant rate of 2 operations


// ----------- O(2^n) This is called log all pairs of array ----------- //

const all_pairs = [1,2,3,4,5] // to log all pairs mean to log each possible pair of arrays
// example. [1,1][1,2][1,3]...
const pairs2 = ['a', 'b', 'c', 'd', 'e']

function logAllPairs(input, input2) {
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input2.length; j++) {
            console.log(input[i], input2[j])
        }
    }
}

// logAllPairs(all_pairs, pairs2)



function addAll(input) {
    input.forEach(function(i) {
        input.forEach(function(j) {
            console.log(i + j)
        })
    })
}

addAll(all_pairs)