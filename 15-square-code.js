const squareCode = function(message) {
  let encodedMsg = "";
  let noSpcMsg = message.replace(/\s/g,'');
  let charPerLine = Math.ceil(Math.sqrt(noSpcMsg.length));
  for (let i = 0; i < charPerLine; i++) {
    for (let j = i; j < noSpcMsg.length; j += charPerLine) {
      encodedMsg += noSpcMsg[j];
    }
    encodedMsg += ' ';
  }
  return encodedMsg;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));