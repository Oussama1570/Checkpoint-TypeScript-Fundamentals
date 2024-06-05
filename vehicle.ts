interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  public make: string;
  public model: string;
  public year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Create a Car instance
const myCar = new Car("Toyota", "Camry", 2023);

// Call start method on the Car instance
myCar.start(); // Output: Car engine started