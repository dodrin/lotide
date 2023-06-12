//The function takes 2 arrays as parameter
//Returns assertion message if they match or not
const assertArraysEqual = function(arr1, arr2) {
  const failMsg = `😭😭Assertion Failed: ${arr1} !== ${arr2}`;
  const passMsg = `✅✅✅Assertion Passed: ${arr1} === ${arr2}`;

  if (arr1 === undefined || arr2 === undefined || arr1.length !== arr2.length) {
    console.log(failMsg);
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(failMsg);
      return false;
    }
  }
  console.log(passMsg);
  return true;
};

module.exports = assertArraysEqual;