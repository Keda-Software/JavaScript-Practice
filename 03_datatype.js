// String
let name = "Abel";
console.log(name);
console.log(typeof name);

// Number
let age = 20;
let price = 99.5;
console.log(typeof age);
console.log(typeof price);

// Boolean
let isStudent = true;
let isGraduated = false;
console.log(isStudent);
console.log(typeof isStudent);

// Undefined
let address;
console.log(address);
console.log(typeof address);

// Null
let phoneNumber = null;
console.log(phoneNumber);

// BigInt
let bigNumber = 12345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);

// Symbol
let uniqueId = Symbol("id");
console.log(typeof uniqueId);

// Array
let subjects = ["HTML", "CSS", "JavaScript"];
console.log(subjects);
console.log(Array.isArray(subjects));

// Object
let student = {
  name: "Abel",
  age: 20
};
console.log(student);
console.log(typeof student);

// Function
function greet() {
  return "Hello";
}
console.log(typeof greet);

// Check a value
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null); // "object" (historical quirk)