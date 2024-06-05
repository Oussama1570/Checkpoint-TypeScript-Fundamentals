var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create a Car instance
var myCar = new Car("Toyota", "Camry", 2023);
// Call start method on the Car instance
myCar.start(); // Output: Car engine started



// Please Open your terminal and navigate
// to the directory containing the JavaScript file. Then, run the following command (in the console):

// node vehicle.js