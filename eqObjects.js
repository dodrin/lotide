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
const asserEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`😭Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION
// Rules
// 1. Returns true if both objects have identical keys with identical values.
// 2. Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  //1. They have same number of keys
  if (key1.length !== key2.length) {
    return false;
  }

  //2. the value for each key in one object is the same as the value for that same key in the other object
  for (const key of key1) {
    
    // set names to the values of each object
    let value1 = object1[key];
    let value2 = object2[key];

    //if value is array can't be simply compared hence use eqArrays
    if (Array.isArray(value1) && Array.isArray(value2)) {
      return eqArrays(value1, value2)
    } 
    
    //if valuee is object, recursion
    if (typeof value1 === "object" && typeof value2 === "object") {
        eqObjects(value1, value2);
    }

    //Otherwise just simply compare the value
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

//TEST CODE
const shirtobject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtobject, anotherShirtObject);
asserEqual(eqObjects(shirtobject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtobject, longSleeveShirtObject);
asserEqual(eqObjects(shirtobject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject);
asserEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
);

const longSleeveMulticolorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMulticolorShirtObject);
asserEqual(
  eqObjects(multiColorShirtObject, longSleeveMulticolorShirtObject),
  false
);

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));