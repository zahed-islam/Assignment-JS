// ===================================
// Task 9: Inheritance & Overriding
// ===================================

// Parent Class
class Person {
  introduce() {
    console.log("Hello, I am a person.");
  }
}

// Child Class
class Students extends Person {
  // Method Overriding
  introduce() {
    console.log("Hello, I am a student.");
  }
}

// Object
let person = new Person();
let students = new Students();

// Output
person.introduce();
students.introduce();