// Spread an array
const first = [1, 2, 3];
const second = [...first];
console.log(second);

// Combine arrays
const third = [...first, 4, 5];
console.log(third);

// Insert values between array elements
const middle = [0, ...first, 4];
console.log(middle);

// Spread a string
console.log([..."Hello"]);

// Copy an object
const user = { name: "Abel", age: 21 };
const copy = { ...user };
console.log(copy);

// Add or override properties
const updated = { ...user, age: 22, city: "Dessie" };
console.log(updated);

// Merge objects
const details = { country: "Ethiopia" };
console.log({ ...user, ...details });

// Rest parameter collects arguments
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));

// Rest with a normal parameter
function introduce(firstName, ...otherNames) {
  console.log(firstName);
  console.log(otherNames);
}

introduce("Abel", "Miki", "Sara");

// Spread arguments into a function
function multiply(a, b, c) {
  return a * b * c;
}

const values = [2, 3, 4];
console.log(multiply(...values));

// Find maximum using spread
console.log(Math.max(...[10, 50, 20]));

// Rest in array destructuring
const [firstItem, ...remaining] = [10, 20, 30];
console.log(firstItem, remaining);

// Remove a property using rest
const account = { id: 1, name: "Abel", password: "hidden" };
const { password, ...publicAccount } = account;
console.log(publicAccount);

// Spread makes only a shallow copy
const original = { items: [1, 2] };
const shallow = { ...original };
console.log(shallow.items);

// Optional: clone a flat array
const clonedNumbers = [...values];
console.log(clonedNumbers);