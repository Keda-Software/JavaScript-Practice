// Global scope
let globalMessage = "I am global";

function showGlobal() {
  console.log(globalMessage);
}

showGlobal();

// Function scope
function exampleFunction() {
  let localMessage = "I am local";
  console.log(localMessage);
}

exampleFunction();

// localMessage is unavailable outside its function
// console.log(localMessage); // ReferenceError

// Block scope with let
if (true) {
  let blockValue = 100;
  console.log(blockValue);
}

// blockValue is unavailable here
// console.log(blockValue); // ReferenceError

// Block scope with const
if (true) {
  const country = "Ethiopia";
  console.log(country);
}

// var is not block-scoped
if (true) {
  var city = "Dessie";
}

console.log(city);

// Function scope with var
function testVar() {
  var message = "Inside function";
  console.log(message);
}

testVar();

// Function parameters have local scope
function calculate(number) {
  let result = number * 2;
  return result;
}

console.log(calculate(5));

// Nested function scope
function outer() {
  let outerValue = "Outer";

  function inner() {
    let innerValue = "Inner";
    console.log(outerValue);
    console.log(innerValue);
  }

  inner();
}

outer();