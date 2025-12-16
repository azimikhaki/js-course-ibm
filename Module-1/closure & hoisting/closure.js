// *********************************************************************
// Closure in JavaScript
// A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.
// Closures are often used to create private variables and methods.

// When outer() returns:

// Its execution ends

//* Its data survives because something still references it

//* No reference → garbage collected
//* Reference exists → environment stays alive

// That’s it. No ghosts. No time travel.


//* One brutal sentence to remember forever

// A closure is a function that remembers where it came from, even after the party is over.




// “Closure Helps create clean and secure APIs”
// Example: A simple bank account API using closure (classic example)
function bankAccount(balance) {
  // balance is private to the bankAccount function scope and cannot be accessed directly from outside
  // We return an object with methods that can interact with the balance through closure
  return {
    deposit(amount) {
      balance += amount;
    },
    withdraw(amount) {
      balance -= amount;
    },
    getBalance() {
      return balance;
    },
  };
}

// What users cannot do:
// account.balance = 1_000_000; // Nope

// What users can do:
const account = bankAccount(500);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance()); // 600

console.log(`Before withdraw: ${account.getBalance()}`);
account.withdraw(200);
console.log(`After withdraw: ${account.getBalance()}`);






// *********************************************************************
// Another example demonstrating closure
function createLogger(prefix) {

    // The returned function is a closure
    return function (msg) {
        console.log(prefix + ": " + msg);
    };
}

const errorLogger = createLogger("ERROR");
const infoLogger  = createLogger("INFO");

errorLogger("This is an error message.");
infoLogger("This is an info message.");

// The prefix variable is private to the createLogger function scope
// and cannot be accessed directly from outside
// But the returned function can access it through closure


// errorLogger.prefix = "WARNING"; // Nope
// infoLogger.prefix = "DEBUG"; // Nope












// *********************************************************************
// Another example demonstrating closure
function greet(name) {
  let greeting = "Hello, ";
  function sayHello() {
    console.log(greeting + name);
  }
  return sayHello;
}

const greetJohn = greet("John")
greetJohn(); // Hello, John

const greetJane = greet("Jane")
greetJane(); // Hello, Jane