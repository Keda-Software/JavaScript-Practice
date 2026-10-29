// Array destructuring
const colors = ["Red", "Green", "Blue"];
const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);

// Skip an array element
const numbers = [10, 20, 30];
const [one, , three] = numbers;
console.log(one, three);

// Default values
const [a = 1, b = 2] = [100];
console.log(a, b);

// Swap variables
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(x, y);

// Object destructuring
const student = {
  name: "Abel",
  age: 21,
  city: "Dessie"
};

const { name, age, city } = student;
console.log(name, age, city);

// Rename a variable
const { name: studentName } = student;
console.log(studentName);

// Object default values
const { country = "Ethiopia" } = student;
console.log(country);

// Nested destructuring
const user = {
  profile: {
    username: "abel21",
    level: 3
  }
};

const { profile: { username, level } } = user;
console.log(username, level);

// Function parameter destructuring
function displayStudent({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

displayStudent(student);

// Array parameter destructuring
function add([first, second]) {
  return first + second;
}

console.log(add([10, 20]));

// Rest with array destructuring
const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail);

// Nested array destructuring
const data = [[1, 2], [3, 4]];
const [[firstValue], [secondValue]] = data;
console.log(firstValue, secondValue);

// Destructure function results
function getCoordinates() {
  return [10, 20];
}

const [latitude, longitude] = getCoordinates();
console.log(latitude, longitude);

