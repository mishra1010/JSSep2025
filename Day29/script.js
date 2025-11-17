class Aclass {
    constructor() {

    }
    method1() {}
    method2() {}
    method3() {}
    method4() {}
}

const a = new Aclass();
const b = new Aclass();
console.log(a);
console.log(b);

console.log(a===b);

// Initialize the Object

class Car{
    constructor(model){
        this.model = model;
    }
    printThis(){
        console.log(this);
    }
    printModel(){
        console.log(this.model);
    }
}

const bmwCar = new Car("BMW");
const audiCar = new Car("Audi");
bmwCar.printThis();
audiCar.printThis();
bmwCar.printModel();
//{model: "BMW"}

console.log(typeof Car); // function
console.log(typeof bmwCar); // object

// class as expression - its similar to function expression

const makeUser = function() {
    //
}

makeUser();

const Employee = class {
    welcome(){
        console.log("Welcome Employee");
    }

}

const emp = new Employee();
emp.welcome();

//Named Class

const Dept = class Department{
    welcome(){
        console.log(Department); // Department is accessible only inside the class
        console.log("Welcome to Department");
    }
}

const d = new Dept();
d.welcome();

// Class Fields

class Phone{
    brand = "Apple";

    make(){
        console.log(this.brand);
    }
}

const phone = new Phone();
console.log(phone);
phone.make();

class Animal{
    constructor(name){
        this.name = name;
    }

    get name(){
    return `the animal name is ${this._name}`;
}
    set name(value){
        if(!value){
            console.warn("A name is required");
            return;
        }
        if(value.length < 3){
            console.warn("Name is too short");
            return;
        }
        this._name = value;

    }

}
const animal = new Animal("Lion");
console.log(animal.name);

//Static properties - utility methods

class MyClass{
    static staticMethod(){
        console.log(this);
        console.log("I am static method");
    }

}
MyClass.staticMethod();

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    greet(){
        console.log(`Welcome ${this.name}`);
        }

    //static utility method
    static isValidEmail(email){
        return email.includes("@") && email.includes(".");
    }   

    //static factory method

    static createGuest() {
        return new User("Guest", "guest@example.com");
    }

}
const user = new User("John", "x@y.com");
user.greet();

valid = User.isValidEmail("ssss"); // false
console.log(valid);

const guestUser = User.createGuest();
console.log(guestUser);
guestUser.greet();

//Private - accessible only inside the class and Public - accessible from anywhere

class WashingMachine{

    brand; // public field

    #powerStatus = false; // private field
    #currentCycle = null; // private field

    constructor(brand){
        this.brand = brand;
    }

    //public method
    start(cycle){
        if(!this.#powerStatus){
            this.#turnOn();
        }
        this.#currentCycle = cycle;
        console.log(`Washing Machine started with ${cycle} cycle`);
        this.#spin();
        this.#drain();
        this.stop();
    }

    stop(){
        console.log("Washing Machine stopped");
        this.#turnOff();
    }
    //private methods
    #turnOn(){
        this.#powerStatus = true;
        console.log("Power ON");
    }
    #turnOff(){
        this.#powerStatus = false;
        console.log("Power OFF");
    }
    #spin(){
        console.log("Spinning...");
    }
    #drain(){
        console.log("Draining...");
    }
  

}

const wm = new WashingMachine("LG");
console.log(wm);
wm.start("Quick Wash");
//wm.#turnOn(); // Error: Private field '#turnOn' must be declared in an enclosing class


// Extending

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

class Student extends Human {
    constructor(name, age, grade) {
        super(name, age); // Call the parent class constructor
        this.grade = grade;
    }
    study(){
        console.log(`${this.name} is studying.`);
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I am in grade ${this.grade}.`);
    }
}

class Teacher extends Human {
    constructor(name, age, subject) {
        super(name, age); // Call the parent class constructor
        this.subject = subject;
    }
    teach() {
        console.log(`Hello, my name is ${this.name}and I teach ${this.subject}.`);
    }
}

const alice = new Student("Alice", 20, 9);
alice.introduce(); // Overridden method
alice.study();
alice.sleep(); // Inherited method
const bob = new Teacher("Bob", 35, "Mathematics");
bob.introduce(); // Inherited method
bob.teach();
bob.sleep(); // Inherited method
