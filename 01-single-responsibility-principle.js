/*
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  setDetails(name, email) {
    this.name = name;
    this.email = email;
  }

  saveUser() {
    console.log(`Saving ${this.name}...`);
    // Code to save user details to database
  }

  sendEmail(message) {
    console.log(`Sending email to ${this.email}`);
    // Code to send an email to the user
  }

  calculateAge(birthDate) {
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const user = new User("John Doe", "example@example.com");
user.saveUser();
user.sendEmail("Hello, John!");
console.log(user.calculateAge(new Date("1990-01-01")));
*/

/**
 * This User class is responsible for several different concerns: setting user details,
 * saving to the database, sending an email, and calculating the user's age.
 *
 * After refactoring by applying the Single Responsibility Principle,
 * we could break down the functionality into more specific classes:
 */

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  setDetails(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  saveUser(user) {
    console.log(`Saving ${user.name}...`);
    // Code to save user details to database
  }
}

class EmailService {
  sendEmail(user, message) {
    console.log(`Sending email to ${user.email}`);
    // Code to send an email
  }
}

class AgeService {
  calculateAge(birthDate) {
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const user = new User("John Doe", "example@example.com");
const userRepository = new UserRepository();
const emailService = new EmailService();
const ageService = new AgeService();

userRepository.saveUser(user);
emailService.sendEmail(user, "Hello, John!");
console.log(ageService.calculateAge(new Date("1990-01-01")));
