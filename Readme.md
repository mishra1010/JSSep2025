# Day 1 - Introduction

![alt text](attachments/image.png)

Use JS in html
- Script tag preferred with js file

Browser downloads and executes html and prepares DOM, then downloads scripts and then executes the script. If script gets downloaded fast and html execution is still in progress, we get errors as we might not have reach the declarations in html.

Ex - script tag is in head which performs an activity on a variable

HTML execution is in progress while script execution starts but it fails as it could not find the variable during execution by the browser.

For this we add script tag at the end of body in html or we can use async (used for third party libraries which needs to be download on the background) which will solve the issue but not completely  and then defer which will wait to execute the js only after the html executes all the lines.

# Day 2 - Variables

![variables](attachments/image-1.png)

specifiers - control the scope of variables and how many times it can be changed. 

let

const

let/const storage_name = value

let fruit = "mango"

= assignment operator

![reassign](attachments/image-2.png)

reassign variable has the new value

Value Assignment

Pass by value
![alt text](attachments/image-3.png)

Primitive (pass by value) data types - num, string, boolean, undefined, null, BigInt, Symbol

![pass by value](attachments/image-4.png)

Non-primitive data types - function, array, object

Rules for naming variables -

![variables](attachments/image-5.png)

![standards](attachments/image-6.png)

var: Function-scoped, can be redeclared (not recommended)

let: Block-scoped, can be reassigned and cannot be redeclared

const: Block-scoped, cannot be reassigned

Declare variables only once and assign value multiple times based on use case.

Primitive variables are stored in stack and non-primitive in heap. Each location has an address with with the item in stack can get the value from heap by pointing to the address. 

![stackheap](attachments/image-7.png)

JS performs the following for each line of code -

- Tokenizing - Break line in to pieces/tokens to validate grammar of JS. 
![alt text](attachments/image-8.png)

- Parsing - Tree structure with Abstract syntax tree with all the tokens where in each node tokens will be there and definitions
![alt text](attachments/image-9.png)

- Interpreting - Machine learning code

![alt text](attachments/image-10.png)

Everything we write in JS gets converted to AST.

# Day 3 - Logic building first steps - Operators and Expressions

// Operator - + - * / % ++ --

// Comparison Operator - == (only checks value) === (strict equality - checks type) != !== > < >= <=

// Logical Operator - && || !

// Bitwise Operator - & | ^ ~ << >> >>>

// Ternary Operator - condition ? true : false

// Assignment Operator - = += -= *= /= %=

// String Operator - +, +=

![alt text](attachments/image-11.png)

coalescing operator - first value is returned if it is not null or undefined, else second value is returned

Bitwise Operator

![alt text](attachments/image-12.png)


![alt text](attachments/image-13.png)

![alt text](attachments/image-14.png)

Relational Operator - in, instanceof

Grouping - takes higher precedence in BODMAS

console.log((p + q) * r)

typeof - returns the data type in JS

# Day 4 - Control flow in JS

Control flow of execution rather than line by line. We needto control the flow by using if, if-else, switch-case, break, continue

![alt text](attachments/image-15.png)

if-else is not suitable for more cases and we use switch case for multiple cases.

![alt text](attachments/image-16.png)

above - no case matches, hence use default

default:
    console.log("Nothing is matched")

If-else is sequential but in switch JS forms a table and directly goes to the matching case. So, it is performance efficient.

complex logical conditions - If-else is the way and if some basic matches to be done its switch case

Ternary case - 
![alt text](attachments/image-18.png)

Example
![alt text](attachments/image-17.png)

Answer is - All these are in India and then break gets executed

# Day 5 - Loops and Iterations in JS

for, break, continue, while (do not kow in advance how many timesloop will execute)

![alt text](attachments/image-19.png)

Single dimension - 1D for loop

Multi dimension - ND (Nested loop)

break and continue - break breaks a loop and continue moves to the next by skipping current execution

While
![alt text](attachments/image-20.png)

do-while
loop runs atleast once before doing condition check

![alt text](attachments/image-21.png)

Infinite loop - avoid this as this never terminates
![alt text](attachments/image-22.png)

# Day 6 - Functions in JS

![alt text](attachments/image-23.png)

We will not cover

![alt text](attachments/image-24.png)

