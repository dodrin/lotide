const assertArraysEqual = function(arr1, arr2) {
  let failMsg = `😭😭Assertion Failed: ${arr1} !== ${arr2}`;
  let passMsg = `✅✅✅Assertion Passed: ${arr1} === ${arr2}`;

  if (arr1 === undefined || arr2 === undefined) {
    console.log(failMsg);
    return false;
  }

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
  console.log(passMsg);
  return true;
};

module.exports = assertArraysEqual;