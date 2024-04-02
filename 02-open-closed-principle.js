/**
 * The Open/Closed Principle (OCP) states that classes should be open for extension but closed for modification.
 * Meaning, we should be able to add new functionality to a class without changing its existing source code.
 */

// Suppose we're working with different types of orders in an e-commerce application.

// Before (Violating OCP):

/*
class OrderProcessor {
  constructor(order) {
    this.order = order;
  }

  process() {
    if (this.order.type === "standard") {
      console.log("Processing standard order...");
      // Logic for processing standard orders...
    }

    if (this.order.type === "express") {
      console.log("Processing express order...");
      // Logic for processing express orders...
    }
  }
}

const standardOrder = { type: "standard" };
const expressOrder = { type: "express" };

const standardOrderProcessor = new OrderProcessor(standardOrder);
standardOrderProcessor.process();

const expressOrderProcessor = new OrderProcessor(expressOrder);
expressOrderProcessor.process();

*/

// The above OrderProcessor class violates the Open/Closed Principle
// because each time we add a new type of order, we have to modify the process() method.

// After (Following OCP):

class Order {
  process() {
    throw new Error('You have to implement the method called "process"!');
  }
}

class StandardOrder extends Order {
  process() {
    console.log("Processing standard order...");
    // Logic for processing standard orders...
  }
}

class ExpressOrder extends Order {
  process() {
    console.log("Processing express order...");
    // Logic for processing express orders...
  }
}

class OrderProcessor {
  constructor(order) {
    if (!(order instanceof Order)) {
      throw new Error("OrderProcessor can only process orders of type Order!");
    }
    this.order = order;
  }

  process() {
    this.order.process();
  }
}

const standardOrder = new StandardOrder();
const expressOrder = new ExpressOrder();

const standardOrderProcessor = new OrderProcessor(standardOrder);
standardOrderProcessor.process();

const expressOrderProcessor = new OrderProcessor(expressOrder);
expressOrderProcessor.process();

/**
 * In the updated design, the OrderProcessor class is now closed for modification but open for extension.
 * If we want to handle a new type of order, we just make a new class extending the Order class and implement
 * the process() method accordingly, without modifying OrderProcessor.
 * This design respects the Open/Closed Principle.
 */
