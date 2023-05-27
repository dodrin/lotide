//FUNCTION IMPLEMENTATION
const assertEquals = (actual, expected) => {
  if (actual !== expected) {
    console.log(`😭Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
};

//TEST CODE
assertEquals("Lighthouse Labs", "Bootcamp");
assertEquals('cat', 'cat');
assertEquals(1, 1);
assertEquals(4, 8);    