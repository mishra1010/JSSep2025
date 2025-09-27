console.log("Day 10")

let names = "Dev";

function greet(){
    console.log("Hello " + names);
}

greet()

console.log(names)

{
  console.log(names + " in block")
}

//function scope

function toDo(){
    var task ="Learn JS";
    console.log(task);
}

toDo();

//console.log(task) //error task is not defined

//block scope - switch case, for

{
    let city = "Bangalore"; // if i use var this can be accessed outside as well
    console.log(city);
}

console.log(city) //error city is not defined

// Scope chain

var count = 10;

function outer(){
    //var count = 20;
    function inner(){
        //var count = 30;
        console.log(count); //30 //20 //10
    }
    inner();
    console.log(count); //20 //20 //10
}
outer();
console.log(count); //10 //10 //10

// Variable Shadowing

