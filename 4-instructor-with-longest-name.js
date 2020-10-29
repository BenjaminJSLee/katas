const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let nameLength = 0;
  let longestName;
  for (let instructor of instructors) {
    if (instructor.name.length > nameLength) {
      longestName = instructor;
      nameLength = instructor.name.length;
    }
  }
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));