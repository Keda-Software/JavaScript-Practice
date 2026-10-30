const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const itemList = document.getElementById("itemList");

// Load saved items
let items = JSON.parse(localStorage.getItem("shoppingItems")) || [];

// Save array to local storage
function saveItems() {
  localStorage.setItem("shoppingItems", JSON.stringify(items));
}

// Display items
function renderItems() {
  itemList.replaceChildren();

  items.forEach((item, index) => {
    const li = document.createElement("li");
    const text = document.createElement("span");
    const deleteButton = document.createElement("button");

    text.textContent = item;
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      items.splice(index, 1);
      saveItems();
      renderItems();
    });

    li.append(text, deleteButton);
    itemList.appendChild(li);
  });
}

// Add an item
function addItem() {
  const item = itemInput.value.trim();

  if (item === "") {
    alert("Enter an item first");
    return;
  }

  items.push(item);
  saveItems();
  renderItems();
  itemInput.value = "";
}

// Button events
addButton.addEventListener("click", addItem);

// Add an item by pressing Enter
itemInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    addItem();
  }
});

// Remove all items
clearButton.addEventListener("click", () => {
  items = [];
  saveItems();
  renderItems();
});

// Read saved storage directly
console.log(localStorage.getItem("shoppingItems"));

// Remove one storage key
// localStorage.removeItem("shoppingItems");

// Clear all local storage for this site
// localStorage.clear();

// Initial rendering
renderItems();