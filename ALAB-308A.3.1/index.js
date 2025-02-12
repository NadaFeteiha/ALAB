// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

// todo: solve by =>    Promise chaining via then() statements
// todo: then =>        async/await syntax

// ? GIVEN  =>  I have 3 diﬀerent databases 
// ?            each database request takes 100ms to respond

//todo: your function must complete in 200ms or less
// todo: Make use of Promise.all to handle requests concurrently where applicable.



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


