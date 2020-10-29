const calculateChange = function(total, cash) {
  let remainder = cash - total;
  let totalChange = {};
  if (remainder < 0) return undefined;
  let currency = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };
  for (let change in currency) {
    let numOfChange = Math.floor(remainder / currency[change]);
    if (numOfChange > 0) {
      totalChange[change] = numOfChange;
      remainder = remainder % currency[change];
    }
  }
  return totalChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));