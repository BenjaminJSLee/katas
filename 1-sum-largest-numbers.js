const sumLargestNumbers = function(data) {
  // Put your solution here
  let largest, secondLargest;
  if (data.length < 2) return undefined;
  if (data[0] > data[1]) {
    largest = data[0];
    secondLargest = data[1];
  } else {
    largest = data[1];
    secondLargest = data[0];
  }
  for (let i = 2; i < data.length; i++) {
    if (data[i] > largest) {
      secondLargest = largest;
      largest = data[i];
    } else if (data[i] > secondLargest) {
      secondLargest = data[i];
    }
  }
  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));