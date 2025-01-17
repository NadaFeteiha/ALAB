//ALAB 308.4.1:
//TODO: Part 1: Refactoring Old Code

let csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// using helper functions and list..
function parseCSV(csvString) {
    let rows = csvString.split('\n');
    for (let j = 0; j < rows.length; j++) {
        let cells = rows[j].split(',');
        console.log(cells);
    }
}
// parseCSV(csvString);
// console.log("====================================");

// using list without helper func..
function parseTable(csvString) {
    const table = [];
    let row = [];
    let cell = "";

    for (let i = 0; i < csvString.length; i++) {
        const char = csvString[i];

        if (char === ',') {
            row.push(cell);
            cell = "";
        } else if (char === '\n') {
            row.push(cell);
            table.push(row);
            cell = "";
            row = [];
        } else {
            cell += char;
        }
    }

    if (cell.length > 0 || row.length > 0) {
        row.push(cell);
        table.push(row);
    }

    return table;
}

// fuction to print table in a formatted way..
function printTabel(table) {
    for (let i = 0; i < table.length; i++) {
        if (i === 0) {
            console.log("-----------------------------------------------------");
        }

        let cellStr = '';
        for (let j = 0; j < table[i].length; j++) {
            cellStr += table[i][j];
            if (j < table[i].length - 1) {
                if (i == 0) {
                    cellStr += " | ";
                } else {
                    cellStr += "    |     ";
                }
            }
        }
        console.log(cellStr);
        console.log("-----------------------------------------------------");
    }
}
const table = parseTable(csvString);
printTabel(table);

console.log("====================================");

//TODO: Part 2: Expanding Functionality
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
// This should be calculated dynamically based on the first row of data.
let rows = table.length;
let columns = table[0].length;
console.log(`Number of rows: ${rows}`);
console.log(`Number of columns: ${columns}`);
console.log("Tabel is already done as 2 dimentional array from part 1");
console.log("====================================");


console.log("**************** Part 3 ***********************");
//TODO: Part 3: Transforming Data
// For each row of data in the result array produced by your code above,
// create an object where the key of each value is the heading for that value’s column.

// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, 
// you do not need to create an object for the heading row itself
let csvString2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Dr's Assistant,26"
function createObject(csvString) {
    const table = parseTable(csvString);
    const headings = table[0];

    let objects = [];
    // lowercase the headings.
    for (let i = 0; i < headings.length; i++) {
        headings[i] = headings[i].toLowerCase();
    }

    // start from 1 to skip the headings.
    for (let i = 1; i < table.length; i++) {
        let obj = {};
        for (let j = 0; j < table[i].length; j++) {
            obj[headings[j]] = table[i][j];
        }
        objects.push(obj);
    }
    return objects;
}

console.log(createObject(csvString2));
console.log("====================================");

console.log("**************** Part 4 ***********************");
//TODO: Part 4: Sorting and Manipulating Data
// 1.Remove the last element from the sorted array.
// 2.Insert the following object at index 1:
//     { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// 3.Add the following object to the end of the array:
//      { id: "7", name: "Bilbo", occupation: "None", age: "111" }

const objects = createObject(csvString2);
// First sort the objects by Id.
const objectsSortedID = objects.sort((a, b) => a.id - b.id);
console.log(`Sorted by ID:`);
objectsSortedID.forEach(obj => console.log(obj));

// Remove the last element
objectsSortedID.pop();
console.log(`After removing last element:`);
objectsSortedID.forEach(obj => console.log(obj));

// TODO: Insert the object at index 1
const obj1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

// create a new array by adding the object at index 1.
const finalOutput = [];
for (let i = 0; i < objectsSortedID.length; i++) {
    if (i === 1) {
        finalOutput.push(obj1);
    }
    finalOutput.push(objectsSortedID[i]);
}
console.log(`After inserting object at index 1:`);
finalOutput.forEach(obj => console.log(obj));

// TODO: Add the object to the end of the array.
const additionalObg = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
finalOutput.push(additionalObg);

console.log(`After adding object to the end of the array:`);
finalOutput.forEach(obj => console.log(obj));


// Another way to do the same thing.
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
const result = [objectsSortedID[0], obj1, ...objectsSortedID.slice(1), additionalObg];
console.log(`Better way to do the same thing:`);
result.forEach(obj => console.log(obj));


console.log("*************** Part 5 *********************");
//TODO: Part 5: Full Circle
// As a final task, transform the final set of data back into CSV format.
// There are a number of ways to do this; be creative!

function transformToCSV1(objects) {
    let csvString = "";

    // Heading row
    const keys = Object.keys(objects[0]);
    for (let i = 0; i < keys.length; i++) {
        csvString += keys[i];
        if (i < keys.length - 1) {
            csvString += ",";
        }
    }
    csvString += "\n";

    // Data rows
    for (let i = 0; i < objects.length; i++) {
        const obj = Object.values(objects[i]);
        for (let j = 0; j < obj.length; j++) {
            csvString += obj[j];
            if (j < obj.length - 1) {
                csvString += ",";
            }
        }
        csvString += "\n";
    }

    return csvString;
}

console.log("Transformed to CSV:");

// Another way using join method.
function transformToCSV2(objects) {
    let csvString = "";

    // Heading row
    const keys = Object.keys(objects[0]);
    csvString += keys.join(",") + "\n";

    // Data rows
    for (let i = 0; i < objects.length; i++) {
        const obj = Object.values(objects[i]);
        csvString += obj.join(",") + "\n";
    }

    return csvString;
}

function transformToCSV3(objects) {
    return objects.map(obj => Object.values(obj).join(",")).join("\n");
}

console.log(`first way:\n${transformToCSV1(result)} \nsecand way:\n${transformToCSV2(result)}\nThird way:\n${transformToCSV3(result)}\n`);
