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

//Rest operator
const [apple2,cauliflower, ...rest] = ['🍎', '🥬', '🥒',['🍄', '🥕']]; //rest operator
console.log(apple2,cauliflower,rest);

//Spread operator
const newSalad = [...salad, '🌽', '🍇']; //spread operator
console.log(newSalad);

newSalad === salad; // false

//Swapping using destructuring

let first = '😔';
let second = '😊';

[first, second] = [second, first];  //swapping
console.log(first, second); // prints 😊 😔

//Merge

const emotions = ['😔', '😊', '😠', '😢'];
const veggies = ['🥬', '🥒', '🍅', '🥑'];
const emotionalveggies = [...emotions, ...veggies];
console.log(emotionalveggies);

//length property
console.log(salad.length); // prints 5

//array can hold 2**32-1 elements
const arr = new Array(2**32-1);
console.log(arr.length); // prints 4294967295

//arr.length = -1; // RangeError: Invalid array length

//arr.length = 5.5; // RangeError: Invalid array length 

//const arr1 = new Array(-5); // RangeError: Invalid array length

const arr2 = [11,12, 45];
arr2.length = 6; // increase length
console.log(arr2); // prints [ 11, 12, 45, <3 empty items> ]

//JavaScript Array Methods

//concat()
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2);
console.log(array3); // prints [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//Join()
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // prints Fire,Air,Water
console.log(elements.join('')); // prints FireAirWater
console.log(elements.join('-')); // prints Fire-Air-Water

[].join(); // prints ''
console.log([1].join()); // prints '1'

//fill() - mutable method
const filledArray = new Array(5).fill('JS');
console.log(filledArray); // prints [ 'JS', 'JS', 'JS', 'JS', 'JS' ]

const colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.fill('Pink', 1, 3);
console.log(colors); // prints [ 'Red', 'Pink', 'Pink', 'Yellow' ]  


// includes()

const names = ['Alice', 'Bob', 'Charlie'];
console.log(names.includes('Bob')); // prints true
console.log(names.includes('David')); // prints false

//indexOf() and lastIndexOf()
const numbers = [1, 2, 3, 2, 4, 2];
console.log(numbers.indexOf(2)); // prints 1
console.log(numbers.lastIndexOf(2)); // prints 5
console.log(numbers.indexOf(5)); // prints -1

//reverse() - mutable method
const names1 = ['Alice', 'Bob', 'Charlie'];
names1.reverse();
console.log(names1); // prints [ 'Charlie', 'Bob', 'Alice' ]

//sort() - mutable method
const fruits2 = ['Banana', 'Apple', 'Mango', 'Cherry'];
fruits2.sort();
console.log(fruits2); // prints [ 'Apple', 'Banana', 'Cherry', 'Mango' ]  

const artists = ['Picasso', 'Van Gogh', 'Da Vinci', 'Rembrandt'];
artists.sort();
console.log(artists); // prints [ 'Da Vinci', 'Picasso', 'Rembrandt', 'Van Gogh' ]  

artists.sort(function(a, b){
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
});
console.log(artists); // prints [ 'Van Gogh', 'Rembrandt', 'Picasso', 'Da Vinci' ] Descending using comparator function

let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ //return a===b ? 0 : a<b ? 1 : -1
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
});
console.log(points); // prints [ 100, 40, 25, 10, 5, 1 ] Descending order

//splice() - mutable method - splice(start, delectionCount, item1, item2, ...)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at index 1 and returns empty array as we are not removing any element
console.log(months); // prints [ 'Jan', 'Feb', 'March', 'April', 'June' ]

const names3 = ['Alice', 'Bob', 'Charlie', 'David'];
const removedNames = names3.splice(1, 2, 'Eve', 'Frank'); // removes 2 elements from index 1 and adds Eve and Frank
console.log(names3); // prints [ 'Alice', 'Eve', 'Frank', 'David' ]

const names4 = ['Alice', 'Bob', 'Charlie', 'David'];
names4.splice(2,1,'zack'); // names4.splice is not a function

console.log(names4); // prints [ 'Alice', 'Bob', 'zack', 'David' ]

