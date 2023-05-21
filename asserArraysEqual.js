//FUNCTION IMPLEMENTAION
const asserArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`😭😭😭Assertion Failed: ${arr1} !== ${arr2}`);
  }
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      result ++;
    }
  }
  if (result !== arr1.length) {
    console.log(`😭😭😭Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  }
};

//test
asserArraysEqual([1, 2, 3], [1, 2, 3]);
asserArraysEqual([1, 2, 3], [3, 2, 1]);

asserArraysEqual(["1", "2", "3"], ["1", "2", "3"]); 
asserArraysEqual(["1", "2", "3"], ["1", "2", 3]); 