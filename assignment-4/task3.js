// ===================================
// Task 3: reduce(), find(), findIndex()
// ===================================

let marks = [40, 55, 70, 85, 30];

// reduce() use for showing total marks
let totalMarks = marks.reduce(function (total, mark) {
  return total + mark;
});

console.log("Total Marks:", totalMarks);

// find() use for finding >=70 mark
let firstMark = marks.find(function (mark) {
  return mark >= 70;
});

console.log("First Mark:", firstMark);

// findIndex() use for showing 85 index
let index = marks.findIndex(function (mark) {
  return mark === 85;
});

console.log("Index of 85:", index);