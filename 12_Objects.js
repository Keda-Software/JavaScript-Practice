// Create an object
const student = {
  name: "Abel",
  age: 21,
  department: "Software Engineering",
  grade: 90,
  isActive: true
};

// Access properties
console.log(student.name);
console.log(student["age"]);

// Update a property
student.grade = 95;
console.log(student.grade);

// Add a property
student.email = "abel@example.com";
console.log(student.email);

// Delete a property
delete student.isActive;
console.log(student);

// Add a method
student.introduce = function () {
  return `My name is ${this.name}`;
};

console.log(student.introduce());

// List property names
console.log(Object.keys(student));

// List property values
console.log(Object.values(student));

// List key-value pairs
console.log(Object.entries(student));

// Check a property
console.log("name" in student);

// Loop through properties
for (const key in student) {
  console.log(key, student[key]);
}

// Destructure object properties
const { name, age } = student;
console.log(name, age);

// Copy an object (shallow copy)
const studentCopy = { ...student };
console.log(studentCopy);

// Merge objects
const extraInfo = { city: "Dessie", year: 3 };
const completeStudent = { ...student, ...extraInfo };
console.log(completeStudent);

// Object with an array
const classroom = {
  teacher: "Sara",
  students: ["Abel", "Miki", "Hana"]
};

console.log(classroom.students[0]);

// Array of objects
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Sara" }
];

console.log(users[1].name);