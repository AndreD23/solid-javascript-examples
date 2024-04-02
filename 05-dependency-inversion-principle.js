/**
 * The Dependency Inversion Principle (DIP) advises that higher-level modules
 * should not depend on lower-level modules. Both should depend on abstractions.
 * In addition, abstractions should not depend upon details.
 * Details should depend upon abstractions.
 */

// Before (Not following DIP):

/*
class Store {
  constructor(user) {
    this.paypal = new Paypal(user);
  }

  purchaseBook(quantity, price) {
    this.paypal.makePayment(price * quantity);
  }

  purchaseCourse(quantity, price) {
    this.paypal.makePayment(price * quantity);
  }
}

class Paypal {
  constructor(user) {
    this.user = user;
  }

  makePayment(amount) {
    console.log(`${this.user} made payment of ${amount}`);
  }
}
*/

// In the above example, the Store class is directly dependent on the Paypal class.
// If we want to change the payment method, we have to modify the Store class.

// After (Following DIP):

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseItem(quantity, price) {
    this.paymentProcessor.pay(price * quantity);
  }
}

class Paypal {
  constructor(user) {
    this.user = user;
  }

  pay(amount) {
    console.log(`${this.user} made payment of ${amount} using Paypal`);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  pay(amount) {
    console.log(`${this.user} made payment of ${amount} using Stripe`);
  }
}

const store = new Store(new Paypal("John"));
store.purchaseItem(2, 50);

const store2 = new Store(new Stripe("Jane"));
store2.purchaseItem(3, 100);

// In the updated design, the Store class is no longer directly dependent on the Paypal class.
// Instead, it depends on an abstraction (paymentProcessor) that can be implemented by different payment processors.
// This allows us to easily switch between different payment processors without modifying the Store class.
// This design respects the Dependency Inversion Principle.
