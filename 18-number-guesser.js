let prompt = require("prompt-sync")();

const numberGame = function(min,max) {
  if (min > max) return;
  let answer, attempts;
  let randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  answer = prompt("Guess a number: ");
  if (answer === null) return;
  answer = answer.length > 0 ? Number(answer) : NaN;
  attempts = 1;
  while (answer !== randomNumber) {
    if (answer !== 0 && !(answer)) console.log("Not a number! Try again!");
    else if (answer < randomNumber) console.log("Too low! Try again!");
    else if (answer > randomNumber) console.log("Too high! Try again!");
    answer = prompt("Guess a number: ");
    if (answer === null) return;
    answer = answer.length > 0 ? Number(answer) : NaN;
    attempts++;
  }
  console.log(`You got it! You took ${attempts} attempt${attempts > 1 ? "s" : ""}!`);
};

numberGame(1,10);
