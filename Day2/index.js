console.log("Day 2")

// Variables

// var: Function-scoped, can be redeclared (not recommended)
// let: Block-scoped, can be reassigned
// const: Block-scoped, cannot be reassigned

let age = 25

let age = 26 // Error: Identifier 'age' has already been declared
age = 30 // Valid reassignment

var name = "Alice"
var name = "Bob" // No error, but not recommended

const pi = 3.14
pi = 3.14159 // Error: Assignment to constant variable

salary = 500000

salary = null;

let name, salary, department //undefined

// Complex Data types

//object
let person = {
    name: "John",
    age: 30
}

let arr = [1,2,4,5]

