//COPY eqArrays 
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; arr1.length > i; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//COPY eqobjects
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (const key of key1) {
    let value1 = object1[key];
    let value2 = object2[key];
    
    if (Array.isArray(value1) && Array.isArray(value2)) {
      return eqArrays(value1, value2);
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

//FUCNTION IMPLEMENTATION
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😭😭Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CODE
const shirtobject = {color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
assertObjectsEqual(shirtobject, anotherShirtObject);
