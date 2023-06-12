const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

//The function takes 2 objects as parameters
// Returns assertion message if the objects match or not
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😭😭Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CODE
// const shirtobject = {color: "red", size: "medium"};
// const anotherShirtObject = {size: "medium", color: "red"};
// assertObjectsEqual(shirtobject, anotherShirtObject);
