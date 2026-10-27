// Arithmetic operators
let a = 20;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);

// Assignment operators
let number = 10;
number += 5;
console.log(number);

number -= 3;
console.log(number);

number *= 2;
console.log(number);

// Comparison operators
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

// Prefer strict equality
console.log(5 === 5);
console.log(5 === "5");
console.log(5 !== "5");

// Logical operators
let hasID = true;
let hasTicket = false;

console.log(hasID && hasTicket);
console.log(hasID || hasTicket);
console.log(!hasID);

// Convert strings to numbers
let value = "100";
console.log(Number(value) + 50);

// Convert number to string
let amount = 250;
console.log(String(amount));

// Convert to Boolean
console.log(Boolean(1));
console.log(Boolean(0));

// Convert with parseInt and parseFloat
console.log(parseInt("25px", 10));
console.log(parseFloat("19.75"));