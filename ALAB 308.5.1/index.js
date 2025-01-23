// https://www.canva.com/design/DAFxu0_85EM/7WLacHOPNDMOl8GnhbdatQ/edit
// ALAB 308.5.1: Creating Reusable Functions
// Part 1: Thinking Functionally
//  write functions that accomplish the following:

// TODO:Part 1: Take an array of numbers and return the sum.
function sumArray2(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}

//another way to implement the function using reduce
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

let arr = [1, 2, 3, 4, 5]
let result = sumArray(arr);
let result2 = sumArray2(arr);
console.log(`The array: ${arr} \nsum= ${result} \nsum= ${result2}`);
console.log("=====================================");


// TODO:Part 1: Take an array of numbers and return the average.
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}

let resultForAverage = averageArray(arr);

console.log(`The array: ${arr} \nsum= ${result} \naverage= ${resultForAverage}`);
console.log("=====================================");

// TODO:Part 1: Take an array of strings and return the longest string.
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

// TODO:Part 1: Take an array of strings, and a number and 
// TODO: return an array of the strings that are longer than the given number. 

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

// with using built-in function => filter
function stringsLongerThan(arr, n) {
    return arr.filter(str => str.length > n);
}

let n = 3;
console.log(`The array: ${arrStr} \nstrings longer than ${n} are :`);
console.log(`Without the filter function \n${stringsLongerThan2(arrStr, n)}`);
console.log(`With the filter function \n${stringsLongerThan(arrStr, n)}`);
console.log("=====================================");

// TODO:Part 1: Take a number, n, and print every number between 1 and n recursion.
// recursion 
function printNumbers(n) {
    if (n == 1)
        return;
    console.log(n);
    return printNumbers(n - 1);
}

// with loop
function printNumbers2(n) {
    for (let i = n; i > 1; i--) {
        console.log(i);
    }
}

console.log(`The numbers between 1 and 5 are:`);
console.log("recursion")
printNumbers(5);

console.log("loop")
printNumbers2(5);
console.log("=====================================");

//*********************************************************************************** */
console.log("################################### Part 2 ################################################");
// Part 2: Thinking Methodically
const input = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]

//TODO: Sort the array by age.
let sortedByAge = input.sort((a, b) => a.age - b.age);
console.log(`sorted by age: `);
console.log(sortedByAge);
console.log("=====================================");

//TODO: Filter the array to remove entries with an age greater than 50.
let filteredByAge = input.filter(obj => obj.age > 50);
console.log(`filtered by age greater than 50 :`);
console.log(filteredByAge);
console.log("=====================================");

//TODO: Map the array to change the “occupation” key to “job” and increment every age by 1.
// deep copy the array
let copyInput = JSON.parse(JSON.stringify(input));
let output = copyInput.map(
    obj => {
        obj.job = obj.occupation;
        obj.age = parseInt(obj.age) + 1;
        delete obj.occupation;
        return obj;
    }
);
console.log(`The output after mapping:`);
console.log(output);
console.log("=====================================");

//TODO: Use the reduce method to calculate the sum of the ages.
//TODO: Then use the result to calculate the average age.
const totalAge = input.reduce((sum, person) => sum + parseInt(person.age), 0);
console.log("Sum of ages:", totalAge);

let averageAge = totalAge / input.length;
console.log(`The average age is: ${averageAge}`);
console.log("=====================================");

//*************************************************************************************/
console.log("################################### Part 3 ################################################");
// Part 3: Thinking Critically

