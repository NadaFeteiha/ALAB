// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";


console.log("================ central ====================")
// central: database identifies which database the users are stored within
const val = await central(1);
console.log(val); // returns-> db1

console.log("================ db1 ====================")
// db1, db2. db3: databases contain the user's basic information, 
// including username, website, and company.
const val2 = await db1(1)
console.log(val2);

console.log("================ vault ====================")
// val: The personal data for each user is contained within t
// he vault database since its access and usage is restricted by law.
const val3 = await vault(1);
console.log(val3);

console.log("======================================================================================================")

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

    // Step 1: Get db name
    return central(id)
        .then(dbName => {
            console.log(`HERE DB Name := ${dbName}`);
            return Promise.all([id, dbs[dbName](id), vault(id)]);
        }).then(([id, basic, sensitive]) => {
            console.log("*****************************************")
            console.log(`HERE Basic := ${basic.username}`);
            console.log(`HERE Sensitive := ${sensitive.name} \n ${sensitive.email} \n ${sensitive.phone}`);
            console.log("*****************************************")
            return {
                id,
                ...sensitive,
                ...basic,
            };
        }).catch(e => {
            throw new Error(`Error: ${e}`);
        });
}


//! Test cases:
//! test your code by passing it many different values for id, including:
//!     1. Valid numbers – 1 through 10 (inclusive).
//!     2. Invalid numbers – less than 1 or higher than 10.
//!     3. Invalid data types – strings, Booleans, etc.

// test case 1: Valid user id

let user = getUserData(1)
    .then(data => {
        console.log(`################# User id = 1 #################`);
        console.log(data);
        console.log(`##################################`);
    });


let user3 = getUserData(3)
    .then(data => {
        console.log(`################# User id = 3 #################`);
        console.log(data);
        console.log(`######################################`);
    }).catch(e => {
        console.log(e);
    });

let user10 = getUserData(10)
    .then(data => {
        console.log(`################# User id = 10 #################`);
        console.log(data);
        console.log(`######################################`);
    }).catch(e => {
        console.log(e);
    });

// test case 2: Invalid user id
let user0 = getUserData(0)
    .then(data => {
        console.log(`################# User id = 0 #################`);
        console.log(data);
        console.log(`######################################`);
    })
    .catch(e => {
        console.log(e);
    });


let userN = getUserData(-1)
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(`################# User id = -1 #################`);
        console.log(e);
    });

let user20 = getUserData(20)
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(`################# User id = 20 #################`);
        console.log(e);
    });

// test case 3: Invalid data types
let userS = getUserData('S')
    .then(data => {
        console.log(data);
    }).catch(e => {
        console.log(`################# User id = S #################`);
        console.log(e);
    });
