//Composition - Use of other classes to build functionality

class Engine {
    start() {
        console.log("Engine started");
    }
}

class Car {
    constructor() {
        this.engine = new Engine(); // Car has an Engine
    }
    start() {
        this.engine.start(); // Delegating the start action to the engine
    }
}

const car = new Car();
car.start(); // Engine started