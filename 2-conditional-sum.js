const conditionalSum = function(values, condition) {
  // Your code here
  const evenOrOdd = condition === "even" ? 0 : 1;
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === evenOrOdd) {
      sum += values[i];
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));