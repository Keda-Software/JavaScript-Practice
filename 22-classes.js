// Define a class
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // Instance method
  introduce() {
    return `I am ${this.name}`;
  }

  // Another method
  getGrade() {
    return this.grade;
  }

  // Update a property
  setGrade(newGrade) {
    this.grade = newGrade;
  }
}

// Create objects
const student1 = new Student("Abel", 21, 90);
const student2 = new Student("Sara", 20, 85);

console.log(student1.introduce());
console.log(student2.introduce());
console.log(student1.getGrade());

// Change a grade
student1.setGrade(95);
console.log(student1.grade);

// Inheritance
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I am ${this.name}`;
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach() {
    return `${this.name} teaches ${this.subject}`;
  }
}

const teacher = new Teacher("Miki", "JavaScript");
console.log(teacher.greet());
console.log(teacher.teach());

// Static method
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 10));

// Private property
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance());

// #balance cannot be accessed directly from outside.