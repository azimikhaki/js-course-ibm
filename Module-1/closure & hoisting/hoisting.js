//* Function Hoisting in JavaScript
// Function hoisting, is a behavior in Javascript where function 
// declarations are moved to the top of their containing scope 
// during the compilation phase, allowing you to use a function 
// before it's actually declared in the code.

sayHello(); // This works due to hoisting

function sayHello() {
    console.log("Hello, World!");
}


//* But Function Expressions are not hoisted
// meaning you cannot call them before they are defined in the code.

greet(); // This will result in an error

const greet = function() {
    console.log("Greetings!");
};
