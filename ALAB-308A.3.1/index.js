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
    const dbs = { db1: db1, db2: db2, db3: db3 };

    // Step 1: Get db name
    const result = central(id)
        .then(dbName => {
            console.log(`HERE DB Name := ${dbName}`);
            return Promise.all([id, dbs[dbName](id), vault(id)]);
        }).then(([id, basic, userInfo]) => {
            console.log("*****************************************")
            console.log(`HERE Basic := ${basic.username}`);
            console.log(`HERE Info := ${userInfo.name} \n ${userInfo.email} \n ${userInfo.phone}`);
            console.log("*****************************************")
            return {
                id,
                name: userInfo.name,
                email: userInfo.email,
                phone: userInfo.phone,
                username: basic.username,
                address: { ...userInfo.address },
                company: { ...basic.company },
                website: basic.website
            };
        }).catch(e => {
            throw new Error(`Error: ${e}`);
        });

    return result;
}


//! Test cases:
//! test your code by passing it many different values for id, including:
//!     1. Valid numbers – 1 through 10 (inclusive).
//!     2. Invalid numbers – less than 1 or higher than 10.
//!     3. Invalid data types – strings, Booleans, etc.

// test case 1: Valid user id

let user = getUserData(1)
    .then(data => resoledPromise(1, data))
    .catch(e => rejectedPromise(1, e));

let user3 = getUserData(3)
    .then(data => resoledPromise(3, data))
    .catch(e => rejectedPromise(3, e));

let user10 = getUserData(10)
    .then(data => resoledPromise(10, data))
    .catch(e => rejectedPromise(10, e));

// test case 2: Invalid user id
let user0 = getUserData(0)
    .then(data => resoledPromise(0, data))
    .catch(e => rejectedPromise(0, e));

let userN = getUserData(-1)
    .then(data => resoledPromise(-1, data))
    .catch(e => rejectedPromise(-1, e));

let user20 = getUserData(20)
    .then(data => resoledPromise(20, data))
    .catch(e => rejectedPromise(20, e));

// test case 3: Invalid data types
let userS = getUserData('S')
    .then(data => {
        console.log(data);
    }).catch(e => {
        console.log(`################# User id = S #################`);
        console.log(e);
    });


// Helper functions
function resoledPromise(id, data) {
    console.log(`################# User id = ${id} #################`);
    console.log(data);
    console.log(`##################################`);
}

function rejectedPromise(id, error) {
    console.log(`################# User id = ${id} #################`);
    console.log(error);
    console.log(`##################################`);
}