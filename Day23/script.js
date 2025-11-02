console.log("Day 23 - Promises in JavaScript");
// create a promise

//constructor function

let promise = new Promise(function(resolve, reject) {
  // do a task
  // if task is successful, call resolve
  // if task fails, call reject
 resolve("Task completed successfully");
  
});

//Executor Function
// function(resolve, reject) {
 
// }

//How promises are resolved and rejected

let promise1 = new Promise(function(resolve, reject) {
  // do a task
  resolve("Task completed successfully");
});

let promise2 = new Promise(function(resolve, reject) {
  // do a task
 // reject("Task failed");
});

let anotherPromise = new Promise(function(resolve, reject) {
    resolve("I am surely going to get resolved");

    reject(new Error("I am going to get rejected")); // This will be ignored
    resolve("Ignored"); // This will also be ignored
});

//How to handle promises

//.then() method to handle resolved promises
const promise3 = new Promise(function(resolve, reject) {
    // do a task like network call(API Call/IO Operation)
    //reject("Task failed");
    resolve("Task completed successfully");
  });

promise3.then(
    (result) =>{ console.log("Promise3 resolved successfully") }, // or use null if we do not want to handle result
    //and handle only error
    //(error) =>{ console.error("Promise3 rejected") }
).catch(
    (error) =>{ console.error("Promise3 caught an error") }
).finally(() => {
    console.log("Promise3 finally executed"); // or loading = false;
});

//.catch() method to handle rejected promises


//.finally() method to execute code regardless of the promise outcome

// Promise Chaining

// return a promise from the .then() handler

//create a Promise getUser

let getUser = new Promise(function(resolve, reject) {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        id: 123,
        permissions: ['db', 'dev']
    };
    resolve(user);
});

getUser
.then((user)=>{
    console.log(`User Name: ${user.name}`);

    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve('Bangalore')
        },2000)
    })
})
.then((address) =>{
    console.log(`User Address: ${address}`);
})

// return a simple valuefrom the .then() handler

getUser
.then((user)=>{
    console.log(`User Name: ${user.name}`);
    return user.email; // returning a simple value
})
.then((email) =>{
    console.log(`User Email: ${email}`);
});

//Throw an erro9r from the .then() handler
getUser
.then((user)=>{
    console.log(`Got user: ${user.name}`);
    if(!user.permissions.includes('hr')){
        throw new Error("User is not authorized to access HR data");
    }
    return user.email;
})
.then((email) =>{
    console.log(`User Email from error: ${email}`);
})
.catch((error) =>{
    console.error(`Error: ${error.message}`);
});

// Rule thrree: rethroed errors will be caught by the nearest .catch() handler

//lets create a new promise to check this
let promise401 = new Promise(function(resolve, reject) {
    reject("401");
});
promise401
.catch((error) =>{
    console.log(error);
    if(error === "401"){
        console.log("Rethrowing 401");
        throw error;
    } else {
        //Do something else
    }
})
.then((result) =>{
    console.log(result);
})
.catch((error) =>{
    console.error(`Caught rethrown error: ${error}`);
})

//Rule 4 - .finally() handler - cleanup, garbage collection, passes the result or the error to the next 
// then or catch

let promiseFinally = new Promise(function(resolve, reject) {
    resolve("Testing Finally");
    
});

promiseFinally
.finally(() =>{
    console.log("Running finally block");
})
.then((result) =>{
    console.log(result);
});

//Rule 5 - Calling the .then() handler method multiple times on a single promise is NOT chaining

//The below is chaining but if we use promise. then, promise.then, promise.catch then its not chaining
// promise
// .then((result) =>{
//     //Do something
//     return 101;
// })
// .then((result) =>{
//     console.log(`Second handler: ${result}`); // result is 101 here
//     //throw error
// })
// .catch((error) =>{
//     console.error(`Error: ${error}`);
// });

let promise5 = new Promise(function(resolve, reject) {
    resolve(10);   
});

promise5
.then((value) =>{
    value++;
    return value; // returns 11
})
promise5
.then((value) =>{
    value = value + 10;
    return value; // returns 20
})
promise5
.then((value) =>{
    value = value + 20;
    console.log(`Promise5 Final Value: ${value}`);
    return value; // returns 30
});

//now lets chain and see the difference in output
let promise6 = new Promise(function(resolve, reject) {
    resolve(10);   
});

promise6
.then((value) =>{
    value++;
    return value; // returns 11
})
.then((value) =>{
    value = value + 10;
    return value; // returns 21
})
.then((value) =>{
    value = value + 20;
    console.log(`Promise6 Final Value: ${value}`);
    return value; // returns 41
});

//Handle Multiple Promises from multiple async operations

//promise.all() - waits for all promises to resolve or any to reject, returns an array of results
//if any 1 fails, then catch error block is executed

const BUBASAUR_POKEMONs_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONs_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONs_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

let promise_1 = getPromise(BUBASAUR_POKEMONs_URL);
let promise_2 = getPromise(RATICATE_POKEMONs_URL);
let promise_3 = getPromise(KAKUNA_POKEMONs_URL);

Promise.all([promise_1, promise_2, promise_3])
.then((result) =>{
    console.log(result);
})
.catch((error) =>{
    console.error(`Error in Promise.all: ${error}`); // if we change any api url then we get error and 
    // this block is executed
});

// promise.any() - waits for any one promise to resolve, returns the result of the first resolved promise

Promise.any([promise_1, promise_2, promise_3])
.then((result) =>{
    console.log(result);
})
.catch((error) =>{
    console.error(`Error in Promise.all: ${error}`); // if we change any api url then we get error and 
    // this block is executed
});

//Promise.allsettled() - waits for all promises to settle (resolve or reject), returns an array of outcome objects

Promise.allSettled([promise_1, promise_2, promise_3]) // use this to get cear idea of error
.then((results) =>{
    console.log(results);
});

//Promise.race() - waits for the first promise to settle (resolve or reject), returns the result or error of that promise
// returns the quickest one that settles or gets resolved

Promise.race([promise_1, promise_2, promise_3])
.then((result) =>{
    console.log(result);
})
.catch((error) =>{
    console.error(`Error in Promise.race: ${error}`);
});

//Promise.reject() - creates a promise that is rejected with a given reason
let rejectedPromise = new Promise((resolve, reject) => reject(value));

//Promise.resolve() - creates a promise that is resolved with a given value
//Promise.resolve() is same as

let resolvedPromise = new Promise(resolve => resolve(value));

//How to cancel a promise?
// There is no direct way to cancel a promise in JavaScript. However, you can use techniques like
//AbortController for fetch requests or implement custom cancellation logic using flags or tokens.
//Example using AbortController with fetch API later. Like we order in amazon when the order is in progress and we have not received it yet 
// since the first agreement is already done, we cannot cancel it but there is a process to cancel order. same is with promises.

