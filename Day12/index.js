console.log("Day12 - Object in JS")

//creating object using object literal

let user = {
    names: "John",
    age: 40,
    "is admin": true
};

console.log(user.names) // John
console.log(user.age) // 40
console.log(user["is admin"]) // true

//fetch key dynamically
//let car = prompt("Which car do you want to buy?");

// let favCars = {
//     [car]: 10
// }

// console.log(favCars);

// Constructor Function

function Car(name, model){ // name should start with capital letter
    this.name = name;
    this.model = model;
}

// create object from constructor function

const myCar = new Car("BMW", 2020);
console.log(myCar);

console.log(myCar instanceof Car); // true

//Declare object by using new Object()

const person = new Object();
person.name = "Smith";
person.age = 30;
console.log(person);

// factory

function createUser(name, age){
    return {
        name: name,
        age: age
    }
}

const user1 = createUser("Alice", 25);
console.log(user1);

//
// function as value of a key in object

let profile ={
    names: "David",
    company: "TT",
    greet: function(){
        console.log(`${this.names} works at ${this.company}`);
    },
    address: {
        city: "New York",
        zip: 10001,
        country: "USA",
        fullAddress: function(){
            console.log("Full Address") 
        }
    }
}

console.log(profile.names);
console.log(profile.company);

profile.greet(); // David works at TT

//nested object

console.log(profile.address.country) // USA
profile.address.fullAddress(); // Full Address

console.log("address" in profile); // true

//loop all objects in loop

for (let key in profile){
    console.log(key); // names, company, greet, address
    console.log(profile[key]); // David, TT, function, object
}

console.log(Object.keys(profile)); // [ 'names', 'company', 'greet', 'address' ]
console.log(Object.values(profile)); // [ 'David', 'TT', [Function: greet], { city: 'New York', zip: 10001, country: 'USA', fullAddress: [Function: fullAddress] } ]

//Object Reference

//const fruit = {name: "Apple"}; // YB01
let fruit = {name: "Apple"}; // YB01
const oneMoreFruit = {name: "Apple"}; // YB02 // different object

console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false

fruit = oneMoreFruit; // now both point to same object YB02 - will give error as fruit is const

console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false

// Static Methods in Objects

const target = {a: 1, b: 2};
const source = {p: 4, q: 5};

const returnedObj = Object.assign(target, source); // merges source into target
// now target = {a:1, b:2, p:4, q:5}
console.log(returnedObj);
// if we have commonality between source andtarget then source will overwrite target
const target2 = {a: 1, b: 2};
const source2 = {b: 4, c: 5};

const returnedObj2 = Object.assign(target2, source2);
console.log(returnedObj2);  // { a: 1, b: 4, c: 5 }

//assign only does shallow copy and for deep cloning of nested objects we need to use structuredClone() method

const obj = {names: "Jonny"}
const obj2 = Object.assign({}, obj); // copies source to target
console.log(obj2); // { names: 'Jonny' }

console.log(obj === obj2); // false

//Deep cloning - use it only in case of nested objects value copy as assign copies reference in case of nested objects
const obj3 = {names: "Jonny", address: {city: "New York"}};
const obj4 = structuredClone(obj3);
console.log(obj4); // { names: 'Jonny', address: { city: 'New York' } }

//Object.entries() - returns array of key value pairs
const obj5 = {names: "Alice", age: 25};
console.log(Object.entries(obj5)); // [ [ 'names', 'Alice' ], [ 'age', 25 ] ]   

//Object.fromEntries() - opposite of entries - converts array of key value pairs to object
const arr = [ ['names', 'Alice'], ['age', 25] ];
const obj6 = Object.fromEntries(arr);
console.log(obj6); // { names: 'Alice', age: 25 }

//Object.freeze() - makes object immutable
const emp = {
    sal: 100,
    loc: ["NY", "LA"]
}
Object.freeze(emp);
emp.sal = 200; // will not change as emp is frozen
console.log(emp); // { sal: 100 }
console.log(Object.isFrozen(emp)); // true

//Object.seal() - allows changing existing properties but not adding new properties
const dept = {
    name: "IT"
}
Object.seal(dept);
dept.address = "NY"; // will not add new property
dept.name = "HR"; // will change existing property
console.log(dept); // { name: 'HR' }

console.log(Object.hasOwn(dept, "name")); // true
console.log(Object.hasOwn(dept, "address")); // false

// Object destructuring

console.log("Learn Object Destructuring...");
const {name} = dept;
console.log(name); // HR
const {loc, numOfloc=loc.length} = emp;
console.log(loc); // [ 'NY', 'LA' ]
console.log(numOfloc); // 2

// can also create alias

//nested destructuring
const {address: {city, zip}} = profile;
console.log(city); // New York
console.log(zip); // 10001

// Destructuring in function parameters

function display({names, company}){
    console.log(`${names} works at ${company}`);
}

//Destructure function return value

function getUser(){
    return {
        names: "Sam",
        age: 28
    }
}

const {names, age} = getUser();
console.log(names); // Sam
console.log(age); // 28

//Destructuring in loop with for of loop

const users = [
    {names: "Alice", age: 25},
    {names: "Bob", age: 30},
    {names: "Charlie", age: 35}
];

for (const {names, age} of users) {
    console.log(`${names} is ${age} years old`);
}
// Alice is 25 years old
// Bob is 30 years old
// Charlie is 35 years old  

//Optional Chaining - new syntax introduced in ES 2020

console.log("Optional Chaining...");
const student = {
    name: "John",
    address: {
        city: "New York",
        zip: 10001
    }
};

console.log(student.address?.city); // New York
console.log(student.address?.zip); // 10001
console.log(student.address?.country); // undefined
console.log(student.contact?.phone); // undefined
console.log(student.contact.phone); // gives error - optional chaining just gives undefined if property not found
