// String
let name = "Abel";
console.log(name);
console.log(typeof name);

// Number
let age = 20;
let price = 99.5;
console.log(typeof age);
console.log(typeof price);

// Boolean
let isStudent = true;
let isGraduated = false;
console.log(isStudent);
console.log(typeof isStudent);

// Undefined
let address;
console.log(address);
console.log(typeof address);

// Null
let phoneNumber = null;
console.log(phoneNumber);

// BigInt
let bigNumber = 12345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);

// Symbol
let uniqueId = Symbol("id");
console.log(typeof uniqueId);

// Array
let subjects = ["HTML", "CSS", "JavaScript"];
console.log(subjects);
console.log(Array.isArray(subjects));

// Object
let student = {
  name: "Abel",
  age: 20
};
console.log(student);
console.log(typeof student);

// Function
function greet() {
  return "Hello";
}
console.log(typeof greet);

// Check a value
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null); // "object" (historical quirk)


// --- SIMPLE PROJECT: Product Inventory & Price Calculator ---

// 1. Array of Objects (combining reference and primitive data types)
const inventory = [
  { id: 101, name: "Wireless Mouse", price: 25.99, quantity: 15, inStock: true },
  { id: 102, name: "Mechanical Keyboard", price: 79.99, quantity: 5, inStock: true },
  { id: 103, name: "Gaming Monitor", price: 249.50, quantity: 0, inStock: false },
  { id: 104, name: "USB-C Hub", price: 19.99, quantity: 30, inStock: true }
];

// 2. Function to display all products (Uses Strings, Numbers, and Booleans)
function displayInventory(items) {
  console.log("=== STORE INVENTORY REPORT ===");
  items.forEach(item => {
    // Template literals combine strings and variable values seamlessly
    console.log(`- ${item.name} | Price: $${item.price} | Qty: ${item.quantity} | Stock: ${item.inStock}`);
  });
  console.log("-----------------------------\n");
}

// 3. Function to filter in-stock items (Uses Boolean checking)
function getAvailableItems(items) {
  return items.filter(item => item.inStock === true);
}

// 4. Function to calculate total inventory value (Uses Number arithmetic)
function calculateTotalValue(items) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}

// --- Running the Project ---

// Display the full list
displayInventory(inventory);

// Get and display only available products
const availableProducts = getAvailableItems(inventory);
console.log(`Items currently in stock: ${availableProducts.length}`);

// Calculate total asset value
const totalValue = calculateTotalValue(inventory);
console.log(`Total Value of Inventory: $${totalValue.toFixed(2)}`);