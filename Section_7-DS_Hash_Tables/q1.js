function convert(str) {
    let camelStrings = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            camelStrings += (str[i].toUpperCase());
        } else {
            camelStrings += (str[i].toLowerCase());
        }
    }
    return camelStrings
}


console.log(convert("hello"))
console.log(convert("HELLO"))
console.log(convert("yo eli"))
console.log(convert("10"))
console.log(convert("hello"))