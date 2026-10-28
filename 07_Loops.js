// For loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Count backward
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Even numbers
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Multiplication table
let number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// While loop
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

// Do-while loop
let value = 1;

do {
  console.log(value);
  value++;
} while (value <= 5);

// Loop through an array
let fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// For...of
for (const fruit of fruits) {
  console.log(fruit);
}

// Break stops a loop
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Continue skips one iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}