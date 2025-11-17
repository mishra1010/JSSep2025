//Encapsulation - Grou related properties and methods, and restrict direct access to internal data

class Car{
    #speed = 0; //private field

    accelerate(){
        this.#speed += 10;      
    }
    getSpeed(){
        return this.#speed;
    }
}

const car = new Car();
car.accelerate();