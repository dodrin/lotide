//COPY OF assertEqual
const asserEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`😭Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION
const findKey = (obj, callback) => {
  for (const key in obj) {
    if(callback(obj[key])) {
      console.log(key);
      return key;
    }
  }
};

//TEST CODE
let testobj ={
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }};
/*
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
*/

asserEqual(findKey(testobj, x => x.stars === 2), "noma");