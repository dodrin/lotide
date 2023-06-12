//The function takes an sentence/string as parameter
//It will iterate through the sentence and store each letter positions into a new object
//result will be the new object with letters as keys, letter positions as values
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

module.exports = letterPositions;