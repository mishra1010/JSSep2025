const ids = ["1", "2", "3", "4", "5"];

const fetchData = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        
};

const loopFetches = () => {
    for (let i = 0; i < ids.length; i++) {
        console.log(`Fetching data for ID: ${ids[i]}`);
        const response = fetchData(ids[i]);

        response.then((response)=>{
            response.json().then((data)=>{
                console.log(
                    `
                    Id: ${data?.id}
                    Name: ${data?.name}
                    Company: ${data?.company?.name}
                    Address: ${data?.address?.city}`
                )
        });
        });
    }
}

//loopFetches();

// lets see if the loop order problem with for loop can be solved with async await

const loopFetchesAsync = async () => {
    for (let i = 0; i < ids.length; i++) {
        console.log(`Fetching data for ID: ${ids[i]}`);
        const response = await fetchData(ids[i]);
        const data =  await response.json();
        console.log(
            `
            Id: ${data?.id}
            Name: ${data?.name}
            Company: ${data?.company?.name}
            Address: ${data?.address?.city}`
        );
    }

}

//1.loopFetchesAsync(); using PromiseAll instead of for loop

const loopAll = async () => {
    let responses = await Promise.allSettled(ids.map((id) => fetchData(id)));
    let data = await Promise.allSettled(
        responses.map((res) => res.status === "fulfilled" ? res.value.json() : null)
    )
    console.log(responses);
    console.log(data);
    data.map((userInfo)=>{
        const user = userInfo.value;
        console.log(`***Fetching details of ${user?.name}***`);
        console.log(
            `
            Id: ${user?.id}
            Name: ${user?.name}
            Company: ${user?.company?.name}
            Address: ${user?.address?.city}`
        );
    });
};

loopAll();

//2. Promise chain vs No chain

const ten = new Promise((resolve, reject)=>{
    resolve(10);
});

//resolve promise
ten
.then((value)=>{
    console.log("Value is:", value);
    return value * 2;
})
.then((value)=>{
    console.log("Value is:", value);
    return value * 10; //200
})
.then((value)=>{
    console.log("Value is:", value);
    return value - 10; //190
})

// if we go with No chain and do ten. then() each time the result is different and its not chaining

//3. Not handling errors with Promises

const oddEven = (num) => {
    return new Promise((resolve, reject)=>{
        if(num % 2 === 0){
            resolve("Even");
        }else{
            reject(new Error("Odd"));
        }
    });
};

oddEven(11)
 .then((result)=>{
    console.log("Result is:", result);
}).catch((error)=>{
    console.error("Error is:", error.message);
});

//4. Missing a function in .then() handler

const hello = Promise.resolve("Hello");

hello.then(()=>"World").then((result)=> console.log(result));

//5. Using Promises for Synchronous operations - check if we are blocking synchronous calls in async methods

const cache = {
    "xx@yy.com":{
        name: "John Doe",
        org: "Example Inc."
    },
};

const getDataV1 = (email) => 
    {
    const userFromCache = cache[email];
    if (userFromCache) {
        console.log(`User details ${JSON.stringify(userFromCache)}`);
        
    } else {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
            //const userFromCache = cache[email];
                // if(!userFromCache){
                //     reject(new Error("No data found in cache"));
                // }else {
                console.log("Make the call and update cache");
            
        },2000)      
    });
}
    };

getDataV1("xx@yy.com");

// 6: Using unnecessary try-catch with promises

//redundant try catch

new Promise((resolve, reject)=>{ // remove try and catch here and .then and catch should be fine
    try{
        const value = getValue(); // assume this function may throw error
        // do something with value
        resolve(value);
    } catch (error) {
        reject(error);     
    }
})
.then(result=>console.log("Result is:", result))
.catch(error=>console.error("Error is:", error));
