// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

//? using async/await

async function getUserDataAsync(id) {
    const dbs = { db1: db1, db2: db2, db3: db3 };
    try {
        const dbName = await central(id);

        return Promise.all([dbs[dbName](id), vault(id)])
            .then(data => {
                return {
                    id,
                    ...data
                }
            })
    } catch (e) {
        throw new Error(`Error: ${e}`);
    }
}

// test cases
let userAsync1 = await getUserDataAsync(1)
    .then(data => {
        console.log("================ user 1 ====================")
        console.log(data)
    }
    ).catch(e => console.log(e))


console.log("================ user 20 ====================")
let userAsync20 = await getUserDataAsync(20)
    .catch(e => console.log(e))
