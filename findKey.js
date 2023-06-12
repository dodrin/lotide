const asserEqual = require("./assertEqual");
//The function takes an object and callback function as parameters
//Iterate over the object and return the first key for which the callback returns a truthy value
//If no key is found then it should return undefined

const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key])) {
      console.log(key);
      return key;
    }
  }
  
  return undefined;
};

//TEST CODE
// let testobj = {
//   "Blue Hill": { stars: 1 },
//   Akaleri: { stars: 3 },
//   noma: { stars: 2 },
//   elBulli: { stars: 3 },
//   Ora: { stars: 2 },
//   Akelarre: { stars: 3 },
// };

// asserEqual(
//   findKey(testobj, (x) => x.stars === 2),
//   "noma"
// );

module.exports = findKey;