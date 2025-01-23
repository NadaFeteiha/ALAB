// https://www.canva.com/design/DAFxu0_85EM/7WLacHOPNDMOl8GnhbdatQ/edit
// ALAB 308.5.1: Creating Reusable Functions
// Part 1: Thinking Functionally

//  write functions that accomplish the following:
// TODO:Take an array of numbers and return the sum.
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
let arr = [1, 2, 3, 4, 5]
let result = sumArray(arr);


// TODO: Take an array of numbers and return the average.
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}

let resultForAverage = averageArray(arr);

console.log(`The array: ${arr} \nsum= ${result} \naverage= ${resultForAverage}`);
console.log("=====================================");

// TODO: Take an array of strings and return the longest string.
function longestString(arr) {
    let longest = "";
    arr.forEach(str => {
        longest = str.length > longest.length ? str : longest;
    });
    return longest;
}

let arrStr = ['say', 'hello', 'in', 'the', 'morning'];
let longest = longestString(arrStr);
console.log(`The array: ${arrStr} \nlongest= ${longest}`);
console.log("=====================================");

// TODO: Take an array of strings, and a number and return 
// an array of the strings that are longer than the given number. 

// with using built-in function => filter
function stringsLongerThan(arr, n) {
    return arr.filter(str => str.length > n);
}

// without using built-in function
function stringsLongerThan2(arr, n) {
    let result = [];
    arr.forEach(str => {
        if (str.length > n) {
            result.push(str);
        }
    });
    return result;
}

let n = 3;
console.log(`The array: ${arrStr} \nstrings longer than ${n} are: ${stringsLongerThan(arrStr, n)}`);
console.log("=====================================");

// TODO: Take a number, n, 
// and print every number between 1 and n without using loops. 
// Use recursion.

function printNumbers(n) {
    if (n == 0)
        return;
    console.log(n);
    return printNumbers(n - 1);
}

console.log(`The numbers between 1 and 5 are:`);
printNumbers(5);
console.log("=====================================");


