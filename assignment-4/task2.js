// ===================================
// Task 2: map() & filter()
// ===================================

let numbers = [10, 20, 30, 40, 50];

// map() use for adding 10 with each number
let newNumbers = numbers.map(function (num) {
  return num + 10;
});

console.log(newNumbers);

// filter() use for showing the big numbers of 30
let filteredNumbers = numbers.filter(function (num) {
  return num > 30;
});

console.log(filteredNumbers);