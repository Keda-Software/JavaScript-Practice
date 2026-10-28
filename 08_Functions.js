// Function declaration
function greet() {
  console.log("Hello!");
}

greet();

// Function with parameters
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

greetUser("Abel");

// Function with two parameters
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

// Subtraction
function subtract(a, b) {
  return a - b;
}

console.log(subtract(20, 5));

// Multiplication
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5));

// Default parameter
function welcome(name = "Student") {
  return `Welcome, ${name}`;
}

console.log(welcome());
console.log(welcome("Sara"));

// Function expression
const divide = function (a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};

console.log(divide(20, 4));

// Arrow function
const square = (number) => {
  return number * number;
};

console.log(square(5));

// Short arrow function
const double = number => number * 2;
console.log(double(10));

// Check even numbers
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(8));

// Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(100, 3));