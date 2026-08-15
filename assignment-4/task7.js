// ===================================
// Task 7: Spread & Rest
// ===================================

// Spread Operator

let a = [1, 2, 3];
let b = [4, 5, 6];

let combinedArray = [a, b];
console.log("Combined Array:", combinedArray);


// Rest Operator

function sum(...numbers) {
  let total = 0;

  numbers.forEach(function (number) {
    total += number;
  });

  return total;
}

console.log("Sum:", sum(10, 20, 30));