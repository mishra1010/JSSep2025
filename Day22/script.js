console.log("Day 22 - Callback with Asynchronous programming");

console.log("Async JS - Cllback Functions");
console.log("start");
setTimeout(() => {
    console.log("Middle after 2 seconds");
}, 2000);
console.log("Middle");
console.log("End");

//callback function
function fn(arg){
    console.log("Function called with arg:", arg());
}

fn(function(){
    console.log("This is a callback function");
})

function greet(name, callback){
    console.log(`Hello ${name}`);
    setTimeout(() => {
        callback();
    }, 1000);
    console.log("Greeting function ended");
}

function sayBy(){
    console.log("Bye!");
}

greet("Alice", sayBy);