//at()

const junkFoodILove = ['🍕', '🍔', '🍟', '🌭'];
console.log(junkFoodILove.at(0)); // prints 🍕
console.log(junkFoodILove.at(-1)); // prints 🌭
console.log(junkFoodILove[0]); // prints 🍕
console.log(junkFoodILove[junkFoodILove.length -1]); // prints 🌭
console.log(junkFoodILove.at(4)); // prints undefined

//copyWithin() - mutable method
const array4 = ['a', 'b', 'c', 'd', 'e'];
array4.copyWithin(0, 3); // copies elements from index 3 to end and paste at index 0
console.log(array4); // prints [ 'd', 'e', 'c', 'd', 'e' ]
const array5 = ['a', 'b', 'c', 'd', 'e'];
array5.copyWithin(1, 3, 4); // copies element from index 3 to 4 (4 not included) and paste at index 1
console.log(array5); // prints [ 'a', 'd', 'c', 'd', 'e' ]

// flat()
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flattenedArray1 = nestedArray.flat(); // default depth is 1
console.log(flattenedArray1); // prints [ 1, 2, 3, 4, [ 5, 6 ] ]
const flattenedArray2 = nestedArray.flat(2); // depth is 2
console.log(flattenedArray2); // prints [ 1, 2, 3, 4, 5, 6 ]
const flattenedArray3 = nestedArray.flat(Infinity); // infinite depth
console.log(flattenedArray3); // prints [ 1, 2, 3, 4, 5, 6 ]

//grouping using array

{
    const employees = [
        {name: 'Alice', department: 'HR', salary: 5000},
        {name: 'Bob', department: 'Engineering', salary: 3000},
        {name: 'Charlie', department: 'HR', salary: 7000},
        {name: 'David', department: 'Engineering', salary: 1500},
        {name: 'Eve', department: 'Sales', salary: 6000},
    ];
    const groupedEmployees = Object.groupBy(employees, employee => employee.department);
    console.log(groupedEmployees);

    const groupedByMoreThan5000 = Object.groupBy(employees, ({salary}) => {return salary >= 5000 ? "More than 5k" : "Less than 5k"});
    console.log(groupedByMoreThan5000);
}

// toReversed() - immutable method

const items = [1, 2, 3, 4, 5];
const reversedItems = items.toReversed();
console.log(items); // prints [ 1, 2, 3, 4, 5 ]
console.log(reversedItems); // prints [ 5, 4, 3, 2, 1 ]
// Example to illustrate arrow function return behavior
// Arrow functions with implicit return (no braces)
const addImplicit = (a, b) => a + b; // returns a + b
console.log(addImplicit(2, 3)); // prints 5

// toSorted() - immutable method
const nums = [40, 100, 1, 5, 25, 10];
const sortedNums = nums.toSorted((a, b) => a - b);
console.log(nums); // prints [ 40, 100, 1, 5, 25, 10 ]
console.log(sortedNums); // prints [ 1, 5, 10, 25, 40, 100 ]

const ymonths = ['March', 'Jan', 'Feb', 'Dec'];
const sortedMonths = ymonths.toSorted();
console.log(ymonths); // prints [ 'March', 'Jan', 'Feb', 'Dec' ]
console.log(sortedMonths); // prints [ 'Dec', 'Feb', 'Jan', 'March' ]

//toSpliced() - immutable method
const alphabets = ['a', 'b', 'c', 'd', 'e'];
const splicedAlphabets = alphabets.toSpliced(1, 2, 'x', 'y');
console.log(alphabets); // prints [ 'a', 'b', 'c', 'd', 'e' ]
console.log(splicedAlphabets); // prints [ 'a', 'x', 'y', 'd', 'e' ]

// with() - immutable method

// with(index, value)
const letters = ['a', 'b', 'c', 'd'];
const newLetters = letters.with(2, 'z');
console.log(letters); // prints [ 'a', 'b', 'c', 'd' ]
console.log(newLetters); // prints [ 'a', 'b', 'z', 'd' ]

// Array Like - HTMLcollections, arguments

// Examples of array-like structures

