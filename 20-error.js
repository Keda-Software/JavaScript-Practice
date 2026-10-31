// Basic try and catch
try {
  let result = unknownVariable;
  console.log(result);
} catch (error) {
  console.log("An error occurred");
}

// Read the error message
try {
  JSON.parse("{invalid json}");
} catch (error) {
  console.log(error.message);
}

// Finally always executes
try {
  console.log("Starting program");
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Program finished");
}

// Throw a custom error
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}

// Validate age
function checkAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }

  return age >= 18 ? "Adult" : "Minor";
}

try {
  console.log(checkAge(20));
} catch (error) {
  console.log(error.message);
}

// Handle JSON errors
const jsonText = '{"name":"Abel"}';

try {
  const user = JSON.parse(jsonText);
  console.log(user.name);
} catch (error) {
  console.log("Invalid JSON");
}

// Handle a function safely
function safeDivide(a, b) {
  try {
    return divide(a, b);
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

console.log(safeDivide(20, 4));
console.log(safeDivide(20, 0));