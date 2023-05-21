//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😭Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual('cat', 'cat');
assertEqual(1, 1);
assertEqual(4, 8);    