// ===================================
// Task 4: Object Methods
// ===================================

let student = {
  name: "Rahim",
  age: 22,
  city: "Chittagong",
};

// Object.keys()
console.log("Keys:", Object.keys(student));

// Object.values()
console.log("Values:", Object.values(student));

// Object.entries()
console.log("Entries:", Object.entries(student));

// hasOwnProperty()
console.log("Has name property:", student.hasOwnProperty("name"));