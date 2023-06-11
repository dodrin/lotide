const eqArrays = require("./eqArrays");

// Rules
// 1. Returns true if both objects have identical keys with identical values.
// 2. Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //1. They have same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  //2. the value for each key in one object is the same as the value for that same key in the other object
  for (const key of keys1) {
    // set names to the values of each object
    const value1 = object1[key];
    const value2 = object2[key];

    //if value is array can't be simply compared hence use eqArrays
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    }

    if (typeof value1 === "object" && typeof value2 === "object") {
      return eqObjects(value1, value2);
    }

    //Otherwise just simply compare the value
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
