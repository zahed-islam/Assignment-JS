// ===================================
// Task 1: Array Methods
// ===================================

let fruits = ["Apple", "Mango", "Banana"];

// push() use for adding "Orange"
fruits.push("Orange");
console.log(fruits);

// pop() use for removing item
fruits.pop();
console.log(fruits);

// forEach() use for showing all fruits
console.log("All Fruits:");
fruits.forEach(function (fruit) {
  console.log(fruit);
});