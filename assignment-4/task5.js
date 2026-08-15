// ===================================
// Task 5: Set
// ===================================

let numberSet = new Set([10, 20, 30]);

// add() use for adding the number 40
numberSet.add(40);

// delete() use for removing the number 20
numberSet.delete(20);

// has() use for chacking the number 30
console.log("Has 30:", numberSet.has(30));

// forEach() use  for value print
console.log("Set Values:");
numberSet.forEach(function (value) {
  console.log(value);
});