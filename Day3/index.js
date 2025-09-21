console.log("Day 3");

// Operator - + - * / % ++ --

// Comparison Operator - == === != !== > < >= <=
// Logical Operator - && || !
// Bitwise Operator - & | ^ ~ << >> >>>
// Ternary Operator - condition ? true : false

// Assignment Operator - = += -= *= /= %=
// String Operator - +, +=
let a = 10;
let b = 20;
console.log(a + b); // 30
console.log(a-b); // -10
console.log(a*b); // 200
console.log(a/b); // 0.5
console.log(a%b); // 10
console.log(a**b); // 10^20

let count = 5
console.log(count++); // 5 (post increment)
console.log(++count); // 7 (pre increment)
console.log(count--); // 7 (post decrement)
console.log(--count); // 5 (pre decrement)

console.log(0 == false); // true
console.log(3 == '3'); // true
console.log(3 === '3'); // false
console.log(3 != '3'); // false
console.log(3 !== '3'); // true
console.log(null === null); // true
console.log(undefined === undefined); // true strict equality also checks type with value
console.log(null == undefined); // true

let obj1 = {name: "John"}
let obj2 = {name: "John"}
console.log(obj1 === obj2); // false
console.log(obj1 !== obj2);

//logical

console.log(true && true); // true
console.log(true && false); // false
console.log(false || true); // true
console.log(false && false); // false

console.log("cow" && "dog"); // dog
console.log("cow" || "dog"); // cow
console.log(!true)

//coalescing operator - first value is returned if it is not null or undefined, else second value is returned
console.log(null ?? "dog"); // dog
console.log(undefined ?? "dog"); // dog
console.log(false ?? "dog"); // dog

//conditional (ternary) operator - evaluated basded on condition

let age = 18;
console.log(age >= 60 ? "senior citizen" : "junior citizen");

//Bitwise operator - works on binary representation of numbers
// & | ^ ~ << >> >>>

console.log(5 & 3); // 1 (0101 & 0011 = 0001)
console.log(5 | 3); // 7 (0101 | 0011 = 0111)
console.log(5 ^ 3); // 6 (0101 ^ 0011 = 0110)
console.log(~5); // -6 (inverts bits and adds 1 to get negative)
console.log(5 << 1); // 10 (0101 << 1 = 1010)
console.log(5 >> 1); // 2 (0101 >> 1 = 0010)

//Relational operator - in, instanceof

//Grouping operator - ( )

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r); // 7
console.log((p + q) * r); // 9 - BODMAS rule

console.log(typeof "hello") // string
console.log(typeof 5)// number
console.log(typeof true)// boolean

const numbers = [1, 2, 3];
console.log(typeof numbers); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined

//instanceof

console.log(numbers instanceof Array); // true
console.log(numbers instanceof Object); // true