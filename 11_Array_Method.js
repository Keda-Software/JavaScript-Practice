const numbers = [1, 2, 3, 4, 5, 6];

// forEach: perform an action
numbers.forEach(number => {
  console.log(number);
});

// map: transform each item
const doubled = numbers.map(number => number * 2);
console.log(doubled);

// filter: keep matching items
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// reduce: calculate one result
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

// find: return the first match
console.log(numbers.find(number => number > 3));

// findIndex: return the first matching index
console.log(numbers.findIndex(number => number > 3));

// some: check whether any item matches
console.log(numbers.some(number => number > 5));

// every: check whether all items match
console.log(numbers.every(number => number > 0));

// includes: check for a value
console.log(numbers.includes(3));

// Sort numbers in ascending order
const values = [40, 5, 100, 20];
console.log([...values].sort((a, b) => a - b));

// Sort numbers in descending order
console.log([...values].sort((a, b) => b - a));

// Get part of an array
console.log(numbers.slice(1, 4));

// Flat-map example
const words = ["hello world", "learn JavaScript"];
console.log(words.flatMap(word => word.split(" ")));

// Chaining array methods
const result = numbers
  .filter(number => number % 2 === 0)
  .map(number => number * number)
  .reduce((total, number) => total + number, 0);

console.log(result);

// Example with student marks
const marks = [55, 80, 35, 90, 70];
const passed = marks.filter(mark => mark >= 50);
console.log(passed);

// Average mark
const average = marks.reduce((total, mark) => total + mark, 0) / marks.length;
console.log(average);