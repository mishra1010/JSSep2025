console.log("Day 11")
function outer(){
    let a = 10;
    return function inner(){
        
        console.log(a);
    }
} 

const fun = outer();
console.log(fun);
console.log(fun());

// Closure - inner function has access to outer function's variables even after the outer function has returned
// Closure - combination of function and lexical environment within which that function was declared
// Closure - gives you access to an outer function's scope from an inner function
// Closure - created every time a function is created, at function creation time

//Real world example - Bank Account

function createBankAccount(initialBalance){
    let balance = initialBalance; // private variable

    return {
        deposit: (amount) =>{
            if(amount > 0){
            balance += amount;
            console.log(`Deposited: ${amount}, New Balance: ${balance}`);
            }
        },
        withdraw: (amount) =>{
            if(amount > 0 && amount <= balance){
                balance -= amount;
                console.log(`Withdrew: ${amount}, New Balance: ${balance}`);
            } else {
                console.log('Insufficient funds or invalid amount');
            }
        },
        getBalance: () => console.log(`Current Balance: ${balance}`) //balance variable is a closure 
        // accessible from outside function which is the lexical scope of getBalance function
    };


//Below are separate functions which cannot be returned together and hence we take these and return via objects
    // deposit(amount) {
    //     if(amount > 0){
    //         balance += amount;
    //         console.log(`Deposited: ${amount}, New Balance: ${balance}`);
    //     }
    
    // withdraw(amount) {
    //     if(amount > 0 && amount <= balance){
    //         balance -= amount;
    //         console.log(`Withdrew: ${amount}, New Balance: ${balance}`);
    //     } else {
    //         console.log('Insufficient funds or invalid amount');
    //     }
}

const myAccount = createBankAccount(1000);
console.log(myAccount); // returns the object with 3 methods
// console.log(myAccount(3000)); // Deposited: 3000, New Balance: 4000
// console.log(myAccount(2000)); // Deposited: 2000, New Balance: 6000
console.log(myAccount.deposit) // function definition
console.log(myAccount.deposit(500)); // Deposited: 500, New Balance: 1500
console.log(myAccount.withdraw(200)); // Withdrew: 200, New Balance: 1300
console.log(myAccount.getBalance()); // Current Balance: 1300
console.log(myAccount.withdraw(2000)); // Insufficient funds or invalid amount

//closure alwys remembers the last state of the variable

//timer

function timer(){
    let secs = 0; // private variable
    return function(){
        secs++;
        console.log("elapsed seconds: ", secs);
    }

    
}

const timerInstance = timer();
console.log(timerInstance()); //1
console.log(timerInstance()); //2
console.log(timerInstance()); //3   

//closure in EventHandler

function setupButton(){
    let clickCount = 0;
    document.getElementById('myButton').addEventListener('click', function(){
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}   

setupButton();

//closure in async function