{key: "value"} // object
[1,2,3] //array

const arr_like = {0: 'I', 1: 'am', 2: 'array-like', length: 3};
// Convert array-like object to array
console.log(arr_like);
arr_like[2]; // prints 'array-like'
arr_like.length; // prints 3

console.log(Array.isArray(arr_like)); // prints false

console.log(arr_like instanceof Object); // prints true

function checkArgs() {
    console.log("Array Like Args",arguments);

    const argArr = [...arguments]; // convert array-like to array using spread operator
    console.log("Converted to Array:", argArr);

    argArr.forEach((elem) => {
        console.log("Element:", elem);
    });

   // arguments.forEach((elem) => {

  //  }); // TypeError: arguments.forEach is not a function
} 

checkArgs(1,45); // prints [Arguments] { '0': 1, '1': 45 }

//convery array-like to array to access each of the elements - use spread operator - see above

// Also another method is there - Array.from() static method

//Array.from() can be used to convert array-like objects to arrays.

console.log("HTML Collection as Array Like", document.getElementsByTagName('li')); // HTMLCollection as array-like
const liArray = Array.from(document.getElementsByTagName('li')); // convert HTMLCollection to array
console.log("Converted HTML Collection to Array:", liArray);

// fromAsync()

const collectionPromise = Array.fromAsync(document.getElementsByTagName('li')); // here we get a promise in return while array.from() returns array. We need 
// to handle promise to get access to the array elements
console.log("Collection Array:", collectionPromise);

collectionPromise.then((value) => console.log("From Async Resolved Array:", value));

const ret = Array.fromAsync({
    0: Promise.resolve('a'),
    1: Promise.resolve('b'),
    2: Promise.resolve('c'),
    length: 3
}).then((value) => console.log(value)) // prints [ 'a', 'b', 'c' ]

console.log("Returned Value:", ret);

// of()

const a = new Array(2,3,4); // creates array with elements 2,3,4
const b = [4,5,6]; // creates array with elements 4,5,6

const c = Array.of(2, true, 'test', {"name":"JS"}, [1,2,3]); // creates array with elements 2,true,'test',{"name":"JS"}

console.log(c); // prints [ 2, true, 'test', { name: 'JS' }, [ 1, 2, 3 ] ]

//Array Iterator Methods 

//filter () - returns a new array with all elements that pass the test implemented by the provided function 

let customers = [
    {
        f_name: 'John',
        l_name: 'Doe',
        age: 28,
        gender: 'male',
        married: true,
        expense: 3000,
        purchased: ["Toys", "Books"]
    },
    {
        f_name: 'Jane',
        l_name: 'Smith',
        age: 22,
        gender: 'female',
        married: false,
        expense: 1500,
        purchased: ["Books"]
    },
    {
        f_name: 'Jim',
        l_name: 'Beam',
        age: 35,
        gender: 'male',
        married: true,
        expense: 4000,
        purchased: ["Electronics", "Toys"]
    }
]

//const newArr = customers.filter((element, index, array)
const above25cust = customers.filter((customer) => {
    return customer.age >= 25;
});
console.log("Above 25 customers list", above25cust); // prints customers with age >= 25

//map() - creates a new array populated with the results of calling a provided function on every element in the calling array. Transforms title with fullname

const custFullNames = customers.map((customer) => {
    customer['full_name']=`${customer.f_name} ${customer.l_name}`;
    return customer;
});

console.log("Customer Full Names:", custFullNames); // prints [ 'John Doe', 'Jane Smith', 'Jim Beam' ]

//Reduce() - executes a reducer function on each element of the array, resulting in a single output value.

//Avg age of a customer who have purchased a book , check this analytics using reduce() function
//A reducer function is a cllback function to be called on each element of the array

//arr.reduce((accumulator, currentValue, currentIndex, array) => { ... }, initialValue)

//function reducer(accumulator, currentValue, currentIndex, array){
    //accumulator - accumulates the callback's return values
    //currentValue - the current element being processed in the array
    //currentIndex - index of current element being processed in the array
    //array - the array reduce() was called upon


