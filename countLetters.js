//The function takes a string/sentence as parameter
//Iterate over the string and count the charactere(s)
//It will not count " ". It will return the number of character(s)

const countLetters = (str) => {
  const result = {};
  for (const char of str) {
    if (char !== " ") {
      if (!result[char]) {
        result[char] = 1;
      } else {
        result[char] += 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;