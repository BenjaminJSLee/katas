/* priorities:
camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
*/

const changeCase = function(input, charCase) {
  let output = input;
  switch (charCase) {
  case "camel":
    output = output.replace(/\s./g,(match)=>{
      return match[1].toUpperCase();
    });
    break;
  case "pascal":
    output = output.replace(/(\s)*\b\w/g,(match)=>{
      return match[match.length - 1].toUpperCase();
    });
    break;
  case "snake":
    output = output.replace(/\s/g,"_");
    break;
  case "kebab":
    output = output.replace(/\s/g,"-");
    break;
  case "title":
    output = output.replace(/\b\w/g,(match)=>{
      return match.toUpperCase();
    });
    break;
  case "vowel":
    output = output.replace(/[aeiou]/g,(match)=>{
      return match.toUpperCase();
    });
    break;
  case "consonant":
    output = output.replace(/[^aeiou]/g,(match)=>{
      return match.toUpperCase();
    });
    break;
  case "upper":
    output = output.replace(/\w/g,(match)=>{
      return match.toUpperCase();
    });
    break;
  case "lower":
    output = output.replace(/\w/g,(match)=>{
      return match.toLowerCase();
    });
    break;
  default:
    break;
  }
  return output;
};

const makeCase = function(input, charCase) {
  let output = input;
  output = output.trim();
  if (typeof charCase === "string") {
    output = changeCase(output,charCase);
  } else {
    for (let priority = 1; priority <= 3; priority++) {
      for (let newCase of charCase) {
        if ((newCase === "camel" || newCase === "pascal" || newCase === "snake" ||
        newCase === "kebab" || newCase === "title") && priority === 1) {
          output = changeCase(output,newCase);
        } else if ((newCase === "vowel" || newCase === "consonant") && priority === 2) {
          output = changeCase(output,newCase);
        } else if ((newCase === "upper" || newCase === "lower") && priority === 3) {
          output = changeCase(output,newCase);
        }
      }
    }
  }
  return output;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));