const firstInput = document.getElementById("firstNumber");
const secondInput = document.getElementById("secondNumber");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("[data-op]");

// Convert inputs and validate
function getNumbers() {
  if (firstInput.value.trim() === "" ||
      secondInput.value.trim() === "") {
    result.textContent = "Enter both numbers.";
    return null;
  }

  const first = Number(firstInput.value);
  const second = Number(secondInput.value);

  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    result.textContent = "Enter valid numbers.";
    return null;
  }

  return { first, second };
}

// Calculate based on operator
function calculate(operator) {
  const numbers = getNumbers();

  if (numbers === null) {
    return;
  }

  const { first, second } = numbers;
  let answer;

  switch (operator) {
    case "+":
      answer = first + second;
      break;
    case "-":
      answer = first - second;
      break;
    case "*":
      answer = first * second;
      break;
    case "/":
      if (second === 0) {
        result.textContent = "Cannot divide by zero.";
        return;
      }
      answer = first / second;
      break;
    default:
      result.textContent = "Invalid operator.";
      return;
  }

  result.textContent = `Result: ${answer}`;
}

// Connect each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    calculate(button.dataset.op);
  });
});

// Reset the displayed result when inputs change
firstInput.addEventListener("input", () => {
  result.textContent = "Ready to calculate";
});

secondInput.addEventListener("input", () => {
  result.textContent = "Ready to calculate";
});