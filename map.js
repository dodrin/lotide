const assertArraysEqual = require("./assertArraysEqual");
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

const expected = ['m', 'b', 't', 'r', 'd', 's', 'h', 's', 'm', 'h', 'd', 'p'];
assertArraysEqual(result, expected);