const redarray = [1,2,3,4,5];
//redarray.reduce((accumulator, currentValue, currentIndex, array)
const result = redarray.reduce((accumulator, currentValue) => {
    //console.log(`Accumulator: ${accumulator}, CurrentValue: ${currentValue}, CurrentIndex: ${currentIndex}, Array: ${array}`);
    return accumulator + currentValue;
}, 0); // initial value is 0

console.log("Sum of array elements using reduce():", result); // prints 15

let cnt = 0;
const total = customers.reduce((accumulator, customer) => {
    if (customer.purchased.includes("Books")) {
        cnt += 1;
        accumulator += customer.age;
    }
    return accumulator;
},0);

console.log('Customer Avg age Purchased Book:', Math.floor(total/cnt))

//reduceRight() - works same as reduce() but from right to left - not much used

let numbs = [100, 40, 15];

const subsResult = numbs.reduceRight((accumulator, currentValue) => {
    return accumulator - currentValue;
});// initial value is 15

console.log("Subtraction Result using reduceRight():", subsResult); // prints -155

//with normal reduce(), it executes from left to right

// Some() - tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns a Boolean value. Do we have younger customer less than 25 years

// arr.some((element, index, array) => {
//     return element < 25;
// })

const hasYoungCustomers = customers.some((customer) => { 
    return customer.age <25;    
});

console.log("Has Young Customer(Age<25):", hasYoungCustomers); // prints true

//every() - tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value. Are all customers older than 18 years
const allAbove18 = customers.every((customer) => {
    return customer.age > 18;
});

console.log("All Customers Above 18:", allAbove18); // prints true

//find() - Find the youngest customer

const youngestCustomer = customers.find((customer) => {
    return customer.age < 25;
});

console.log("Youngest Customer:", youngestCustomer); // prints the first customer with age < 25

//findIndex() - Find the index of the youngest customer

const youngestCustomerIndex = customers.findIndex((customer) => {
    return customer.age < 25;
}); 
console.log("Youngest Customer Index:", youngestCustomerIndex); // prints the index of the first customer with age < 25

//findLastIndex() - Find the index of the last customer younger than 30
//findLast() - Find the last customer younger than 30 (goes from right to left)

// Combine methods by using Array chaining

//Get the total amount spent by married customers

//reduce
//map
//filter

//find all married customers

const marriedCustomers = customers.filter((customer) => {
    return customer.married;
});
const expenseMapped = marriedCustomers.map((marriedCustomer) => {
    return marriedCustomer.expense;
}); // get expenses array
const totalExpense = expenseMapped.reduce((accumulator, expense) => {
    return accumulator + expense;
}, 0);

console.log("Total Expense by Married Customers:", totalExpense); // prints 7000

//Simplified code with chaining

const totalExpenseChained = customers
    .filter((customer) => customer.married)
    .map((marriedCustomer) => marriedCustomer.expense)
    .reduce((accumulator, expense) => accumulator + expense, 0);

console.log("Total Expense by Married Customers (Chained):", totalExpenseChained); // prints 7000

// foreach - iterate over array elements

const fearr = [1,2,3,4,5]

let sum = 0;
fearr.forEach((element) => {
    sum += element;
});

console.log("Sum using forEach:", sum); // prints 15

//entries()

const arrItr = fearr.entries();
console.log("Array Iterator", arrItr.next().value); // prints [ 0, 1 ]
console.log("Array Iterator", arrItr.next().value); // prints [ 1, 2 ]

for(const [index, element] of arrItr){
    console.log(index, element);
}

//values()

const arrItr2 = fearr.values();

for (const value of arrItr2){
    console.log("Array Values Iterator:", value);
}

//flatMap()
const fmarr = [1,2,3];

const flatMappedArr = fmarr.flatMap((element) => element*2);

console.log("FlatMapped Array:", flatMappedArr); // prints [ 2, 4, 6 ]
console.log("Complex map", fmarr.map(element => [element*2])); // prints [ [ 2 ], [ 4 ], [ 6 ] ]
console.log("Complex map", fmarr.flatMap((element) => [element*2])); // prints [ 2, 4, 6 ]