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
// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;