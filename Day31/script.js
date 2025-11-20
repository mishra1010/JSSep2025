const user ={
    "name": "Bob","age": 25,"city": "New York","u-id": 101
    }
    const myAge = 'age';
    console.log(user['age']);  // Accessing age property using bracket notation
    console.log(user[myAge]);  // Accessing age property using variable
    console.log(user.age);  // Accessing age property using dot notation
    console.log(user.myAge);  // Undefined, as myAge is not a property of user

    console.log(user.name);  // Accessing name property
    //console.log(user.u-id);  // Accessing u-id property leads to error duer to hyphen
    console.log(user["u-id"]);  // Correct way to access u-id property

    //car as constructor function
function Car(model, color, year, owner) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.owner = owner; // owner is an object
    this.wheelNumber = function() {
        return 4; // Assuming all cars have 4 wheels
    }
}

//Now lets create car as class - syntactuc sugar over constructor function

class Car1{
    constructor(model, color, year, owner){
        this.model = model;
        this.color = color;
        this.year = year;
        this.owner = owner; // owner is an object
    }
    wheelNumber(){
        return 4; // Assuming all cars have 4 wheels
    }
}

// Creating an owner object
const owner = {
    name: "Alice",
    age: 30,
    city: "Los Angeles"
};

bmwCar1 = new Car1("BMW X5", "Black", 2020, owner);
console.log(bmwCar1);
console.log("Owner Name:", bmwCar1.owner.name);

//extending car

class LuxuryCar extends Car1{
    constructor(model){
        super(model)
    }
    isLuxury(){
        return true;
    }
}

const lc = new LuxuryCar("Mercedes S-Class");
console.log(lc.model);
console.log("Is Luxury Car:", lc.isLuxury());
console.log(lc);

// create object using Object.create
const vehicle = {
    isLuxury: false,
    isFourWheeler: false,

    showInfo: function() {
        return `The vehicle ${this.name} is of ${this.color} color. Luxury: ${this.isLuxury}, Four Wheeler: ${this.isFourWheeler}`;
}
}
const myVehicle = Object.create(vehicle);
console.log(myVehicle);

myVehicle.name = "Toyota Camry";
myVehicle.isLuxury = "true";

console.log(myVehicle.showInfo());

//Get prototype of an object
console.log(bmwCar1.__proto__);
console.log(Object.getPrototypeOf(bmwCar1));

//also set prototype of an object