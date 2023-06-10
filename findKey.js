const asserEqual = require("./assertEqual");

//FUNCTION IMPLEMENTATION
//1. function which takes an object and a callback
const findKey = (obj, callback) => {
  //2. scan the object and return the first key for which the callback returns a truthy value.
  for (const key in obj) {
    if (callback(obj[key])) {
      console.log(key);
      return key;
    }
  }
  //3. no key is found then it should return undefined
  return undefined;
};

//TEST CODE
let testobj = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

asserEqual(
  findKey(testobj, (x) => x.stars === 2),
  "noma"
);
