const numberOfVowels = function(data) {
  // Put your solution here
  let numVowels = 0;
  for (let char of data) {
    let c = char.toLowerCase();
    switch (c) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      numVowels++;
    }
  }
  return numVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));