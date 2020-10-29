const urlDecode = function(text) {
  let obj = {};
  let propArr = text.replace(/%20/g,' ').match(/[^=&]+=[^=&]+/g);
  for (let newProp of propArr) {
    let propAndVal = newProp.split('=');
    obj[propAndVal[0]] = propAndVal[1];
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);