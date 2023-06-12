//The function takes an array as parameter
//return the "head", index 0 element
//If the array is empty returns undefined

const head = function (array) {
  if (array === []) {
    return undefined;
  }
  return array[0];
};

module.exports = head;