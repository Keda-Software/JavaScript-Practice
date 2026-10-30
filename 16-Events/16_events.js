const button = document.getElementById("clickButton");
const title = document.getElementById("title");
const input = document.getElementById("nameInput");
const result = document.getElementById("result");
const box = document.getElementById("hoverBox");

// Click event
button.addEventListener("click", () => {
  title.textContent = "Button clicked!";
});

// Double-click event
button.addEventListener("dblclick", () => {
  console.log("Double-clicked");
});

// Mouse enter
box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "lightblue";
});

// Mouse leave
box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "white";
});

// Input event
input.addEventListener("input", () => {
  result.textContent = input.value;
});

// Change event
input.addEventListener("change", () => {
  console.log("Input changed:", input.value);
});

// Keyboard event
input.addEventListener("keydown", event => {
  console.log("Key pressed:", event.key);
});

// Enter key
input.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    result.textContent = `Hello, ${input.value}!`;
  }
});

// Focus event
input.addEventListener("focus", () => {
  input.style.borderColor = "blue";
});

// Blur event
input.addEventListener("blur", () => {
  input.style.borderColor = "";
});

// Prevent the default action in a form
// form.addEventListener("submit", event => {
//   event.preventDefault();
// });

// One-time event listener
button.addEventListener("click", () => {
  console.log("This listener runs once");
}, { once: true });

// Remove an event listener using a named function
function showMessage() {
  console.log("Hello!");
}

button.addEventListener("click", showMessage);
button.removeEventListener("click", showMessage);