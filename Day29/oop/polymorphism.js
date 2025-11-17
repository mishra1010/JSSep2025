//Polymorphism - Methods behave differently based on object type

class Car {
    drive() {
        console.log('Driving a car');
    }
}

class ElectricCar extends Car {
    drive() {
        console.log('Driving an electric car');
    }
}

const myCars = [new Car(), new ElectricCar()];

myCars.forEach(car => car.drive());
// Output:
// Driving a car
// Driving an electric car