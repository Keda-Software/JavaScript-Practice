let score = 85;

// Simple if statement
if (score >= 50) {
  console.log("You passed!");
}

// If and else
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Multiple conditions
if (score >= 90) {
  console.log("Grade A+");
} else if (score >= 80) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else if (score >= 50) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// Check age
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Check an even number
let number = 12;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Combine conditions
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

// Ternary operator
let result = score >= 50 ? "Pass" : "Fail";
console.log(result);