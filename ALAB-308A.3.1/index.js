// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

// central: database identifies which database the users are stored within
const val = await central(1);
console.log(val); // returns-> db1

// db1, db2. db3: databases contain the user's basic information, including username, website, and company.
const val2 = await db1(1)
console.log(val2);

// val: The personal data for each user is contained within the vault database since its access and usage is restricted by law.
const val3 = await vault(1);
console.log(val3);


// todo: solve by =>    Promise chaining via then() statements
// todo: then =>        async/await syntax

// ? GIVEN  =>  I have 3 diﬀerent databases 
// ?            each database request takes 100ms to respond

// todo: your function must complete in 200ms or less
// todo: Make use of Promise.all to handle requests concurrently where applicable.


//? central: is db identifies which db the users are stored within.
//? return a string that identifies which db to access for that user's information


function getUserData(id) {
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3
    };

}


//! Test cases:
//! test your code by passing it many different values for id, including:
//!     1. Valid numbers – 1 through 10 (inclusive).
//!     2. Invalid numbers – less than 1 or higher than 10.
//!     3. Invalid data types – strings, Booleans, etc.


