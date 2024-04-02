/**
 * The Liskov Substitution Principle (LSP) states that in an object-oriented program,
 * if we substitute a superclass object reference with an object of its subclasses,
 * the program should not break and should remain functioning in the same way.
 */

// Before (Violating LSP):

/*
class Bird {
  fly() {
    console.log("Flying...");
  }

  walk() {
    console.log("Walking...");
  }

  layEggs() {
    console.log("Laying eggs...");
  }
}

class Duck extends Bird {
  fly() {
    console.log("Duck flying...");
  }

  walk() {
    console.log("Duck walking...");
  }

  layEggs() {
    console.log("Duck laying eggs...");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can’t fly!");
  }

  walk() {
    console.log("Penguin walking...");
  }

  layEggs() {
    console.log("Penguin laying eggs...");
  }
}
*/

// If you work with a Penguin instance through a Bird reference and call the fly method, it will throw an error.
// That means you've violated the Liskov Substitution Principle, which requires that Penguin instances to be
// completely interchangeable with Bird instances.

// After (Following LSP):

class Bird {
  walk() {
    console.log("Walking...");
  }

  layEggs() {
    console.log("Laying eggs...");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying...");
  }
}

class Duck extends FlyingBird {
  fly() {
    console.log("Duck flying...");
  }

  walk() {
    console.log("Duck walking...");
  }

  layEggs() {
    console.log("Duck laying eggs...");
  }
}

class Penguin extends Bird {
  walk() {
    console.log("Penguin walking...");
  }

  layEggs() {
    console.log("Penguin laying eggs...");
  }
}

const duck = new Duck();
duck.fly();
duck.walk();
duck.layEggs();

const penguin = new Penguin();
penguin.walk();
penguin.layEggs();
// penguin.fly(); // This will throw an error, which is expected

/**
 * In the above code, the capability to fly is moved to a separate class FlyingBird.
 * Now, Penguin and Duck are subclasses of Bird and FlyingBird respectively.
 * We are not violating Liskov Substitution Principle because we refer Penguin as Bird
 * it only has functionality of walk and laying eggs which is actually a functionality of Bird.
 */
