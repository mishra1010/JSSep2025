"use strict";
console.log("Day 13: The this keyword");

// The this keyword refers to the object it belongs to.

// It has different values depending on where it is used:

console.log("this at the global level", this) //window

// In a regular function, this refers to the global object (window in browsers)
function myFunction() {
    console.log("this in a regular function", this); //window
}

myFunction();

// Inside of an Object - Implicit Binding

const employee = {
    name: "John",
    age: 30,
    firstName: "John",
    lastName: "Doe",
    returnThis: function() {
        return this; //employee
    },
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`; //John Doe
    }
};

console.log("Employee name:", employee.name); //John
console.log(employee.returnThis()); //employee
console.log("Employee full name:", employee.getFullName()); //John Doe

//Inside Function

function sayName(){
    console.log("this inside a function ", this);
}

sayName(); //window --- goesto outer scope

//nested function

function outer(a){
    console.log("this in outer function", this); //window

    return function inner(b){
        console.log("this in inner function", this); //window
    }
}
const outerResult = outer(5);
outerResult(10);

// Inside arrow function

const getFood = ()=>this;
console.log("this inside arrow function", getFood()); //window

// lets check complex ways now

const food = {
    name: "Biryani",
    color: "yellow",
    //getDesc: () => `${this.name} is ${this.color}`, //arrow function ---- undefined
   // getDesc: function() { return `${this.name} is ${this.color}` } //regular function - gets implicit binding and returns answer
   //fix with arrow function
   //put scope of arroow function one level down
   getDesc: function() {
        const innerFunc = () => `${this.name} is ${this.color}`;
        return innerFunc();
   }
}
console.log("Food description:", food.getDesc());

// Explicit Binding - call, apply, bind

//call method

function greeting(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}

const user = {
    name: "Alice",
    age: 25 
}

greeting.call(user); //Hello, my name is Alice and I am 25 years old.
console.log(greeting.call(user));

// call with pass parameter

const likes = function(fav1, fav2){
    return `I like ${fav1} and ${fav2}. My name is ${this.name}.`;
}

const person = {
    name: "Bob"
}   
likes.call(person, "chocolate", "vanilla"); //I like chocolate and vanilla. My name is Bob.
console.log(likes.call(person, "chocolate", "vanilla")); // issue is number of arguments

//apply method - same as call but takes array of arguments
likes.apply(person, ["chocolate", "vanilla"]); //I like chocolate and vanilla. My name is Bob.

//bind method - returns a new function, can be invoked later
const boundLikes = likes.bind(person);
boundLikes("chocolate", "vanilla"); //I like chocolate and vanilla. My name is Bob.
console.log(boundLikes("chocolate", "vanilla"));

//object with new keyword and constructor function

const Cartoon = function(name, animal){
    this.name = name;
    this.animal = animal;
   
this.log = function(){ 
    //return `${this.name} is a ${this.animal}`;
    console.log(this.name + " is a " + this.animal);
    }
};
const tom = new Cartoon("Tom", "cat");
//console.log(tom.log()); //Tom is a cat  
tom.log(); //Tom is a cat
const jerry = new Cartoon("Jerry", "mouse");
//console.log(jerry.log()); //Jerry is a mouse
jerry.log(); //Jerry is a mouse


