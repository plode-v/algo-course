const arr1 = [1, 2, 30, 4]
const arr2 = [12, 5, 4, 0, 31]

const mergeSortedArrays = (arr1, arr2) => {
    const newArray = arr1.concat(arr2).sort(function(a,b){return a-b})
    return newArray;
}

console.log(mergeSortedArrays(arr1, arr2))




function func(a1, a2) {
    const newArray = a1.concat(a2)
    newArray.sort(function(a,b){return a-b})
    return newArray;
}

console.log(func(arr1, arr2))


