//COPY asserEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  let result = 0;
  for (let i = 0; i < array1.length; i++) {
    if(array1[i] === array2[i]) {
      result ++;
    }
  }
  if (result !== array1.length) {
    return false;
  } else {
    return true;
  }
};


//TEST
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 