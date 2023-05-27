//FUNCTION IMPLEMENTATION
const asserEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`😭Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
asserEqual('cat', 'cat');
asserEqual(1, 1);
asserEqual(4, 8);    