console.log("Day 15: JS Arrays");

const mixedArray = [100, true, "JS", {}];

const salad = ['🍎', '🥬', '🥒', '🍅', '🥑'];

//array creation using constructor function

function Car(model){
    this.model = model;
}

const bmwCar =new Car("BMW X1");
console.log(bmwCar);

const two = new Array(2);
console.log(two); // creates an array with 2 empty slots

const three = new Array(1, 3);
console.log(three); // creates an array with 2 elements 1 and 3

const numb = new Array(1,2);
console.log(numb[1]); // prints 2

for (let i=0; i<=salad.length-1; i++){
    console.log(`Element at index ${i} is ${salad[i]}`);
}

//add element in array

salad.push('🌽'); // adds element at the end and push method returns the number of elements in salad
console.log(salad)

salad.unshift('🍇'); // adds element at the beginning and returns the number of elements in salad
console.log(salad)

//remove element from array
const poppedElement = salad.pop(); // removes the last element and returns the removed element
console.log(salad);
console.log(`Popped element is ${poppedElement}`);

const shiftedElement = salad.shift(); // removes the first element and returns the removed element
console.log(salad);
console.log(`Shifted element is ${shiftedElement}`);

//slice() - copy

const saladCopy = salad.slice();
console.log(salad);
console.log(saladCopy);
console.log(salad === saladCopy); // false

//isArray()
console.log(Array.isArray(salad)); // true
console.log(Array.isArray({})); // false
console.log(Array.isArray("JS")); // false
console.log(Array.isArray(100)); // false
console.log(Array.isArray([true])); // true
console.log(Array.isArray({'tomato':'🍅'})); // true

// Array Destructuring
const [apple, lettuce, cucumber, tomato, avocado] = ['🍎', '🥬', '🥒', '🍅', '🥑'];
console.log(apple, lettuce, cucumber, tomato, avocado);

//const apple = salad[0];
//const lettuce = salad[1];

const [tomato1, mushroom = '🍄', carrot = '🥕'] = ['🍅'];
console.log(tomato1, mushroom, carrot);

const [apple1, lettuce1, , , avocado1] = ['🍎', '🥬', '🥒', '🍅', '🥑']; //skip values using destructuring

//Nested Array Destructuring

//[1,2,[4,5]]

let fruits1 = ['🍎', '🥬', '🥒',['🍄', '🥕']];
const veg = fruits1[3]; //veg = ['🍄', '🥕 ']
const carrot1 = veg[1]; // carrot = '🥕'
fruits1[4] = '🌽'; // adding element at index  4
console.log(fruits1[3][1] ); // prints '🥕'

//how to use destructuring to get carrot directly --- no need to use this
const [ , , , [ , carrot2], corn = '🌽'] = ['🍎', '🥬', '🥒',['🍄', '🥕']];

//Rest and spread operator


