//COPY eqArrays and asserArraysEqual
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; arr1.length > i; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
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
  console.log(passMsg);
  return true;
};

//FUNCTION IMPLEMENTATION
const letterPositions = (sentence) => {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== ' ') {
      if (!result[sentence[i]]) {
        result[sentence[i]] = [];
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]].push(i);
      }
    }
  }
  return result;
};

//TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);
