const eqArrays = require("./eqArrays");
// 1. Returns true if both objects have identical keys with identical values.
// 2. Otherwise you get back a big fat false!
// It can handle nested object and array as object value

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    }

    if (typeof value1 === "object" && typeof value2 === "object") {
      return eqObjects(value1, value2);
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
