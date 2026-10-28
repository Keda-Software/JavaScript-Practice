// Create an array
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);

// Access array elements
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Get array length
console.log(fruits.length);

// Change an element
fruits[1] = "Orange";
console.log(fruits);

// Add elements
fruits.push("Avocado");
console.log(fruits);

// Remove the last element
fruits.pop();
console.log(fruits);

// Add at the beginning
fruits.unshift("Grapes");
console.log(fruits);

// Remove the first element
fruits.shift();
console.log(fruits);

// Find an index
console.log(fruits.indexOf("Banana"));

// Check whether an item exists
console.log(fruits.includes("Apple"));

// Loop through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// For...of loop
for (const fruit of fruits) {
  console.log(fruit);
}

// Combine arrays
let numbers = [1, 2, 3];
let moreNumbers = [4, 5, 6];
let combined = numbers.concat(moreNumbers);
console.log(combined);

// Slice without changing the original
console.log(combined.slice(1, 4));

// Join elements into a string
console.log(fruits.join(", "));

// Sort strings
let names = ["Sara", "Abel", "Miki"];
names.sort();
console.log(names);

// Reverse the array
names.reverse();
console.log(names);

// Remove an element by index
let colors = ["Red", "Green", "Blue"];
colors.splice(1, 1);
console.log(colors);

// Nested arrays
let matrix = [[1, 2], [3, 4]];
console.log(matrix[0][1]);