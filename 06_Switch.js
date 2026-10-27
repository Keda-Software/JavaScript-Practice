let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Simple calculator using switch
let first = 10;
let second = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(first + second);
    break;
  case "-":
    console.log(first - second);
    break;
  case "*":
    console.log(first * second);
    break;
  case "/":
    console.log(second !== 0 ? first / second : "Cannot divide by zero");
    break;
  default:
    console.log("Unknown operator");
}