// Select by ID
const heading = document.getElementById("heading");
console.log(heading);

// Select the first matching element
const message = document.querySelector(".message");
console.log(message);

// Select all matching elements
const messages = document.querySelectorAll(".message");
console.log(messages);

// Read text
console.log(heading.textContent);

// Change text
heading.textContent = "Welcome to JavaScript";

// Change HTML content
const output = document.getElementById("output");
output.innerHTML = "<strong>DOM is powerful!</strong>";

// Change styles
heading.style.color = "blue";
heading.style.fontSize = "32px";

// Change classes
heading.classList.add("active");
heading.classList.remove("active");
heading.classList.toggle("highlight");

// Change attributes
heading.setAttribute("title", "Main heading");
console.log(heading.getAttribute("title"));

// Create an element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created with JavaScript";
document.body.appendChild(newParagraph);

// Create a list
const list = document.createElement("ul");

["HTML", "CSS", "JavaScript"].forEach(subject => {
  const item = document.createElement("li");
  item.textContent = subject;
  list.appendChild(item);
});

document.body.appendChild(list);

// Remove an element
// newParagraph.remove();

// Replace text after a click
document.getElementById("changeButton").addEventListener("click", () => {
  heading.textContent = "You clicked the button!";
});