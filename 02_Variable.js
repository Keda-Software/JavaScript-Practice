// Declare variables
let studentName = "Abel";
let age = 21;
let grade = 90;

// Display variables
console.log(studentName);
console.log(age);
console.log(grade);

// Change a let variable
age = 22;
grade = 95;

console.log(age);
console.log(grade);

// Declare a constant
const country = "Ethiopia";
const university = "My University";

console.log(country);
console.log(university);

// Constants cannot be reassigned
// country = "Kenya"; // Error

// Old variable declaration
var city = "Dessie";
console.log(city);

// var can be reassigned
city = "Addis Ababa";
console.log(city);

// Variables can store calculations
let price = 100;
let quantity = 3;
let total = price * quantity;

console.log(total);

// Variables can store Boolean values
let isStudent = true;
console.log(isStudent);

// Use descriptive variable names
let firstName = "Sara";
let monthlySalary = 15000;

// Combine variables
let fullName = firstName + " Ali";
console.log(fullName);

// Template literals
console.log(`Hello, ${firstName}!`);
console.log(`Salary: ${monthlySalary}`);

// const prevents reassignment, not object mutation
const scores = [80, 90];
scores.push(95);
console.log(scores);