Lines of code which are repeated in execution of code can be made as functions and then called to execute them

![alt text](attachments/image-25.png)

Parameters - are placeholders for inputswhile declaring a function

arguments - are the actual values which are passed during function execution

return value from function to be used anywhere else in the program

return
result; - gives NAN

console.log will give undefined for the result operations

Default parameter
![alt text](attachments/image26.png)

if we do not give a default value, then b's value is NAN and result output will be undefined.

Rest Parameter

![alt text](attachments/image27.png)

Rest is always at the end, cannot be at first or midddle.

Nested Function - This is a step towards learning closure

Outer Fun -> Inner Fun -> return Inner func when outer executes

callback function - call me after sometime

callback -> promise -> async

Pure Function - useful in component driven architecture in React

provides same output as log as we provide the same input. In cases we will provide the same argument but the output will differ because of certain external factors which makesthe function impure

that means it depends on another variable for ex to get the outcome and if variablechanges the output willchange for same input each time. That is called side effect.

Higher Order Function (HOF)

Take another function as argument or return a function. Useful to create wrappers

Ananymous Fn
 Function with no name

IIFE Fn
Annonymous function which gets executed immediately without calling it. Plugin dev when browser loads, this function executes. ex- get a chatbot or get logo, open whatsapp

Arrow Fn

() =>({})

CallStack - Datastructure of function execution

![alt text](attachments/image28.png)

Example with 3 functions

This is simple one where each one gets executed in an order and then gets out of the stack

![alt text](attachments/image-31.png)

This one
![alt text](attachments/image-29.png)

f1,f2,f3

first f1 gets executed and comes out, then f2 and then f3 - LIFO (stack)

![alt text](attachments/image-30.png)

Recursion - Function calling itself

Why do we need this?

It has a cost

It needs to have a base or exit criteria - else max call stack size reached

# Day 7 - Build JS projects

Rock, Paper, Scissors Game develop

Assumptions -

1. Prompt user to get input

2. computer's selection will be random

3. Compare user and computers choice

4. Announce the winner

5. After winner announcement, we can ask the user to play again or quit the game

# Module 2 - Day 8 - Execution Context and call stack

Lexical env - how and where your code is placed, so that JS adheres to JS grammar and converts the code to 
machine language

fun x(){
    var y ="xxx"
}

x();

Placement of variable above

Execution context - Code currently running is managed by JS execution context.

![alt text](attachments/Execcontext.png)
1. GEC -(ex- window is a global object, this keyword is there in global window object this === window)
    Creation Phase
        1. window object
        2. thiskeyword
        3. window === this
        4. Allocate memory for variable name and function in this example
        5. Name will be initialized by undefined
        6. The function body will be placed directly into memory
    Execution Phase
        1. it will assign valueto variable name
        2. function execution will not happen as its not called or invoked
        3. When function is invoked,then we will get FEC - Function Exec context
![alt text](attachments/funcexeccontext.png)

Eample -

![alt text](attachments/execcontextexample.png)
    
Memory structure

1. Stack - primitive
3. Heap - non-primitive

For each of the code line - GEC gets created and so on
![alt text](attachments/memstructure.png)

Then stack gets cleared from top and garbage collection comes to picture

Stack clearing
![alt text](attachments/clearstack.png)

Garbage collection
![alt text](attachments/gcclear.png)

Overall Memory execution

![alt text](overallmemexecution.png)

# Day 9 - Hoisting ad Temporal Dead Zone

At exec time JS hoists variable name if it executes before the variable is declared.

JS allocates memory in creation phase and hence value is nothing (undefined)
![alt text](attachments/hoist.png)

Var is not used for these reasons as we get confused when thevar is declared and when its used. So,we should use
let or const

With let we will get error - cannot access name before initialization. The variable gets created and is not initialized with any value as in case of var. ifit does not have any value or initialization we cannot use it in our program.

With const also we will get error

Temporal Dead Zone - Area where we cannot access a variable until it is initialized.

![alt text](attachments/tdz.png)

Function hoisting - phase where creating memory for your function is called function hoisting, creating memory for variable and initialization is called variable hoisting

![alt text](attachments/functionhoistexec.png)

For the following we will get error as here memory is created for avariable test

![alt text](attachments/fnerror.png)

