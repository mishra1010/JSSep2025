//Abstraction - Hiding internal details and showing only essential features

class Car {
    startEngine(){
        this.#injectFuel();
        this.#ignite();
        console.log("Engine Started");
    }
    #injectFuel(){
        console.log("Fuel Injected");
    }
    #ignite(){
        console.log("Ignition Started");
    }

}
const car = new Car();
car.startEngine();
