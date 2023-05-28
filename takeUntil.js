//COPY assertArraysEqual.js
const assertArraysEqual = function(arr1, arr2) {
  let failMsg = `😭😭Assertion Failed: ${arr1} !== ${arr2}`;
  let passMsg = `✅✅✅Assertion Passed: ${arr1} === ${arr2}`;

  if (arr1.length !== arr2.length) {
    console.log(failMsg);
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(failMsg);
      return false;
    }
  }
  console.log(passMsg)
  return true;
};

//FUNCTION IMPLEMENTATION
const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    //if the callback function returns a truthy value when invoked with the current item,
    //it immediately return result array and finishes loop.
    //otherwise the current item is added into result array
    if(callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  } return result;
}

//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expected1 = [1, 2, 5, 7, 2];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(expected1, results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ]
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(expected2, results2);