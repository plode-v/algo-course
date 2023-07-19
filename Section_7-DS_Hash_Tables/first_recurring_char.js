// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

const array1 = [2,5,1,2,3,5,1,2,4]; // return 2
const array2 = [2,1,1,2,3,5,1,2,4]; // return 1
const array3 = [2,3,4,5]; // return undefined


function firstRecurringCharacter(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[j]) {
                return (arr[i])
            }
        }
    }
    return (undefined)
    // O(n^2)
}

// console.log(firstRecurringCharacter(array1))
// console.log(firstRecurringCharacter(array2))
// console.log(firstRecurringCharacter(array3))


// more efficient way
function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] != undefined) {
            return input[i];
        } else {
            map[input[i]] = i;
        }
        console.log(map)
    }
    return undefined;
} // O(n)

// console.log(firstRecurringCharacter2(array2))


const myFunc = (input) => {
    let dict = {}
    for (let i = 0; i < input.length; i++) {
        if (dict[input[i]] != undefined) {
            return input[i];
        } else {
            dict[input[i]] = i;
        }
    }
    return undefined
}

console.log(myFunc(array2))