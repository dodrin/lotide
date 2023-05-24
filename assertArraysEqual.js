//FUNCTION IMPLEMENTAION
const asserArraysEqual = function(arr1, arr2) {
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

//test
asserArraysEqual([1, 2, 3], [1, 2, 3]);
asserArraysEqual([1, 2, 3], [3, 2, 1]);

asserArraysEqual(["1", "2", "3"], ["1", "2", "3"]); 
asserArraysEqual(["1", "2", "3"], ["1", "2", 3]); 