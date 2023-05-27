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

//COPY assertEqual FUNCTION
const asserEquals = (actual, expected) => {
  if (actual !== expected) {
    console.log(`😭Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //array of keys of each objects
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  //1. They have same number of keys
  if (key1.length !== key2.length) {
    return false;
  }

  //2. the value for each key in one object is the same as the value for that same key in the other object
  for (const key of key1) {
    //values of each object
    let value1 = object1[key];
    let value2 = object2[key];
    //if value is array cannt be simply compared 
    if (Array.isArray(value1) && Array.isArray(value2)) {
      return eqArrays(value1, value2);
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

//TEST CODE
const shirtobject = {color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
eqObjects(shirtobject, anotherShirtObject);
asserEquals(eqObjects(shirtobject, anotherShirtObject), true);

const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
eqObjects(shirtobject, longSleeveShirtObject);
asserEquals(eqObjects(shirtobject, longSleeveShirtObject), false);

const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = {size: "medium", colors: ["red", "blue"]};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject);
asserEquals(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMulticolorShirtObject = {size: "medium", colors: ["red", "blue"], sleeveLength: "long"};
eqObjects(multiColorShirtObject, longSleeveMulticolorShirtObject);
asserEquals(eqObjects(multiColorShirtObject, longSleeveMulticolorShirtObject), false);