//we will get type error - test is not a function
//because test is undefined at the time of call
//as var is hoisted but not the assignment  
![alt text](attachments/fnexprerror.png)

# Day 10 - Scope and Scope Chain in JS

Where a variable is accessible in JS determines the scope of variable. Following are types of scope in JS

1. Global scope 2. Function Scope 3. Block Scope 4. Module Scope

Global - if we declare variable with let, its not added as a property of the window object which is global. With var, it becomes a property of the window object. else let or var declared in global scope can be accessed everywhere

Function scope - variables declared in a function can be accessed within the function and not outside

Block Scope - for, switch, {} , variables declared with let and const cannot be accessed outside but var can be accessed outside

var is function scoped but let and const are block scoped

Scope chain - first JS checks variables at local level, then if it does not find, it goes out and checks above and similarly it checks to find any variables during execution

![alt text](attachments/scopechain.png)

Variable shadowing - its when a variable in inner scope has the same name as in outer scope, so it is shadowing or hiding the outer scope variable with the inner scope variable.

JS prioritizes the variable in inner scope rather than in the outer scope

![alt text](attachments/vardeclardetails.png)

![alt text](attachments/vardeclardetails1.png)

Var should not be used in loops or inside blocks asits accessible in the whole program. Hence, it can be reassigned which might cause bigger issues difficult to troubleshoot. So, let is the best way

# Day 11 - Closure in JS

To learn closure we should have good understanding of inner and outer functions, scope

Vars declared in outer function can be accessed by inner function but vars declared in inner function cannot be accessed by outer function.

Lexical scoping


Closure - inner function has access to outer function's variables even after the outer function has returned
Closure - combination of function and lexical environment within which that function was declared
Closure - gives you access to an outer function's scope from an inner function
Closure - created every time a function is created, at function creation time

We can only return 1 function from a function and cannot return multiple functions. For such implementations to house multiple return for functions we would need to use objects, next session.

closure always holds the reference of a variable declared in outer function. we should not use closure in case of big data as it can result in memory issues and performance.

Example - closure always refers to the reference variable and hence this is not garbage collected,with time this can result in huge problems as memory is not cleaned up

![alt text](attachments/closureissue.png)

Advantages of closure -

1. We can keep the variable private without exposing it

2. we can stop variable pollution

3. we can make a function factory method

4. We can keep a variable alive in multiple calls as all closure have access to the outer function variable

Lets see in a function timer, like we saw count, bank account before to see its effectiveness

# Day 12 - Objects in JS

![alt text](attachments/objectscoverage.png)

key - value pair in JS. Declared with {}

user.age, user.name

user["is Admin]: true - use subscript for declaring special char vars. Same is used to retrieve

delete user["is Admin] - used to delete theproperty from object

Contructor object gives blue print for car, obnly object literal usedto give key and value

Another way to declare object is using keyword Object

Object - stored in heap as its non-primitive type, uses pass by reference

Static methods in Objects

Object Destructuring - instead of using object.property to get the value we can also use

const {names, age, meal="bread"} = student - this does the same thing. we can also add a new property and add a default value in the declaration.

# Day 13 - this in JS

Global Exec context - this keyword points to window object

Outer function or inner function - this always refers to window function

this in Object refers to the same object

In strict mode - JS does not allow this keyword to refer to window object in a standalone function. The value of this will be undefined always for outer,inner or any other function.

In arrow function this keyword is resolved by the lexical scope which is global and hence points to window object in strict mode

strict mode is used to make JS adhere to JS rules for development and is generally used

this keyword - in global scope, in standalone function, inside standalone function in strict mode, this keyword with implicit binding in object method, this keyword in arrow function,
this keyword in arrow function that is in another function scope or object, this keyword with explicit binding - with call, apply, bind, this keyword with objectcreated with new keyword

# Day 14 - Error Handling in JS

![alt text](attachments/errorhandling.png)

1. parsing error - due to grammar of js, needs to be fixed by fixing the grammar of code
2. Runtime error - needs to be handled to give good experience to end user


Handle errors with try and catch block

try {
    do something with logic and code
} catch(error){
    do something with the error
}

Rethrow - rethrow error from catch

finally - always gets executed (cleanup actions)

# Day 15 - Javascript Array 

Rest - ... in left of operator in variables

Spread - ... in right of operator in values


