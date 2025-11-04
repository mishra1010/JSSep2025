console.log("Async and Await in Javascript..");

async function foo(){
    return 101;
}

//const retVar = foo(); works and then we can use .then, .catch to handle to get result

//const retVar = await foo(); // works only inside async function, so we create async function
async function tacklePromise() {
    const result = await foo(); // waits until promise is resolved, suspends the operation for sometime
    console.log(result); // 101
}
//console.log(retVar);

tacklePromise();
console.log("I am after tacklePromise");
console.log(tacklePromise()); // returns promise pending

const errorPromise = new Promise((resolve, reject) => {
    reject("Some error occurred");
});

async function handleErrorPromise() {
    try {
        await errorPromise;
    } catch (error) {
        console.log(error); // Some error occurred  
    }
}

handleErrorPromise();