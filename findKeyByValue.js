//The function takes an object and a value as parameters
//Returns the key that containes the given value
const findKeyByValue = (obj, value) => {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
