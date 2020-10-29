const camelCase = function(input) {
  let str = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      if ((i + 1) < input.length && input[i + 1] !== ' ') str += input[++i].toUpperCase();
    } else {
      str += input[i];
    }
  }
  return str;
};
/* Short version; not sure if we were allowed to use regex and .replace()
const camelCase = function(input) {
  let output = input.trim();
  return output.replace(/ (.)/g,(str) => {
    return str[1].toUpperCase();
  });
};
*/

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));