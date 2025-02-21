// @ts-check
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, wheels) {
        // TODO: For "status," use a union of literals to declare valid status options: "started" or "stopped"
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    Vehicle.prototype.start = function () {
        this.status = "started";
    };
    Vehicle.prototype.stop = function () {
        this.status = "stopped";
    };
    return Vehicle;
}());
// TODO: Adjust the Car and MotorCycle classes, as needed according to any TypeScript errors.
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model) {
        return _super.call(this, make, model, 4) || this;
    }
    return Car;
}(Vehicle));
var MotorCycle = /** @class */ (function (_super) {
    __extends(MotorCycle, _super);
    function MotorCycle(make, model) {
        return _super.call(this, make, model, 2) || this;
    }
    return MotorCycle;
}(Vehicle));
function printStatus(vehicle) {
    if (vehicle.status === "started") {
        console.log("The vehicle is running.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
var myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
var myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
// Part 3 :
// TODO: Modify NCycle to accept a generic type.
// TODO: Allow make and model to have either the generic type or an array of the generic type.
var NCycle = /** @class */ (function () {
    function NCycle(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    NCycle.prototype.start = function () {
        this.status = "started";
    };
    NCycle.prototype.stop = function () {
        this.status = "stopped";
    };
    NCycle.prototype.print = function (par) {
        if (par === void 0) { par = 0; }
        // "This is a <make> <model> NCycle." if make and model are not arrays.
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            console.log("This is a ".concat(this.make, " ").concat(this.model, " NCycle."));
        }
        else if (Array.isArray(this.make) && Array.isArray(this.model)
            && this.make.length > par && this.model.length > par) {
            console.log("This NCycle has a ".concat(this.make[par], " ").concat(this.model[par], " at ").concat(par));
        }
        else {
            console.log("This NCycle was not created properly");
        }
    };
    NCycle.prototype.printAll = function () {
        if (Array.isArray(this.make) && Array.isArray(this.model)
            && this.make.length === this.model.length) {
            for (var i = 0; i < this.make.length; i++) {
                console.log("This is a ".concat(this.make[i], " ").concat(this.model[i], " NCycle."));
            }
        }
    };
    return NCycle;
}());
// Testing
var testCycle1 = new NCycle(1, 2, 3);
testCycle1.print();
testCycle1.printAll();
var testCycle2 = new NCycle("This", "That", 4);
testCycle2.print();
testCycle2.printAll();
