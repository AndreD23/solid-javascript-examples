/**
 * The Interface Segregation Principle states that clients should not be forced to depend on interfaces they do not use.
 * Basically, it's better to have many smaller, specialized interfaces rather than one large, general purpose interface.
 */

// Before (Violating ISP):

/*
interface Veihicle {
  startEngine(): void;
  stopEngine(): void;
  drive(): void;
  fly(): void;
}

class Car implements Vehicle {
  startEngine() {
    console.log("Starting car engine...");
  }

  stopEngine() {
    console.log("Stopping car engine...");
  }

  drive() {
    console.log("Driving car...");
  }

  fly() {
    throw new Error("Cars can't fly!");
  }
}

class Airplane implements Vehicle {
  startEngine() {
    console.log("Starting airplane engine...");
  }

  stopEngine() {
    console.log("Stopping airplane engine...");
  }

  drive() {
    throw new Error("Airplanes can't drive!");
  }

  fly() {
    console.log("Flying airplane...");
  }
}

*/

// In the above example, the Vehicle class has four methods: startEngine, stopEngine, drive, and fly.
// The Car class inherits from Vehicle but overrides the fly method because cars can't fly.
// The Airplane class also inherits from Vehicle but overrides the drive method because airplanes can't drive on roads.

// After (Following ISP):

interface Vehicle {
  startEngine(): void;
  stopEngine(): void;
}

interface Drivable extends Vehicle {
  drive(): void;
}

interface Flyable extends Vehicle {
  fly(): void;
}

class Car implements Drivable {
  startEngine() {
    console.log("Starting car engine...");
  }

  stopEngine() {
    console.log("Stopping car engine...");
  }

  drive() {
    console.log("Driving car...");
  }
}

class Airplane implements Flyable {
  startEngine() {
    console.log("Starting airplane engine...");
  }

  stopEngine() {
    console.log("Stopping airplane engine...");
  }

  fly() {
    console.log("Flying airplane...");
  }
}

// In the refactored code, we have three interfaces: Vehicle, Drivable, and Flyable.
// The Car class implements the Drivable interface, which includes the drive method.
// The Airplane class implements the Flyable interface, which includes the fly method.
// This way, each class only depends on the methods it actually uses, and we avoid forcing clients to depend on unnecessary methods.
