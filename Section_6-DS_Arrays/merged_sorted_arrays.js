// [0, 3, 4, 4, 6, 20, 31]

const arr1 = [0,3,4,31]
const arr2 = [4,6,30]

const newa1 = [1,4,5,6,3,10,200]
const newa2 = [5,16,23,88,10,120]


// My take
const myFunc1 = (arr1, arr2) => {

    const newArray = arr1.concat(arr2);
    return newArray.sort(function(a,b) {return a-b});
}

// console.log(myFunc1(arr1, arr2))


const myFunc2 = (arr1,arr2) => {
    const newArray = arr1.concat(arr2).sort(function(a,b){return a-b});
    return newArray;
}

// console.log(myFunc2(newa1,newa2))


// Lecture
function mergeSortedArray1(arr1, arr2) {
    const mergedArray= [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;

    // Check input
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }

    while (array1Item || array2Item) {
        console.log(array1Item, array2Item)
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    }

    return mergedArray;
}


// console.log(mergeSortedArray(arr1, arr2));


const nums = [2,7,11,15]
const target = 9;
let i = 0;
let j = 0;

function twoSum(nums, target) {
    const sumedNums = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[j] === target) {
            sumedNums.push(i, j)
        }
    }

    return sumedNums;


}

console.log(twoSum(nums, target))