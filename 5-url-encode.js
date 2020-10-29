const urlEncode = function(text) {
  // Put your solution here
  let trimText = text.trim();
  let str = "";
  for (let i = 0; i < trimText.length; i++) {
    if (trimText[i] === ' ') str += "%20";
    else  str += trimText[i];
  }
  return str;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));