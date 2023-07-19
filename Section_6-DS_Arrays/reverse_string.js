// Create a function that reverses a string:
// "Hi my name is Adrei" should be:
// "ierdnA si eman ym Hi"

const text = "Hi my name is Adrei";

function myTake1(str) {
    var newArray = str.split("");
    var newArray2 = [];
    for (var i = newArray.length -1; i >=0; i--) {
        newArray2.push(str[i]);
    }
    var arrayToString = newArray2.toString();
    let finalString = arrayToString.replaceAll(',', '');
    return finalString
}


const myTake2 = (str) => {
    var newArray = str.split("");
    var array2 =(newArray.reverse()).toString();
    let finalString = array2.replaceAll(",", "");
    return finalString;

}


function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return "hmm that's not good";
    }
    var backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards)
    return backwards.join('');
}


const reverse2 = (str) => {
    return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');


// reverse2 and reverse3 works exactly the same, but easier to write.

const reverse4 = str => [...str].reverse().join('');
// This methis [...str] is innitially .split() method.