console.log("Day 6");

//Declare Function
function printMe(){
    console.log("Function called");
}

//Function as expression
const printMe2 = function(){
    console.log("Function expression called");
}

printMe()
printMe2()

function sum(a,b){
    return a+b;
}

let result = sum(10,4)

console.log(result);

function double(x){
    return x*2;
}

console.log(double(result));

//Nested Function

function outer(){
    console.log("Outer");

   return function inner(){
        console.log("Inner");
    }

    //inner();
}

let retFunc = outer();
console.log(retFunc);
console.log(retFunc());

//callback function

function foo(func){
    console.log("In foo");
    func();
}

foo(function(){
    console.log("Callback function");
})

//pure function - for same input, same output in each execution

let greetMsg = "Holla"; // this variable creates the difference now if
//  i will print 5 times, in between change the greetMSg
function greeting(name){
    //return "Hello " + name;
    return greetMsg + name;
}

console.log(greeting("DevRev"));

//HOF

function getCamera(camera){
    camera();
}

getCamera(function(){
    console.log("Camera clicked");
});

function returnFunc(){ //wrapper
    return function(){
        console.log("Returned function");
    }
}

const retFun = returnFunc();
retFun();

//Arrow Function

let greetMe = () => {
    console.log("Greet Me");
}

greetMe();

let greetMe2 = (greeting) => {
    return greeting + "great";
}

console.log(greetMe2("Hello "));

//Immediately Invokes Function Expression (IIFE)

(function(){
    console.log("IIFE called");
})();

//Recursion

function fetchWater(count){
    console.log("Fetch water called", count);
    if(count === 0){
        console.log("No more water to fetch....");
        return
    }else{
        fetchWater(count - 1);
    }
}
fetchWater(5);