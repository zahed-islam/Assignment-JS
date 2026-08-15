// ===================================
// Task 8: Class & Constructor
// ===================================

class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
}

//Object

let student1 = new Student("Rahim", 22, "JavaScript");
let student2 = new Student("Karim", 23, "React");

// Output

console.log(student1);
console.log(student2);