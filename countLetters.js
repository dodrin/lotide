const countLetters = (str) => {
  const result = {};
  for (const char of str) {
    //skip the operation if the character is " "
    if (char !== " ") {
      //check if the character already exist in the result object
      //if not, set a value to 1, if already exist count up
      if (!result[char]) {
        result[char] = 1;
      } else {
        result[char] += 1;
      }
    }
  }
  return result;
};