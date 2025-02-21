// @ts-check

class Vehicle {

    // TODO: For "status," use a union of literals to declare valid status options: "started" or "stopped"
    status: "started" | "stopped" = "stopped";
    make: string;
    model: string;
    wheels: number;

    constructor(make: string, model: string, wheels: number) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}

// TODO: Adjust the Car and MotorCycle classes, as needed according to any TypeScript errors.
class Car extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model, 4);
    }
}

class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model, 2);
    }
}

function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "started") {
        console.log("The vehicle is running.");
    } else {
        console.log("The vehicle is stopped.");
    }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);


