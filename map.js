//FUCTION DEFENITION
// Our map function will take in two arguments:
// 1. An array to map
// 2. A callbac function
// The map function will return a new array based on the results of the callbak function.

const words = ["mouse", "bull", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "hen", "dog", "pig"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
 }
 return results;
};
const result = map(words, word => word[0]);
console.log(result); 

//COPY assertArraysEqual
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
const expected = ['m', 'b', 't', 'r', 'd', 's', 'h', 's', 'm', 'h', 'd', 'p'];
assertArraysEqual(result, expected);