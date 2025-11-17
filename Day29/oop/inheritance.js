//Inheritance - child class inherit behavior from parent class

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    drive() {
        console.log(`Driving a ${this.make} ${this.model}`);
    }
}

class ElectricCar extends Car {
    constructor(make, model, batteryCapacity) {
        super(make, model); // Call the parent class constructor
        this.batteryCapacity = batteryCapacity;
    }
    drive() {
        console.log(`Driving a ${this.make} ${this.model} with a battery capacity of ${this.batteryCapacity} kWh`);
    }
}
const myCar = new Car('Toyota', 'Corolla');
myCar.drive(); // Driving a Toyota Corolla

const myElectricCar = new ElectricCar('Tesla', 'Model S', 100);
myElectricCar.drive(); // Driving a Tesla Model S with a battery capacity of 100 kWh