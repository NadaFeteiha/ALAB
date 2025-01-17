//ALAB 308.4.1:
//Part 1: Refactoring Old Code

let csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// using helper functions and list..
function parseCSV(csvString) {
    let rows = csvString.split('\n');
    for (let j = 0; j < rows.length; j++) {
        let cells = rows[j].split(',');
        console.log(cells);
    }
}
parseCSV(csvString);
console.log("====================================");

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